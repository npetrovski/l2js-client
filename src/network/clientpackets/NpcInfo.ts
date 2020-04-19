import AbstractNpcInfo from "./AbstractNpcInfo";
import L2Npc from "../../entities/L2Npc";
import L2Mob from "../../entities/L2Mob";

export default class NpcInfo extends AbstractNpcInfo {
  //@Override
  readImpl(): boolean {
    let _id: number = this.readC();
    let _objId = this.readD();
    let _idTemplate = this.readD() - 1000000;
    let _isAttackable = this.readD() == 1;

    var npc = this.Client.CreaturesList.getEntryByObjectId(_objId);
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

    let _pad1 = this.readD();
    let MAtkSpd = this.readD();
    let PAtkSpd = this.readD();

    npc.RunSpeed = this.readD();
    npc.WalkSpeed = this.readD();
    npc.SwimRunSpeed = this.readD();
    npc.SwimWalkSpeed = this.readD();
    npc.FlyRunSpeed = this.readD();
    npc.FlyWalkSpeed = this.readD();

    let _flyRunSpd1 = this.readD();
    let _flyWalkSpd1 = this.readD();

    npc.SpeedMultiplier = this.readF();
    let AttackSpeedMultiplier = this.readF();
    let _collisionRadius = this.readF();
    let _collisionHeight = this.readF();

    let rhandId = this.readD();
    let chestId = this.readD();
    let lhandId = this.readD();
    //npc.getTemplate().RhandId = this.readD(); // right hand weapon
    //npc.getTemplate().ChestId = this.readD();
    //npc.getTemplate().LhandId = this.readD(); // left hand weapon

    let _unkn1 = this.readC(); // name above char 1=true ... ??
    npc.IsRunning = this.readC() == 1;
    npc.IsInCombat = this.readC() == 1;
    npc.IsDead = this.readC() == 1;
    let _isSummoned = this.readC() == 2; // invisible ?? 0=false 1=true 2=summoned (only works if model has a summon animation)

    let _unkn2 = this.readD();
    npc.Name = this.readS();
    let _unkn3 = this.readD();
    npc.Title = this.readS();

    let _pad2 = this.readD();
    let _pad3 = this.readD();
    let _pad4 = this.readD();

    // let _titleColor = this.readD(); // Title color 0=client default
    // let _pvpFlag = this.readD(); // pvp flag
    // let _karma = this.readD(); // karma

    let _invisibleVisualEffect = this.readD();
    let _clanId = this.readD();
    let _clanCrest = this.readD();
    let _allyId = this.readD();
    let _allyCrest = this.readD();

    let _insideZone = this.readC(); // 1=water, 2=flying
    let _teamId = this.readC();

    let _collisionRadius1 = this.readF();
    let _collisionHeight2 = this.readF();
    let _enchantEffect = this.readD(); //C4
    let _isFlying = this.readD() == 1; //C6
    let _pad5 = this.readD();
    let _colorEffect = this.readD(); // CT1.5 Pet form and skills, Color effect

    npc.IsTargetable = this.readC() == 1;
    let _isShowName = this.readC() == 1;
    let _abnormalVisualEffectSpecial = this.readD();
    let _displayEffect = this.readD();

    let user = this.Client.ActiveChar;
    if (user) {
      npc.Distance = this.Client.calculateDistance(npc, user);
    }

    return true;
  }

  //@Override
  run(): void {}
}
