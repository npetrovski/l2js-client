import GameClientPacket from "./GameClientPacket";

export default class ExVoteSystemInfo extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _sub = this.readH();

    var user = this.Client.ActiveChar;
    user.RecommLeft = this.readD();
    user.RecommHave = this.readD();
    let _recoBonusTime = this.readD();
    let _recoBonusVal = this.readD();
    let _recoBonusType = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
