import GameClientPacket from "./GameClientPacket";

export default class JoinParty extends GameClientPacket {
  private _response = 0;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this._response = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
