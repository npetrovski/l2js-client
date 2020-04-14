import GameClientPacket from "./GameClientPacket";

export default class TargetUnselected extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _targetObjectId = this.readD();

    let _x = this.readD();
    let _y = this.readD();
    let _z = this.readD();

    let _unkn1 = this.readD();

    this.Client.ActiveChar.setSelected(undefined);
    return true;
  }

  //@Override
  run(): void {}
}
