import GameClientPacket from "./GameClientPacket";
import L2Item from "../../entities/L2Item";

export default class EquipUpdate extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _state = this.readD();
    const _itemObjId = this.readD();

    const _slot = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
