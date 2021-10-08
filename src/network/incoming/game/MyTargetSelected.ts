import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class MyTargetSelected extends GameClientPacket {
  CreatureObjId!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.CreatureObjId = this.readD();
    const _color = this.readH();

    const _pad = this.readD();

    return true;
  }
}
