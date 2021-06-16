import GameClientPacket from "./GameClientPacket";

export default class MagicSkillUse extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _activeChar = this.readD();
    const _target = this.readD();

    const _skillId = this.readD();
    const _skillLevel = this.readD();
    const _hitTime = this.readD();
    const _reuseDelay = this.readD();
    const [_x, _y, _z] = this.readLoc();

    const _unknown = this.readH();
    for (let i = 0; i < _unknown; i++) {
      const _unknownH = this.readH();
    }

    const _groundLocations = this.readH();
    for (let i = 0; i < _groundLocations; i++) {
      const [_xGroundLoc, _yGroundLoc, _zGroundLoc] = this.readLoc();
    }

    const [_xTarget, _yTarget, _zTarget] = this.readLoc();

    const skill = this.Client.SkillsList.getEntryById(_skillId);
    if (skill) {
      skill.Level = _skillLevel;
      skill.Remaining = _reuseDelay;
      skill.ReuseDelay = _reuseDelay;
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(_activeChar);
    if (creature) {
      creature.HiTime = _hitTime;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
