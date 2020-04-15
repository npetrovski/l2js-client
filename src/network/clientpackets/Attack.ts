import GameClientPacket from "./GameClientPacket";

export default class Attack extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _attackerObjId = this.readD();

    let _targetId = this.readD();
    let _damage = this.readD();
    let _flags = this.readC();

    let [_attackerX, _attackerY, _attackerZ] = this.readLoc();

    let _hitSize = this.readH();
    for (var i = 0; i < _hitSize; i++) {
      let _targetId1 = this.readD();
      let _damage1 = this.readD();
      let _flags1 = this.readC();
    }

    let [_targetX, _targetY, _targetZ] = this.readLoc();

    return true;
  }

  //@Override
  run(): void {}
}
