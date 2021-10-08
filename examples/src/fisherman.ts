import { EPacketReceived } from "l2js-client/events/EventTypes";
import ExFishingHpRegen from "l2js-client/network/incoming/game/ExFishingHpRegen";
import ExFishingEnd from "l2js-client/network/incoming/game/ExFishingEnd";
import l2 from "./login";

const UsePump = () => l2.cast(1313);
const UseReeling = () => l2.cast(1314);
const UseFishing = () => {
  l2.say("Nice day for fishing ain't it? Hua hah!");
  l2.cast(1312);
};

l2.on("LoggedIn", () => {
  setTimeout(UseFishing, 3000);
})
  .on("PacketReceived", "ExFishingHpRegen", (e: EPacketReceived) => {
    const packet = e.data.packet as ExFishingHpRegen;
    if (packet.ObjectId === l2.Me.ObjectId) {
      if (packet.Deceptive === 0) {
        if (packet.HpMode === 0) {
          UsePump();
        } else {
          UseReeling();
        }
      } else {
        if (packet.HpMode === 0) {
          UseReeling();
        } else {
          UsePump();
        }
      }
    }
  })
  .on("PacketReceived", "ExFishingEnd", (e: EPacketReceived) => {
    const packet = e.data.packet as ExFishingEnd;
    if (packet.ObjectId === l2.Me.ObjectId) {
      l2.say(packet.IsWin ? "Ya hoooo! Gotcha." : "Next time, maybe..");
      UseFishing();
    }
  });
