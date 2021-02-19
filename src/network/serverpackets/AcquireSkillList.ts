import GameClientPacket from "./GameClientPacket";

export default class AcquireSkillList extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _skillCount = this.readD();
    for(let i = 0; i < _skillCount; i++) {
      const _skillId = this.readD();
      const _skillLevel = this.readD();
      const _skillMaxLevel = this.readD();
      const _skillRequiredSP = this.readD();
      const _skillRequiresItems = this.readD() === 1;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
