import GameClientPacket from "./GameClientPacket";

export default class SkillCoolTime extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _skillReuseTimeStampsSize = this.readD();

    for (let i = 0; i < _skillReuseTimeStampsSize; i++) {
      const _skillId = this.readD();
      const _skillLvl = this.readD();
      const _reuse = this.readD();
      const _remaining = this.readD();

      const buff = this.Client.BuffsList.getEntryById(_skillId);
      if (buff) {
        buff.RemainingTime = _remaining * 1000;
        buff.SkillLevel = _skillLvl;
      }
    }
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
