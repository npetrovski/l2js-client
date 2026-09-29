import GameClientPacket from "./GameClientPacket";

export default class x25_AutoAttackStart extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _targetObjId = this.readD();

    return true;
  }
}
