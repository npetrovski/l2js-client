import GameClientPacket from "./GameClientPacket";

export default class MagicSkillUse extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charid = this.readD();
    const _targetid = this.readD();
    const _skillid = this.readD();
    const _skilllvl = this.readD();
    const _hittime = this.readD();
    const _reusedelay = this.readD();

    const [_x, _y, _z] = this.readLoc();

    const _unknown = this.readH();
    for (let i = 0; i < _unknown; i++) {
      const _unknownH = this.readH();
    }


    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
