import GameClientPacket from "./GameClientPacket";
import GameServerPacket from "../clientpackets/GameServerPacket";

export default class UserInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const user = this.Client.ActiveChar;

    user.X = this.readD();
    user.Y = this.readD();
    user.Z = this.readD();
    const _vehicleId = this.readD();

    user.ObjectId = this.readD();
    user.Name = this.readS();
    user.Race = this.readD();
    user.Sex = this.readD();

    user.BaseClassId = this.readD();
    user.Level = this.readD();
    user.Exp = this.readQ();
    const _percentFromCurrentLevel = this.readF();
    user.STR = this.readD();
    user.DEX = this.readD();
    user.CON = this.readD();
    user.INT = this.readD();
    user.WIT = this.readD();
    user.MEN = this.readD();
    user.MaxHp = this.readD();
    user.Hp = this.readD();
    user.MaxMp = this.readD();
    user.Mp = this.readD();
    user.Sp = this.readD();

    const _currentLoad = this.readD(); // inventory => totalWeight
    const _maxLoad = this.readD();

    const _activeWeapon = this.readD() === 40; // 20 no weapon, 40 weapon equipped

    GameServerPacket.PAPERDOLL_ORDER.forEach((value) => {
      const _slot1 = this.readD();
    });

    GameServerPacket.PAPERDOLL_ORDER.forEach((value) => {
      const _slot2 = this.readD();
    });

    GameServerPacket.PAPERDOLL_ORDER.forEach((value) => {
      const _slot3 = this.readD();
    });

    const _talismanSlots = this.readD();
    const _canEquipCloak = this.readD() === 1;

    user.PAtk = this.readD();
    user.PAtkSpd = this.readD();
    user.PDef = this.readD();
    user.EvasionRate = this.readD();
    user.Accuracy = this.readD();
    user.Crit = this.readD();
    user.MAtk = this.readD();
    user.MAtkSpd = this.readD();

    const _pAtkSpd1 = this.readD();
    user.MDef = this.readD();
    const _pvpFlag = this.readD();
    const _karma = this.readD();

    user.RunSpeed = this.readD();
    user.WalkSpeed = this.readD();
    user.SwimRunSpeed = this.readD();
    user.SwimWalkSpeed = this.readD();
    user.FlyRunSpeed = this.readD();
    user.FlyWalkSpeed = this.readD();

    user.SpeedMultiplier = this.readF();
    user.AtkSpdMultiplier = this.readF();
    const _collisionRadius = this.readF();
    const _collisionHeight = this.readF();

    const HairStyle = this.readD();
    const HairColor = this.readD();
    const Face = this.readD();

    const _isGM = this.readD();

    user.Title = this.readS();
    const ClanId = this.readD();
    const _clanCrestId = this.readD();
    const _allyId = this.readD();
    const _allyCrestId = this.readD();

    // 0x40 leader rights
    // siege flags: attacker - 0x180 sword over name, defender - 0x80 shield, 0xC0 crown (|leader), 0x1C0 flag (|leader)
    const _relation = this.readD();

    const _mountType = this.readC();
    const _privateStoreType = this.readC();
    const _dwarvenCraft = this.readC();

    user.PkKills = this.readD();
    user.PvpKills = this.readD();

    const _cubicsNum = this.readH();
    for (let j = 0; j < _cubicsNum; j++) {
      const _cubicId = this.readH();
    }

    this.Client.CreaturesList.add(user);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
