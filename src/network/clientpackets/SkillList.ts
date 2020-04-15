import GameClientPacket from "./GameClientPacket";

export default class SkillList extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _skillsSize = this.readD();
    for (var i = 0; i < _skillsSize; i++) {
      let _passive = this.readD() == 1;
      let _level = this.readD();
      let _id = this.readD();
      let _disabled = this.readC() == 1;
      let _enchanted = this.readC() == 1;
    }

    return true;
  }

  //@Override
  run(): void {}
}
