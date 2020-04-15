import GameClientPacket from "./GameClientPacket";

export default class TargetUnselected extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _targetObjectId = this.readD();

    let [_x, _y, _z] = this.readLoc();

    let _unkn1 = this.readD();

    this.Client.ActiveChar.setSelected(undefined);
    return true;
  }

  //@Override
  run(): void {}
}
