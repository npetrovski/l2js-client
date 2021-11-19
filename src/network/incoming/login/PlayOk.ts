import LoginClientPacket from "./LoginClientPacket";

export default class PlayOk extends LoginClientPacket {
  PlayOk1!: number;
  PlayOk2!: number;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.PlayOk1 = this.readD();
    this.PlayOk2 = this.readD();

    this.logger.info("Play Ok" + _id);
    return true;
  }
}
