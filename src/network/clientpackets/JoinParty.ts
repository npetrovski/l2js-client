import GameClientPacket from "./GameClientPacket";

export default class JoinParty extends GameClientPacket {
  private _response: number = 0;

  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    this._response = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
