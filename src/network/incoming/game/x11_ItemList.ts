import { GamePacket } from "../../PacketRegistry";

import L2Item from "../../../entities/L2Item";
import GameClientPacket from "./GameClientPacket";

@GamePacket(0x11)
export default class x11_ItemList extends GameClientPacket {
  Items: L2Item[] = [];
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _showWindow = this.readH();
    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const item = this.readItem();
      item.IsQuest = false;
      this.Items.push(item);
    }

    return true;
  }
}
