import GameClientPacket from "./GameClientPacket";

export default class x1C_TradeDone extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _num = this.readD();

    return true;
  }
}
