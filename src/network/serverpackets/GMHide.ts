import GameClientPacket from "./GameClientPacket";

export default class GMHide extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _invisible = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
