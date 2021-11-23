import { EPacketReceived } from "l2js-client/events/EventTypes";
import l2 from "./login";

import fs from "fs";

const ascii = fs.readFileSync(__dirname + "/../merlin.ascii", {
  encoding: "utf8",
  flag: "r",
});

const DROP_RADIUS = 150; // maximum allowed radius to drop without moving
const STEP = 5; // resolution

const lines = ascii.split(/(?:\r\n|\r|\n)/g);
const rq = Math.floor(DROP_RADIUS / STEP) || 1;

const moveTo = (x: number, y: number, z: number, timeoutSec = 20) => {
  return new Promise((resolve, reject) => {
    l2.moveTo(x, y, z);
    const t = setInterval(() => {
      if (Math.abs(l2.Me.X - x) <= 50 && Math.abs(l2.Me.Y - y) <= 50) {
        resolve(true);
        clearInterval(t);
      }
      timeoutSec--;
      if (timeoutSec <= 0) {
        reject("Timeout on moving to location.");
        clearInterval(t);
      }
    }, 1000);
  });
};

const dropItem = (itemId: number, x: number, y: number, z: number, timeoutSec = 3) => {
  return new Promise((resolve, reject) => {
    let success = false;
    const handler = (e: EPacketReceived) => {
      if (e.data.packet.Name === "DropItem") {
        if ((e.data.packet.get("dropper_oid") as number) === l2.Me.ObjectId) {
          success = true;
        }
      }
    };
    l2.on("PacketReceived", "DropItem", handler);

    l2.dropItem(itemId, 1, x, y);
    const t = setInterval(() => {
      if (success) {
        resolve(true);
        clearInterval(t);
        l2.off("PacketReceived", "DropItem", handler);
      }
      timeoutSec--;
      if (timeoutSec <= 0) {
        reject("Timeout trying to drop an item.");
        clearInterval(t);
        l2.off("PacketReceived", "DropItem", handler);
      }
    }, 1000);
    //
  });
};

l2.on("LoggedIn", () => {
  const topLeft = {
    x: l2.Me.X,
    y: l2.Me.Y,
  };

  try {
    (async () => {
      const item = l2.InventoryItems.getEntryById(57) ?? null;

      if (!item || ascii.replace(/\s/g, "").length > item.Count) {
        throw new Error("Not enough adena.");
      }

      for (let ay = 0; ay < Math.ceil(lines.length / rq); ay++) {
        let row = rq * ay;
        let col = 0;
        let h = 0;
        while (row < rq * ay + rq) {
          if (row < lines.length) {
            const line = lines[row];
            for (let i = col; i < col + rq; i++) {
              if (i < line.length) {
                const c = line.charAt(i);
                if (c !== " ") {
                  const dx = topLeft.x + i * STEP;
                  const dy = topLeft.y + row * STEP;
                  const dist = Math.sqrt(Math.pow(dx - l2.Me.X, 2) + Math.pow(dy - l2.Me.Y, 2));

                  if (dist < DROP_RADIUS) {
                    await dropItem(item?.ObjectId ?? 0, dx, dy, l2.Me.Z).catch((e) => console.log(e));
                  } else {
                    await moveTo(dx, dy, l2.Me.Z)
                      .then(() => dropItem(item?.ObjectId ?? 0, dx, dy, l2.Me.Z))
                      .catch((e) => console.log(e));
                  }
                }
                h |= 1;
              } else {
                h |= 0;
              }
            }
          }
          row++;
          if (row === rq * ay + rq && h === 1) {
            h = 0;
            row = rq * ay;
            col += rq;
          }
        }
      }
    })();
  } catch (e) {
    console.log(e);
  }
});
