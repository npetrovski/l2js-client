import GameClientPacket from "./GameClientPacket";

export default class TradeRequest extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _requestorObjId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
