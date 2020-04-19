import GameClientPacket from "./GameClientPacket";

export default class AutoAttackStop extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _targetObjId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
