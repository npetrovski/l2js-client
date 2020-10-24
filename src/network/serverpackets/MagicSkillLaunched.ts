import GameClientPacket from "./GameClientPacket";

export default class MagicSkillLaunched extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjId = this.readD();
    const _skillId = this.readD();
    const _skillLevel = this.readD();

    const _targetsNum = this.readD();

    for (let i = 0; i < _targetsNum; i++) {
      const _targetId = this.readD();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
