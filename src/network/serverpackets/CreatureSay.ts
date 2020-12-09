import { GlobalEvents } from "../../mmocore/EventEmitter";
import GameClientPacket from "./GameClientPacket";

export default class CreatureSay extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objectId = this.readD();
    const _textType = this.readD();

    const _charName = this.readS(); // or readD() ???

    const _npcStringId = this.readD();
    const _messages = [];
    while (this._offset + 2 < this._buffer.byteLength) {
      _messages.push(this.readS());
    }

    GlobalEvents.fire("CreatureSay", {
      objectId: _objectId,
      type: _textType,
      charName: _charName,
      npcStringId: _npcStringId,
      messages: _messages,
    });
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
