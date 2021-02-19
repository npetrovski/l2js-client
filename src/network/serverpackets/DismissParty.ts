import GameClientPacket from "./GameClientPacket";

export default class DismissParty extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _successYesNo = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
