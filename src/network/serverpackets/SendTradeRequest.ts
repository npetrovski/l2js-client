import GameClientPacket from "./GameClientPacket";

export default class SendTradeRequest extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _senderId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
