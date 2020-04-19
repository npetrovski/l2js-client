import GameClientPacket from "./GameClientPacket";

export default class SkillList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _skillsSize = this.readD();
    for (let i = 0; i < _skillsSize; i++) {
      const _passive = this.readD() === 1;
      const _level = this.readD();
      const _skillId = this.readD();
      const _disabled = this.readC() === 1;
      const _enchanted = this.readC() === 1;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
