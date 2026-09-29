import GameClientPacket from "./GameClientPacket";
export default class x13_SunSet extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
