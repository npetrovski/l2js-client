import GameClientPacket from "./GameClientPacket";

export default class Snoop extends GameClientPacket {
  private _convoId: number = 0;
  private _name: string = "";
  private _type: number = 0;
  private _speaker: string = "";
  private _msg: string = "";

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this._convoId = this.readD();
    this._name = this.readS();
    const _unkn1 = this.readD();

    this._type = this.readD();
    this._speaker = this.readS();
    this._msg = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
