import GameClientPacket from "./GameClientPacket";

export default class x84_LeaveWorld extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
