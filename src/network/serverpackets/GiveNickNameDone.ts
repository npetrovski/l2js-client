import GameClientPacket from "./GameClientPacket";

export default class GiveNickNameDone extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _target = this.readS();
    const _title = this.readS();
    const _successYesNo = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
