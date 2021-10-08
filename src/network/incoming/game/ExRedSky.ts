import GameClientPacket from "./GameClientPacket";

export default class ExRedSky extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _duration = this.readD();

    return true;
  }
}
