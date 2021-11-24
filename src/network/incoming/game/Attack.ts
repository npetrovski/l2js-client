import GameClientPacket from "./GameClientPacket";

export default class Attack extends GameClientPacket {

  AttackerObjectId: number = 0;
  Subjects: number[] = [];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _attackerObjId = this.readD();

    const _targetId = this.readD();
    const _damage = this.readD();
    const _flags = this.readC();

    this.Subjects.push(_targetId);

    const [_attackerX, _attackerY, _attackerZ] = this.readLoc();

    const _hitSize = this.readH();
    for (let i = 0; i < _hitSize; i++) {
      const _targetId1 = this.readD();
      const _damage1 = this.readD();
      const _flags1 = this.readC();

      this.Subjects.push(_targetId1);
    }

    const [_targetX, _targetY, _targetZ] = this.readLoc();

    // TODO: trigger from mutator
    // GlobalEvents.fire(`Attacked`, {
    //   object: _attackerObjId,
    //   subjects
    // });

    return true;
  }
}
