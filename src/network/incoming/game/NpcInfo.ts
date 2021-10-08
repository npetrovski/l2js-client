import AbstractNpcInfo from "./AbstractNpcInfo";
import L2Npc from "../../../entities/L2Npc";
import L2Mob from "../../../entities/L2Mob";
import L2Creature from "../../../entities/L2Creature";

export default class NpcInfo extends AbstractNpcInfo {
  ObjectId!: number;
  IsAttackable!: boolean;
  Creature!: L2Creature;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.ObjectId = this.readD();
    const _idTemplate = this.readD() - 1000000;
    this.IsAttackable = this.readD() === 1;

    if (this.IsAttackable) {
      this.Creature = new L2Mob();
      this.Creature.Name = `Mob #${_idTemplate}`;
    } else {
      this.Creature = new L2Npc();
      this.Creature.Name = `NPC #${_idTemplate}`;
    }

    this.Creature.Id = _idTemplate;
    this.Creature.ObjectId = this.ObjectId;
    this.Creature.IsAttackable = this.IsAttackable;
    this.Creature.X = this.readD();
    this.Creature.Y = this.readD();
    this.Creature.Z = this.readD();

    this.Creature.Heading = this.readD();

    const _pad1 = this.readD();
    this.Creature.MAtkSpd = this.readD();
    this.Creature.PAtkSpd = this.readD();

    this.Creature.RunSpeed = this.readD();
    this.Creature.WalkSpeed = this.readD();
    this.Creature.SwimRunSpeed = this.readD();
    this.Creature.SwimWalkSpeed = this.readD();
    this.Creature.FlyRunSpeed = this.readD();
    this.Creature.FlyWalkSpeed = this.readD();

    const _flyRunSpd1 = this.readD();
    const _flyWalkSpd1 = this.readD();

    this.Creature.SpeedMultiplier = this.readF();
    this.Creature.AtkSpdMultiplier = this.readF();
    const _collisionRadius = this.readF();
    const _collisionHeight = this.readF();

    const rhandId = this.readD();
    const chestId = this.readD();
    const lhandId = this.readD();
    // this.Creature.getTemplate().RhandId = this.readD(); // right hand weapon
    // this.Creature.getTemplate().ChestId = this.readD();
    // this.Creature.getTemplate().LhandId = this.readD(); // left hand weapon

    const _unkn1 = this.readC(); // name above char 1=true ... ??
    this.Creature.IsRunning = this.readC() === 1;
    this.Creature.IsInCombat = this.readC() === 1;
    this.Creature.IsDead = this.readC() === 1;
    const _isSummoned = this.readC() === 2; // invisible ?? 0=false 1=true 2=summoned (only works if model has a summon animation)

    const _unkn2 = this.readD();
    // this.Creature.Name = this.readS();
    const _name = this.readS();
    const _unkn3 = this.readD();
    this.Creature.Title = this.readS();

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

    this.Creature.IsTargetable = this.readC() === 1;
    const _isShowName = this.readC() === 1;
    const _abnormalVisualEffectSpecial = this.readD();
    const _displayEffect = this.readD();

    return true;
  }
}
