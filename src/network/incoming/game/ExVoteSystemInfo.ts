import GameClientPacket from "./GameClientPacket";

export default class ExVoteSystemInfo extends GameClientPacket {
  RecommLeft!: number;
  RecommHave!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.RecommLeft = this.readD();
    this.RecommHave = this.readD();
    const _recoBonusTime = this.readD();
    const _recoBonusVal = this.readD();
    const _recoBonusType = this.readD();

    return true;
  }
}
