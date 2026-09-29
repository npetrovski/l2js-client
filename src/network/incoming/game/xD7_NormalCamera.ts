import GameClientPacket from "./GameClientPacket";

export default class xD7_NormalCamera extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
