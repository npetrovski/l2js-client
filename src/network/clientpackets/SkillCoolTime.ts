import GameClientPacket from "./GameClientPacket";

export default class SkillCoolTime extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _skillReuseTimeStampsSize = this.readD();

    for (var i = 0; i < _skillReuseTimeStampsSize; i++) {
      let _skillId = this.readD();
      let _skillLvl = this.readD();
      let _reuse = this.readD() * 1000;
      let _remaining = this.readD() * 1000;
    }
    return true;
  }

  //@Override
  run(): void {}
}
