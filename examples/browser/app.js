const screens = Array.from(document.querySelectorAll(".screen"));
const connectionLabel = document.querySelector("#connection-label");
const connectionDot = document.querySelector("#connection-state .state-dot");
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-button");
const loginError = document.querySelector("#login-error");
const serverList = document.querySelector("#server-list");
const characterList = document.querySelector("#character-list");
const creatureList = document.querySelector("#creature-list");
const creatureSearch = document.querySelector("#creature-search");

let client;
let worldTimer;

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginError.textContent = "";
  loginButton.disabled = true;
  setConnectionState("Connecting", "connecting");

  client = new Client();

  try {
    const connectionClosed = new Promise((_, reject) => {
      const rejectWithCloseReason = (event) => reject(event.data.error);
      client.LoginClient.once("ConnectionClosed", rejectWithCloseReason);
      client.GameClient.once("ConnectionClosed", rejectWithCloseReason);
    });
    const login = client.enter({
      Username: document.querySelector("#username").value,
      Password: document.querySelector("#password").value,
      Ip: document.querySelector("#login-host").value.trim(),
      Port: Number(document.querySelector("#login-port").value),
      WebSocketUrl: document.querySelector("#websocket-url").value.trim(),
      SelectServer: chooseServer,
      SelectCharacter: chooseCharacter,
    });
    await Promise.race([login, connectionClosed]);

    setConnectionState("In world", "online");
    showScreen("world-screen");
    renderWorld();
    worldTimer = window.setInterval(renderWorld, 500);
  } catch (error) {
    loginError.textContent = error instanceof Error ? error.message : String(error);
    loginButton.disabled = false;
    setConnectionState("Disconnected");
    showScreen("login-screen");
  }
});

document.querySelector("#logout-button").addEventListener("click", () => {
  window.clearInterval(worldTimer);
  client?.logout();
  window.setTimeout(() => window.location.reload(), 250);
});

creatureSearch.addEventListener("input", renderCreatures);

function chooseServer(servers, suggestedServerId) {
  if (servers.length === 0) {
    return Promise.reject(new Error("The login server returned no available servers."));
  }

  setConnectionState("Choose server", "connecting");
  showScreen("server-screen");
  serverList.replaceChildren();

  return new Promise((resolve) => {
    for (const server of servers) {
      const card = document.createElement("button");
      const online = server.Status !== 4;
      const population = server.MaxPlayers > 0 ? Math.min(100, (server.CurrentPlayers / server.MaxPlayers) * 100) : 0;
      card.type = "button";
      card.className = `selection-card${server.Id === suggestedServerId ? " suggested" : ""}`;
      card.innerHTML = `
        <span class="card-topline">
          <span>Server ${server.Id}</span>
          <span class="status-pill ${online ? "" : "down"}">${online ? serverStatus(server.Status) : "Offline"}</span>
        </span>
        <h2>Realm ${server.Id}</h2>
        <p>${formatNumber(server.CurrentPlayers)} / ${formatNumber(server.MaxPlayers)} players · ${server.Ipv4()}:${server.Port}</p>
        <span class="server-population"><span style="width: ${population}%"></span></span>
      `;
      card.addEventListener("click", () => {
        disableCards(serverList);
        setConnectionState("Entering server", "connecting");
        resolve(server.Id);
      });
      serverList.append(card);
    }
  });
}

function chooseCharacter(characters, suggestedSlot) {
  if (characters.length === 0) {
    return Promise.reject(new Error("No characters are available on this account."));
  }

  setConnectionState("Choose character", "connecting");
  showScreen("character-screen");
  characterList.replaceChildren();

  return new Promise((resolve) => {
    characters.forEach((character, slot) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = `selection-card character-card${slot === suggestedSlot ? " suggested" : ""}`;
      card.innerHTML = `
        <span class="card-topline"><span>Slot ${slot + 1}</span><span>Level ${formatNumber(character.Level)}</span></span>
        <span class="character-glyph">${initials(character.Name)}</span>
        <h2>${escapeHtml(character.Name || `Character ${slot + 1}`)}</h2>
        <p>${escapeHtml(character.ClassName || String(character.ClassId || "Unknown class"))} · ${escapeHtml(String(character.Race || "Unknown race"))}</p>
      `;
      card.addEventListener("click", () => {
        disableCards(characterList);
        setConnectionState("Entering world", "connecting");
        resolve(slot);
      });
      characterList.append(card);
    });
  });
}

function renderWorld() {
  if (!client) return;

  const character = client.Me;
  const hpPercent = percent(character.Hp, character.MaxHp);
  const mpPercent = percent(character.Mp, character.MaxMp);
  document.querySelector("#current-character").innerHTML = `
    <span class="portrait">${initials(character.Name)}</span>
    <h2>${escapeHtml(character.Name || "Adventurer")}</h2>
    <p>Level ${formatNumber(character.Level)} · ${escapeHtml(character.ClassName || String(character.ClassId || "Unknown class"))}</p>
    ${statBar("HP", character.Hp, character.MaxHp, hpPercent, "")}
    ${statBar("MP", character.Mp, character.MaxMp, mpPercent, "mp")}
    <div class="coordinate-grid">
      <div><small>X</small><strong>${formatNumber(character.X)}</strong></div>
      <div><small>Y</small><strong>${formatNumber(character.Y)}</strong></div>
      <div><small>Z</small><strong>${formatNumber(character.Z)}</strong></div>
    </div>
  `;

  renderCreatures();
}

function renderCreatures() {
  if (!client) return;

  const nearby = Array.from(client.CreaturesList)
    .filter((creature) => creature.ObjectId !== client.Me.ObjectId)
    .filter((creature) => creature.constructor.name === "L2Mob" || creature.constructor.name === "L2Npc")
    .sort((left, right) => finite(left.Distance) - finite(right.Distance));
  const mobs = nearby.filter((creature) => creature.constructor.name === "L2Mob");
  const npcs = nearby.filter((creature) => creature.constructor.name === "L2Npc");
  const query = creatureSearch.value.trim().toLocaleLowerCase();
  const visible = nearby.filter((creature) => `${creature.Name} ${creature.Title} ${creature.Id}`.toLocaleLowerCase().includes(query));

  document.querySelector("#mob-count").textContent = String(mobs.length);
  document.querySelector("#npc-count").textContent = String(npcs.length);
  creatureList.replaceChildren();

  if (visible.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = query ? "No nearby creatures match your search." : "Waiting for nearby mobs and NPCs…";
    creatureList.append(empty);
    return;
  }

  for (const creature of visible) {
    const isMob = creature.constructor.name === "L2Mob";
    const card = document.createElement("article");
    card.className = "creature-card";
    card.innerHTML = `
      <span class="creature-meta">
        <span class="type-pill ${isMob ? "mob" : ""}">${isMob ? "Mob" : "NPC"}</span>
        <span>${formatDistance(creature.Distance)}</span>
      </span>
      <h3>${escapeHtml(creature.Name || `${isMob ? "Mob" : "NPC"} #${creature.Id}`)}</h3>
      <p>${escapeHtml(creature.Title || (creature.IsDead ? "Defeated" : creature.IsInCombat ? "In combat" : "Nearby"))}</p>
      <p>X ${formatNumber(creature.X)} · Y ${formatNumber(creature.Y)} · Z ${formatNumber(creature.Z)}</p>
    `;
    creatureList.append(card);
  }
}

function showScreen(id) {
  for (const screen of screens) screen.classList.toggle("active", screen.id === id);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setConnectionState(label, state = "") {
  connectionLabel.textContent = label;
  connectionDot.className = `state-dot ${state}`.trim();
}

function disableCards(container) {
  for (const button of container.querySelectorAll("button")) button.disabled = true;
}

function serverStatus(status) {
  return ["Auto", "Good", "Normal", "Full", "Down", "GM only"][status] ?? "Unknown";
}

function statBar(label, value, maximum, valuePercent, className) {
  return `
    <div class="stat-block">
      <span class="stat-label"><span>${label}</span><span>${formatNumber(value)} / ${formatNumber(maximum)}</span></span>
      <div class="stat-bar ${className}"><span style="width: ${valuePercent}%"></span></div>
    </div>
  `;
}

function percent(value, maximum) {
  return maximum > 0 ? Math.max(0, Math.min(100, (value / maximum) * 100)) : 0;
}

function finite(value) {
  return Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
}

function formatDistance(value) {
  return Number.isFinite(value) ? `${Math.round(value)} units` : "Unknown distance";
}

function formatNumber(value) {
  return Number.isFinite(value) ? Math.round(value).toLocaleString() : "—";
}

function initials(value) {
  const text = String(value || "L2").trim();
  return escapeHtml(text.slice(0, 2).toUpperCase());
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
