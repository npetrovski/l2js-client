import { EPacketReceived } from "l2js-client/events/EventTypes";
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
    const packet = e.data.packet;
    if ((packet.get("fisher_oid") as number) === l2.Me.ObjectId) {
      if ((packet.get("deceptive") as number) === 0) {
        if ((packet.get("hp_mode") as number) === 0) {
          UsePump();
        } else {
          UseReeling();
        }
      } else {
        if ((packet.get("hp_mode") as number) === 0) {
          UseReeling();
        } else {
          UsePump();
        }
      }
    }
  })
  .on("PacketReceived", "ExFishingEnd", (e: EPacketReceived) => {
    const packet = e.data.packet;
    if ((packet.get("fisher_oid") as number) === l2.Me.ObjectId) {
      l2.say((packet.get("success") as number) === 1 ? "Ya hoooo! Gotcha." : "Next time, maybe..");
      UseFishing();
    }
  });
