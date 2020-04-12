import GameClientPacket from "./GameClientPacket";

export default class UserInfo extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    var user = this.Client.ActiveChar;

    var userStat = user.getStat();
    var userStatus = user.getStatus();

    user.setX(this.readD());
    user.setY(this.readD());
    user.setZ(this.readD());
    let _vehicleId = this.readD();

    user.setObjectId(this.readD());
    user.getAppearance().setVisibleName(this.readS());
    let _race = this.readD();
    user.getAppearance().setSex(this.readD() == 1);

    let _baseClass = this.readD();
    userStat.setLevel(this.readD());
    userStat.setExp(this.readQ());
    let _percentFromCurrentLevel = this.readF();
    userStat.setSTR(this.readD());
    userStat.setDEX(this.readD());
    userStat.setCON(this.readD());
    userStat.setINT(this.readD());
    userStat.setWIT(this.readD());
    userStat.setMEN(this.readD());
    userStat.setMaxHp(this.readD());
    userStatus.setCurrentHp(this.readD());
    userStat.setMaxMp(this.readD());
    userStatus.setCurrentMp(this.readD());
    userStat.setSp(this.readD());

    let _currentLoad = this.readD(); //inventory => totalWeight
    let _maxLoad = this.readD();

    let _activeWeapon = this.readD() == 40; // 20 no weapon, 40 weapon equipped

    return true;
  }

  //@Override
  run(): void {}
}
