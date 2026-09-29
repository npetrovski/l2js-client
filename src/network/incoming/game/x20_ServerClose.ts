import GameClientPacket from "./GameClientPacket";

export default class x20_ServerClose extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    return true;
  }
}
