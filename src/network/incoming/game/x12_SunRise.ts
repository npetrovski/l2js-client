import GameClientPacket from "./GameClientPacket";

export default class x12_SunRise extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
