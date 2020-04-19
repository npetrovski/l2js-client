import GameClientPacket from "./GameClientPacket";

export default class SkillCoolTime extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _skillReuseTimeStampsSize = this.readD();

    for (let i = 0; i < _skillReuseTimeStampsSize; i++) {
      const _skillId = this.readD();
      const _skillLvl = this.readD();
      const _reuse = this.readD() * 1000;
      const _remaining = this.readD() * 1000;
    }
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
