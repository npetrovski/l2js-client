import GameClientPacket from "./GameClientPacket";

export default class x70_SendTradeRequest extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _senderId = this.readD();

    return true;
  }
}
