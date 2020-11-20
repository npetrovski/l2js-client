import L2Character from "../../entities/L2Character";
import GameClientPacket from "./GameClientPacket";
import GameServerPacket from "../clientpackets/GameServerPacket";

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
    GameServerPacket.PAPERDOLL_RHAND,
    GameServerPacket.PAPERDOLL_HAIR
  ];
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const [_x, _y, _z] = this.readLoc();

    const _heading = this.readD();
    const _objId = this.readD();

    let char = this.Client.CreaturesList.getEntryByObjectId(_objId);
    
    if (!char) {
      char = new L2Character();

      char.ObjectId = _objId;
      this.Client.CreaturesList.add(char);
    }

    char.X = _x;
    char.Y = _y;
    char.Z = _z;

    char.Name = this.readS();

    char.Race = this.readD();
    char.Sex = this.readD();
    char.BaseClassId = this.readD();

    const _dhair = this.readD();
    const _head = this.readD();
    const _rhand = this.readD();
    const _lhand = this.readD();
    const _gloves = this.readD();
    const _chest = this.readD();
    const _legs = this.readD();
    const _feet = this.readD();
    const _back = this.readD();
    const _lrhand = this.readD();
    const _hair = this.readD();

    const _pvpflag = this.readD();
    const _karma = this.readD();
    const _mspeed = this.readD();
    const _pspeed = this.readD();
    const _pvpflag1 = this.readD();
    const _karma1 = this.readD();

    char.RunSpeed = this.readD();
    char.WalkSpeed = this.readD();

    const _swimrspd = this.readD();
    const _swimwspd = this.readD();
    const _flrunspd = this.readD();
    const _flwalkspd = this.readD();
    const _flyrspd = this.readD();
    const _flywspd = this.readD();

    char.SpeedMultiplier = this.readF();

    const _aspdmul = this.readF();
    const _collisradius = this.readF();
    const _collisheight = this.readF();
    const _hairstyle = this.readD();
    const _haircolor = this.readD();
    const _face = this.readD();

    char.Title = this.readS();

    const _clanid = this.readD();
    const _clancrest = this.readD();
    const _allyid = this.readD();
    const _allycrest = this.readD();
    const _siegeflag = this.readD();

    const _isSitting = this.readC() === 0; // standing = 1 sitting = 0
    char.IsRunning = this.readC() === 1; // running = 1 walking = 0
    char.IsInCombat = this.readC() === 1;

    const _isalikedead = this.readC();
    const _invis = this.readC();
    const _mount = this.readC();
    const _shop = this.readC();

  
    const _cubics = this.readH();

    for (let i = 0; i < _cubics; i++) {
      const _cubid = this.readH();
    }

    const _findparty = this.readC();
    const _abneffects = this.readD();
    const _recomleft = this.readC();
    const _recomhave = this.readH();

    char.ClassId = this.readD();

    const _maxcp = this.readD();
    const _curcp = this.readD();
    const _ismounted = this.readC();
    const _team = this.readC();
    const _clanbigcrestid = this.readD();

    char.IsNoble = this.readC() === 1;
    char.IsHero = this.readC() === 1;

    const _isfishing = this.readC();
    const _fishx = this.readD();
    const _fishy = this.readD();
    const _fishz = this.readD();
    const _namecolor = this.readD();

    //char.Heading = this.readD(); // FAIL
    char.calculateDistance(this.Client.ActiveChar);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
