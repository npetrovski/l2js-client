import GameClientPacket from "./GameClientPacket";

export default class VersionCheck extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _compatible = this.readC();
    const _cipherKey = this.readD();
    const _cipherEnabled= (this.readD() === 1);

    this.Client.setCryptInitialKey(_cipherKey);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
