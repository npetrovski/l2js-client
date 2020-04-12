import GameClientPacket from "./GameClientPacket";

export default class CreatureSay extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _objectId = this.readD();
    let _textType = this.readD();

    let _charName = this.readS(); // or readD() ???

    let _npcStringId = this.readD();
    let _messages = [];
    while (this._offset + 2 < this._buffer.byteLength) {
      _messages.push(this.readS());
    }

    console.log(`CreatureSay: type=${_textType} obj=${_objectId} ${_charName}: `, _messages);
    return true;
  }

  //@Override
  run(): void {}
}
