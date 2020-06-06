import GameClientPacket from "./GameClientPacket";

export default class StaticObject extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _staticObjectId = this.readD();
    const _objectId = this.readD();
    const _type = this.readD();
    const _isTargetable = this.readD() === 1;
    const _meshIndex = this.readD();
    const _isClosed = this.readD() === 1;
    const _isEnemy = this.readD() === 1;
    const _currentHp = this.readD();
    const _maxHp = this.readD();
    const _showHp = this.readD() === 1;
    const _damageGrade = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
