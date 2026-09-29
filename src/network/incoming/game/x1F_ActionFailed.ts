import GameClientPacket from "./GameClientPacket";

export default class x1F_ActionFailed extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
