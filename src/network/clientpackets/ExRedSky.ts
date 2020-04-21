import GameClientPacket from "./GameClientPacket";
import L2Item from "../../entities/L2Item";

export default class ExRedSky extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _duration = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
