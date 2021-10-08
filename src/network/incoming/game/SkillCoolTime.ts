import L2Buff from "../../../entities/L2Buff";
import GameClientPacket from "./GameClientPacket";

export default class SkillCoolTime extends GameClientPacket {
  BuffsList: {
    id: number;
    lvl: number;
    reuse: number;
    remaining: number;
  }[] = [];
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _cnt = this.readD();

    for (let i = 0; i < _cnt; i++) {
      const _skillId = this.readD();
      const _skillLvl = this.readD();
      const _reuse = this.readD();
      const _remaining = this.readD();

      this.BuffsList.push({
        id: _skillId,
        lvl: _skillLvl,
        reuse: _reuse,
        remaining: _remaining
      });
    }
    return true;
  }
}
