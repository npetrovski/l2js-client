import GameClientPacket from "./GameClientPacket";
export default class SetupGauge extends GameClientPacket {
  CharObjectId!: number;
  CurrentTime!: number;
  MaxTime!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.CharObjectId = this.readD();
    const _color = this.readD();
    this.CurrentTime = this.readD();
    this.MaxTime = this.readD();

    return true;
  }
}
