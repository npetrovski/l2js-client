import GameClientPacket from "./GameClientPacket";

export default class AutoAttackStop extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _targetObjId = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
