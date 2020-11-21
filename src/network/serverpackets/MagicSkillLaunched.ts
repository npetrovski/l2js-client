import GameClientPacket from "./GameClientPacket";

export default class MagicSkillLaunched extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charid = this.readD();
    const _skillid = this.readD();
    const _skilllvl = this.readD();
    const _failed = this.readD();
    const _targetid = this.readD();
        
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
