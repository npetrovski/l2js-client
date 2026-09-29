import GameClientPacket from "./GameClientPacket";

export default class xFE_x41_ExRedSky extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _duration = this.readD();

    return true;
  }
}
