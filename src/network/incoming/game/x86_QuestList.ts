import { GamePacket } from "@network/PacketRegistry";
import L2Quest from "@entities/L2Quest";
import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x86)
export default class x86_QuestList extends GameClientPacket {
  Quests: L2Quest[] = [];

  readImpl(): boolean {
    this.readC();
    const count = this.readH();
    for (let i = 0; i < count; i++) {
      this.Quests.push(new L2Quest({
        Id: this.readD(),
        State: this.readD(),
      }));
    }
    return true;
  }
}
