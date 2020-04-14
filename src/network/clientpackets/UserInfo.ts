import GameClientPacket from "./GameClientPacket";
import GameServerPacket from "../serverpackets/GameServerPacket";

export default class UserInfo extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();

    var user = this.Client.ActiveChar;

    var stat = user.getStat();
    var status = user.getStatus();
    var appearance = user.getAppearance();

    user.setX(this.readD());
    user.setY(this.readD());
    user.setZ(this.readD());
    let _vehicleId = this.readD();

    user.setObjectId(this.readD());
    user.getAppearance().setVisibleName(this.readS());
    let _race = this.readD();
    user.getAppearance().setSex(this.readD() == 1);

    let _baseClass = this.readD();
    stat.setLevel(this.readD());
    stat.setExp(this.readQ());
    let _percentFromCurrentLevel = this.readF();
    stat.setSTR(this.readD());
    stat.setDEX(this.readD());
    stat.setCON(this.readD());
    stat.setINT(this.readD());
    stat.setWIT(this.readD());
    stat.setMEN(this.readD());
    stat.setMaxHp(this.readD());
    status.setCurrentHp(this.readD());
    stat.setMaxMp(this.readD());
    status.setCurrentMp(this.readD());
    stat.setSp(this.readD());

    let _currentLoad = this.readD(); //inventory => totalWeight
    let _maxLoad = this.readD();

    let _activeWeapon = this.readD() == 40; // 20 no weapon, 40 weapon equipped

    for (let slot in GameServerPacket.PAPERDOLL_ORDER) {
      let _slot = this.readD();
    }

    for (let slot in GameServerPacket.PAPERDOLL_ORDER) {
      let _slot = this.readD();
    }

    for (let slot in GameServerPacket.PAPERDOLL_ORDER) {
      let _slot = this.readD();
    }

    let _talismanSlots = this.readD();
    let _canEquipCloak = this.readD() == 1;

    stat.setPAtk(this.readD());
    stat.setPAtkSpd(this.readD());
    stat.setPDef(this.readD());
    stat.setEvasionRate(this.readD());
    stat.setAccuracy(this.readD());
    stat.setCriticalHit(this.readD());
    stat.setMAtk(this.readD());
    stat.setMAtkSpd(this.readD());

    let _pAtkSpd1 = this.readD();
    stat.setMDef(this.readD());
    let _pvpFlag = this.readD();
    let _karma = this.readD();

    stat.setRunSpeed(this.readD());
    stat.setWalkSpeed(this.readD());
    stat.setSwimRunSpeed(this.readD());
    stat.setSwimWalkSpeed(this.readD());
    stat.setFlyRunSpeed(this.readD());
    stat.setFlyWalkSpeed(this.readD());

    stat.setMovementSpeedMultiplier(this.readF());
    stat.setAttackSpeedMultiplier(this.readF());
    let _collisionRadius = this.readF();
    let _collisionHeight = this.readF();

    appearance.setHairStyle(this.readD());
    appearance.setHairColor(this.readD());
    appearance.setFace(this.readD());

    let _isGM = this.readD();

    user.setTitle(this.readS());
    user.setClanId(this.readD());
    let _clanCrestId = this.readD();
    let _allyId = this.readD();
    let _allyCrestId = this.readD();

    // 0x40 leader rights
    // siege flags: attacker - 0x180 sword over name, defender - 0x80 shield, 0xC0 crown (|leader), 0x1C0 flag (|leader)
    let _relation = this.readD();

    let _mountType = this.readC();
    let _privateStoreType = this.readC();
    let _dwarvenCraft = this.readC();

    let _pkKills = this.readD();
    let _pvpKills = this.readD();

    let _cubicsNum = this.readH();
    for (var j = 0; j < _cubicsNum; j++) {
      let _cubicId = this.readH();
    }

    return true;
  }

  //@Override
  run(): void {}
}
