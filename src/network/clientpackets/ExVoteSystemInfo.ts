import GameClientPacket from "./GameClientPacket";

export default class ExVoteSystemInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const user = this.Client.ActiveChar;
    user.RecommLeft = this.readD();
    user.RecommHave = this.readD();
    const _recoBonusTime = this.readD();
    const _recoBonusVal = this.readD();
    const _recoBonusType = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
