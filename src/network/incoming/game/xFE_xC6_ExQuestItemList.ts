import { GamePacket } from "../../PacketRegistry";

import L2Item from "../../../entities/L2Item";
import GameClientPacket from "./GameClientPacket";

@GamePacket(0xfe, 0xc6)
export default class xFE_xC6_ExQuestItemList extends GameClientPacket {
  Items: L2Item[] = [];
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const item = this.readItem();
      item.IsQuest = true;
      this.Items.push(item);
    }

    return true;
  }
}
