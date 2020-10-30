import GameClientPacket from "./GameClientPacket";

export default class NicknameChanged extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();
    const _title = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
