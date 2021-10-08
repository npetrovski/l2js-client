import GameClientPacket from "./GameClientPacket";
import GameServerPacket from "../../outgoing/game/GameServerPacket";
import L2User from "../../../entities/L2User";

export default class UserInfo extends GameClientPacket {
  User!: L2User;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.User = new L2User();

    this.User.X = this.readD();
    this.User.Y = this.readD();
    this.User.Z = this.readD();
    const _vehicleId = this.readD();

    this.User.ObjectId = this.readD();
    this.User.Name = this.readS();
    this.User.Race = this.readD();
    this.User.Sex = this.readD();

    this.User.BaseClassId = this.readD();
    this.User.Level = this.readD();
    this.User.Exp = this.readQ();
    const _percentFromCurrentLevel = this.readF();

    this.User.STR = this.readD();
    this.User.DEX = this.readD();
    this.User.CON = this.readD();
    this.User.INT = this.readD();
    this.User.WIT = this.readD();
    this.User.MEN = this.readD();

    this.User.MaxHp = this.readD();
    this.User.Hp = this.readD();
    this.User.MaxMp = this.readD();
    this.User.Mp = this.readD();
    this.User.Sp = this.readD();

    this.User.Load = this.readD(); // inventory => totalWeight
    this.User.MaxLoad = this.readD();

    const _activeWeapon = this.readD() === 40; // 20 no weapon, 40 weapon equipped

    GameServerPacket.PAPERDOLL_ORDER.forEach(value => {
      const _slot1 = this.readD();
    });

    GameServerPacket.PAPERDOLL_ORDER.forEach(value => {
      const _slot2 = this.readD();
    });

    GameServerPacket.PAPERDOLL_ORDER.forEach(value => {
      const _slot3 = this.readD();
    });

    const _talismanSlots = this.readD();
    const _canEquipCloak = this.readD() === 1;

    this.User.PAtk = this.readD();
    this.User.PAtkSpd = this.readD();
    this.User.PDef = this.readD();
    this.User.EvasionRate = this.readD();
    this.User.Accuracy = this.readD();
    this.User.Crit = this.readD();
    this.User.MAtk = this.readD();
    this.User.MAtkSpd = this.readD();

    const _pAtkSpd1 = this.readD();
    this.User.MDef = this.readD();
    const _pvpFlag = this.readD();
    this.User.Karma = this.readD();

    this.User.RunSpeed = this.readD();
    this.User.WalkSpeed = this.readD();
    this.User.SwimRunSpeed = this.readD();
    this.User.SwimWalkSpeed = this.readD();
    this.User.FlyRunSpeed = this.readD();
    this.User.FlyWalkSpeed = this.readD();
    const _flyRunSpdAgain = this.readD();
    const _flyWalkSpeedAgain = this.readD();

    this.User.SpeedMultiplier = this.readF();
    this.User.AtkSpdMultiplier = this.readF();
    const _collisionRadius = this.readF();
    const _collisionHeight = this.readF();

    const HairStyle = this.readD();
    const HairColor = this.readD();
    const Face = this.readD();

    const _isGM = this.readD();

    this.User.Title = this.readS();
    const _clanId = this.readD();
    const _clanCrestId = this.readD();
    const _allyId = this.readD();
    const _allyCrestId = this.readD();

    // 0x40 leader rights
    // siege flags: attacker - 0x180 sword over name, defender - 0x80 shield, 0xC0 crown (|leader), 0x1C0 flag (|leader)
    const _relation = this.readD();

    const _mountType = this.readC();
    const _privateStoreType = this.readC();
    const _dwarvenCraft = this.readC();

    this.User.PkKills = this.readD();
    this.User.PvpKills = this.readD();

    const _cubicsNum = this.readH();
    for (let j = 0; j < _cubicsNum; j++) {
      const _cubicId = this.readH();
    }

    const _isInPartyMatchRoom = this.readC() === 1;
    const _isInvisible = this.readD() === 1;
    const _stateSwimFly = this.readC(); // 1 - in water; 2 - in the air; 0 - ground

    const _clanPrivilegesBitmask = this.readD();

    this.User.RecommLeft = this.readH();
    this.User.RecommHave = this.readH();
    const _mountNpcId = this.readD() - 1000000;
    const _inventoryLimit = this.readH();

    this.User.ClassId = this.readD();

    const _unk0 = this.readD();

    this.User.MaxCp = this.readD();
    this.User.Cp = this.readD();

    const _mountEffect = this.readC();
    const _teamId = this.readC();

    const _clanCrestLargeId = this.readD();

    this.User.IsNoble = this.readC() === 1;
    this.User.IsHero = this.readC() === 1;
    this.User.IsFishing = this.readC() === 1;

    const _fishX = this.readD();
    const _fishY = this.readD();
    const _fishZ = this.readD();

    const _nameColor = this.readD();

    this.User.IsRunning = this.readC() === 1;

    const _pledgeClass = this.readD();
    const _pledgeType = this.readD();

    const _titleColor = this.readD();

    const _cursedWeaponId = this.readD();
    const _transformationDisplayId = this.readD();

    const _attackAttribute = this.readH();
    this.User.AtkElementPower = this.readH();
    const _atkFire = this.readH();
    const _atkWater = this.readH();
    const _atkWind = this.readH();
    const _atkEarth = this.readH();
    const _atkHoly = this.readH();
    const _atkDark = this.readH();

    const _agathionId = this.readD();

    this.User.Fame = this.readD();

    const _isMinimapAllowed = this.readD() === 1;
    const _vitalityPoints = this.readD();
    const _abnormalVisualEffectSpecial = this.readD();

    return true;
  }
}
