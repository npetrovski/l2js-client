import GameClientPacket from "./GameClientPacket";

export default class NpcSay extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _textType = this.readD();
    const _npcId = this.readD() - 1000000;
    const _npcString = this.readD();

    const _messages = [];
    while (this._offset + 1 < this._buffer.byteLength) {
      _messages.push(this.readS());
    }

    this.logger.info("NpcSay", _messages);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
