/**
 * Use this example.js file as you wish - it's just a simple demo of how to ue the l2js-client library
 *
 * It is configured to connect to Lineage2 Idle server with a temp account:
 * username: l2js
 * password: passwd
 *
 * If you want, feel free to use this account for testing purposes
 */
const process = require("process");

const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const Client = require("./dist/Client").Client;

process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");
console.clear();

var l2 = new Client();
l2.enter({
  username: "l2js",
  password: "passwd",
  loginServerIp: "51.77.56.145",
  serverId: 1, //Bartz
  charSlotIndex: 0,
})
  .on("packet:ShortCutInit", () => {
    l2.say("Hello from " + l2.Me.Name);
  })
  .on("packet:CreatureSay", (packet) => {
    // var x = 50 + Math.floor(Math.random() * 50) + l2.Me.X;
    // var y = 50 + Math.floor(Math.random() * 50) + l2.Me.Y;
    // var z = l2.Me.Z;
    // l2.moveTo(x, y, z);
    //console.log(l2.NpcInfo.keys());
  })
  .on("packet:AskJoinParty", (packet) => {
    l2.acceptJoinParty();
  })
  .on("packet:ItemList", (packet) => {
    console.log(l2.InventoryItems);
  });

// 51.77.56.145

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    console.log(`You pressed the "${key.name}" key`);

    switch (key.name) {
      case "f1":
        console.log(l2.Me);
        break;
      case "f2":
        console.log(l2.CreaturesList);
        break;
      case "f3":
        console.log(l2.PartyList);
        break;
      case "f4":
        console.log(l2.DroppedItems);
        break;
      case "f5":
        console.log(l2.BuffsList);
        break;
      case "f6":
        console.log(l2.SkillsList);
        break;
      case "escape":
        l2.cancelTarget();
        break;
      case "space":
        var i = l2.DroppedItems.closest();
        if (i) {
          l2.hit(i);
        }
        break;
      case "f12":
        var nextTarget = l2.nextTarget();
        console.log(nextTarget);
        if (nextTarget && (!l2.Me.Target || nextTarget.ObjectId !== l2.Me.Target.ObjectId)) {
          l2.hit(nextTarget.ObjectId);
        }

        break;
      case "tab":
        l2.inventory();
        break;
      case "return":
        var npc = l2.Me.Target;
        if (npc) {
          l2.hit(npc.ObjectId);
        }

        break;
      case "up":
        l2.moveTo(l2.Me.X + 50, l2.Me.Y, l2.Me.Z);
        break;
      case "down":
        l2.moveTo(l2.Me.X - 50, l2.Me.Y, l2.Me.Z);
        break;
      case "left":
        l2.moveTo(l2.Me.X, l2.Me.Y + 50, l2.Me.Z);
        break;
      case "right":
        l2.moveTo(l2.Me.X, l2.Me.Y - 50, l2.Me.Z);
        break;
    }
  }
});
