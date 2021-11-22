import L2Character from "../../../entities/L2Character";
import GameClientPacket from "./GameClientPacket";
import GameServerPacket from "../../outgoing/game/GameServerPacket";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class CharInfo extends GameClientPacket {
  static readonly PAPERDOLL_ORDER: number[] = [
    GameServerPacket.PAPERDOLL_UNDER,
    GameServerPacket.PAPERDOLL_HEAD,
    GameServerPacket.PAPERDOLL_RHAND,
    GameServerPacket.PAPERDOLL_LHAND,
    GameServerPacket.PAPERDOLL_GLOVES,
    GameServerPacket.PAPERDOLL_CHEST,
    GameServerPacket.PAPERDOLL_LEGS,
    GameServerPacket.PAPERDOLL_FEET,
    GameServerPacket.PAPERDOLL_CLOAK,
    GameServerPacket.PAPERDOLL_RHAND,
    GameServerPacket.PAPERDOLL_HAIR,
    GameServerPacket.PAPERDOLL_HAIR2,
  ];

  Char: L2Character = new L2Character();

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const [_x, _y, _z] = this.readLoc();
    const _vehicleId = this.readD();
    this.Char.ObjectId = this.readD();

    this.Char.X = _x;
    this.Char.Y = _y;
    this.Char.Z = _z;

    this.Char.Name = this.readS();

    this.Char.Race = this.readD();
    this.Char.Sex = this.readD();
    this.Char.BaseClassId = this.readD();

    CharInfo.PAPERDOLL_ORDER.forEach(() => {
      const _slotItemDisplayId = this.readD();
    });


   //TODO fiw missing stuff

    const _pvpFlag = this.readD();
    this.Char.Karma = this.readD();

    this.Char.MAtkSpd = this.readD();
    this.Char.PAtkSpd = this.readD();

    const _pad0 = this.readD();

    this.Char.RunSpeed = this.readD();
    this.Char.WalkSpeed = this.readD();
    this.Char.SwimRunSpeed = this.readD();
    this.Char.SwimWalkSpeed = this.readD();
    this.Char.FlyRunSpeed = this.readD();
    this.Char.FlyWalkSpeed = this.readD();
    const _flyRunSpd1 = this.readD();
    const _flyWalkSpd1 = this.readD();

    this.Char.SpeedMultiplier = this.readF();
    this.Char.AtkSpdMultiplier = this.readF();

    const _collisionRadius = this.readF();
    const _collisionHeight = this.readF();

    const _hairStyle = this.readD();
    const _hairColor = this.readD();
    const _face = this.readD();

    this.Char.Title = this.readS();

    const _clanId = this.readD();
    const _clanCrestId = this.readD();
    const _clanAllyId = this.readD();
    const _clanAllyCrestId = this.readD();

    this.Char.IsSitting = this.readC() === 0; // standing = 1 sitting = 0
    this.Char.IsRunning = this.readC() === 1; // running = 1 walking = 0
    this.Char.IsInCombat = this.readC() === 1;

    const _deadInOlympiad = this.readC() === 1;
    const _invisible = this.readC() === 1;

    const _mountType = this.readC(); // 1-on Strider, 2-on Wyvern, 3-on Great Wolf, 0-no mount

    const _privateStoreType = this.readC();

    const _cubicsSize = this.readH();
    for (let i = 0; i < _cubicsSize; i++) {
      const _cubicId = this.readH();
    }

    const _isInPartyMatchRoom = this.readC();
    const _abnormalVisualEffects = this.readD();

    const _isFlyingOrSwimming = this.readC(); // 1 - in water, 2 = fly, else 0

    this.Char.RecommHave = this.readH();
    const _mountNpcId = this.readD() - 1000000;
    this.Char.ClassId = this.readD();

    const _pad1 = this.readD();

    const _enchantEffect = this.readC();

    const _teamId = this.readC();
    const _clanCrestLargeId = this.readD();

    this.Char.IsNoble = this.readC() === 1;
    this.Char.IsHero = this.readC() === 1;
    this.Char.IsFishing = this.readC() === 1;

    const _fishX = this.readD();
    const _fishY = this.readD();
    const _fishZ = this.readD();

    const _nameColor = this.readD();

    this.Char.Heading = this.readD();

    const _pledgeClass = this.readD();
    const _pledgeType = this.readD();

    const _titleColor = this.readD();

    const _cursedWeaponLevel = this.readD();

    const _reputationScore = this.readD();
    const _transformationDisplayId = this.readD();
    const _agathionId = this.readD();

    const _pad3 = this.readD();

    const _abnormalVisualEffectSpecial = this.readD();

    return true;
  }
}
