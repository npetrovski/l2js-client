import GameClientPacket from "./GameClientPacket";

export default class ExVoteSystemInfo extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _sub = this.readH();

    var player = this.Client.ActiveChar;
    player.setRecomLeft(this.readD());
    player.setRecomHave(this.readD());
    player.setRecoBonusTime(this.readD());
    player.setRecoBonusVal(this.readD());
    player.setRecoBonusType(this.readD());

    return true;
  }

  //@Override
  run(): void {}
}
