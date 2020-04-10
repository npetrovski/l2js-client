import GameClientPacket from "./GameClientPacket";

export default class NpcSay extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _charObjId = this.readD();
    let _textType = this.readD();
    let _npcId = this.readD() - 1000000;
    let _npcString = this.readD();

    let _messages = [];
    while (this._offset + 1 < this._buffer.byteLength) {
      _messages.push(this.readS());
    }

    console.log("NpcSay", _messages);

    return true;
  }

  //@Override
  run(): void {
    //
  }
}
