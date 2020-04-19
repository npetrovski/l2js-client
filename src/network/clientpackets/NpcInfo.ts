import AbstractNpcInfo from "./AbstractNpcInfo";
import L2Npc from "../../entities/L2Npc";
import L2Mob from "../../entities/L2Mob";

export default class NpcInfo extends AbstractNpcInfo {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _objId = this.readD();
    const _idTemplate = this.readD() - 1000000;
    const _isAttackable = this.readD() === 1;

    let npc = this.Client.CreaturesList.getEntryByObjectId(_objId);
    if (!npc) {
      if (!_isAttackable) {
        npc = new L2Npc();
      } else {
        npc = new L2Mob();
      }

      npc.ObjectId = _objId;
      this.Client.CreaturesList.add(npc);
    }

    npc.IsAttackable = _isAttackable;
    npc.X = this.readD();
    npc.Y = this.readD();
    npc.Z = this.readD();

    npc.Heading = this.readD();

    const _pad1 = this.readD();
    const MAtkSpd = this.readD();
    const PAtkSpd = this.readD();

    npc.RunSpeed = this.readD();
    npc.WalkSpeed = this.readD();
    npc.SwimRunSpeed = this.readD();
    npc.SwimWalkSpeed = this.readD();
    npc.FlyRunSpeed = this.readD();
    npc.FlyWalkSpeed = this.readD();

    const _flyRunSpd1 = this.readD();
    const _flyWalkSpd1 = this.readD();

    npc.SpeedMultiplier = this.readF();
    const AttackSpeedMultiplier = this.readF();
    const _collisionRadius = this.readF();
    const _collisionHeight = this.readF();

    const rhandId = this.readD();
    const chestId = this.readD();
    const lhandId = this.readD();
    // npc.getTemplate().RhandId = this.readD(); // right hand weapon
    // npc.getTemplate().ChestId = this.readD();
    // npc.getTemplate().LhandId = this.readD(); // left hand weapon

    const _unkn1 = this.readC(); // name above char 1=true ... ??
    npc.IsRunning = this.readC() === 1;
    npc.IsInCombat = this.readC() === 1;
    npc.IsDead = this.readC() === 1;
    const _isSummoned = this.readC() === 2; // invisible ?? 0=false 1=true 2=summoned (only works if model has a summon animation)

    const _unkn2 = this.readD();
    npc.Name = this.readS();
    const _unkn3 = this.readD();
    npc.Title = this.readS();

    const _pad2 = this.readD();
    const _pad3 = this.readD();
    const _pad4 = this.readD();

    // let _titleColor = this.readD(); // Title color 0=client default
    // let _pvpFlag = this.readD(); // pvp flag
    // let _karma = this.readD(); // karma

    const _invisibleVisualEffect = this.readD();
    const _clanId = this.readD();
    const _clanCrest = this.readD();
    const _allyId = this.readD();
    const _allyCrest = this.readD();

    const _insideZone = this.readC(); // 1=water, 2=flying
    const _teamId = this.readC();

    const _collisionRadius1 = this.readF();
    const _collisionHeight2 = this.readF();
    const _enchantEffect = this.readD(); // C4
    const _isFlying = this.readD() === 1; // C6
    const _pad5 = this.readD();
    const _colorEffect = this.readD(); // CT1.5 Pet form and skills, Color effect

    npc.IsTargetable = this.readC() === 1;
    const _isShowName = this.readC() === 1;
    const _abnormalVisualEffectSpecial = this.readD();
    const _displayEffect = this.readD();

    const user = this.Client.ActiveChar;
    if (user) {
      npc.Distance = this.Client.calculateDistance(npc, user);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
