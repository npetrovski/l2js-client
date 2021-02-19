import L2Character from "../../entities/L2Character";
import GameClientPacket from "./GameClientPacket";
import GameServerPacket from "../clientpackets/GameServerPacket";
import L2Creature from "../../entities/L2Creature";
import { GlobalEvents } from "../../mmocore/EventEmitter";

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
    GameServerPacket.PAPERDOLL_RHAND
  ];

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const [_x, _y, _z] = this.readLoc();
    const _vehicleId = this.readD();
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

    CharInfo.PAPERDOLL_ORDER.forEach(() => {
      const _slotItemDisplayId = this.readD();
    });

    const _pvpFlag = this.readD();
    const _karma = this.readD();

    const _MAtkSpd = this.readD();
    const _PAtkSpd = this.readD();

    const _warEnemy = this.readD();

    const _pad0 = this.readD();

    char.RunSpeed = this.readD();
    char.WalkSpeed = this.readD();
    const _swimRunSpd = this.readD();
    const _swimWalkSpd = this.readD();
    const _mountedRunSpd = this.readD();
    const _mountedWalkSpd = this.readD();
    const _flyRunSpd = this.readD();
    const _flyWalkSpd = this.readD();


    char.SpeedMultiplier = this.readF();
    const _atkSpdMultiplier = this.readF();

    const _collisionRadius = this.readF();
    const _collisionHeight = this.readF();

    const _hairStyle = this.readD();
    const _hairColor = this.readD();
    const _face = this.readD();

    char.Title = this.readS();

    const _clanId = this.readD();
    const _clanCrestId = this.readD();
    const _clanAllyId = this.readD();
    const _clanAllyCrestId = this.readD();

    const _relations = this.readD();

    const _isSitting = this.readC() === 0; // standing = 1 sitting = 0
    char.IsRunning = this.readC() === 1; // running = 1 walking = 0
    char.IsInCombat = this.readC() === 1;

    const _deadInOlympiad = this.readC() === 1;
    const _invisible = this.readC() === 1;

    const _mountType = this.readC(); // 1-on Strider, 2-on Wyvern, 3-on Great Wolf, 0-no mount

    const _privateStoreType = this.readC();

    const _cubicsSize = this.readH();
    for (let i = 0; i < _cubicsSize; i++) {
      const _cubicId = this.readH();
    }

    const _isInPartyMatchRoom = this.readC();

    GlobalEvents.fire("CharInfo", { creature: char });
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
