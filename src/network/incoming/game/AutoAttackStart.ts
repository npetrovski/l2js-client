import GameClientPacket from "./GameClientPacket";

export default class AutoAttackStart extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _targetObjId = this.readD();

    return true;
  }
}
