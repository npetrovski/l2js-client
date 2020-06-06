import GameClientPacket from "./GameClientPacket";

export default class SSQInfo extends GameClientPacket {
  private _skyState!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this._skyState = this.readH() - 256; // Sky color state

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
