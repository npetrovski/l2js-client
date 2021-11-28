import GameClientPacket from "./GameClientPacket";

export default class CreatureSay extends GameClientPacket {
  ObjectId: number = 0;
  Type: number = 0;
  CharName: string = "";
  NpcStringId: number = 0;
  Messages: string[] = [];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.ObjectId = this.readD();
    this.Type = this.readD();

    this.CharName = this.readS(); // or readD() ???

    const _messages = [];
    while (this._offset + 2 < this._buffer.byteLength) {
      this.Messages.push(this.readS());
    }

    return true;
  }
}
