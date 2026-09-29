import GameClientPacket from "./GameClientPacket";

export default class x71_RestartResponse extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _result = this.readD(); // 1 or 0

    return true;
  }
}
