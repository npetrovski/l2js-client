import GameClientPacket from "./GameClientPacket";

export default class x82_TradeOtherDone extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
