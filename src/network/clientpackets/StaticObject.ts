import GameClientPacket from "./GameClientPacket";

export default class StaticObject extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    let _staticObjectId = this.readD();
    let _objectId = this.readD();
    let _type = this.readD();
    let _isTargetable = this.readD() == 1;
    let _meshIndex = this.readD();
    let _isClosed = this.readD() == 1;
    let _isEnemy = this.readD() == 1;
    let _currentHp = this.readD();
    let _maxHp = this.readD();
    let _showHp = this.readD() == 1;
    let _damageGrade = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
