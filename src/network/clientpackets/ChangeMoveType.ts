import GameClientPacket from "./GameClientPacket";

export default class ChangeMoveType extends GameClientPacket {
  static readonly WALK: number = 0;
  static readonly RUN: number = 1;
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _charObjId = this.readD();
    let _running = this.readD() == ChangeMoveType.RUN;
    let _pad1 = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
