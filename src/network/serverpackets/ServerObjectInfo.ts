import GameClientPacket from "./GameClientPacket";

export default class ServerObjectInfo extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();
    const _npc = this.readD();
    const _name = this.readS();
    const _attackable = this.readD() === 1;
    const [_x, _y, _z] = this.readLoc();
    const _heading = this.readD();

    const _moveSpeed = this.readF();
    const _atkMultiplier = this.readF();
    const _collisionRadius = this.readF();
    const _collisionHeight = this.readF();

    const _maxHP = this.readD();
    const _currentHP = this.readD();

    const _unk0 = this.readD();
    const _unk1 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
