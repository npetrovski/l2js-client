import AbstractNpcInfo from "./AbstractNpcInfo";
import L2Npc from "../../model/actor/L2Npc";

export default class NpcInfo extends AbstractNpcInfo {
  //@Override
  readImpl(): boolean {
    var l2object = new L2Npc();

    let _id: number = this.readC();
    l2object.setObjectId(this.readD());
    let _idTemplate = this.readD() - 1000000;
    let _isAttackable = this.readD() == 1;
    l2object.setX(this.readD());
    l2object.setY(this.readD());
    l2object.setZ(this.readD());

    l2object.setHeading(this.readD());

    let _pad1 = this.readD();
    let _mAtkSpd = this.readD();
    let _pAtkSpd = this.readD();
    let _runSpd = this.readD();
    let _walkSpd = this.readD();
    let _swimRunSpd = this.readD();
    let _swimWalkSpd = this.readD();
    let _flyRunSpd = this.readD();
    let _flyWalkSpd = this.readD();
    let _flyRunSpd1 = this.readD();
    let _flyWalkSpd1 = this.readD();
    let _moveMultiplier = this.readF();
    let _attackSpeedMultiplier = this.readF();
    let _collisionRadius = this.readF();
    let _collisionHeight = this.readF();
    let _rhand = this.readD(); // right hand weapon
    let _chest = this.readD();
    let _lhand = this.readD(); // left hand weapon
    let _unkn1 = this.readC(); // name above char 1=true ... ??
    l2object.setIsRunning(this.readC() == 1);
    let _isInCombat = this.readC() == 1;
    let _isAlikeDead = this.readC() == 1;
    let _isSummoned = this.readC() == 2; // invisible ?? 0=false 1=true 2=summoned (only works if model has a summon animation)
    let _unkn2 = this.readD();
    l2object.setTitle(this.readS());

    let _titleColor = this.readD(); // Title color 0=client default
    let _pvpFlag = this.readD(); // pvp flag
    let _karma = this.readD(); // karma

    let _invisibleVisualEffect = this.readD();
    let _clanId = this.readD();
    let _clanCrest = this.readD();
    let _allyId = this.readD();
    let _allyCrest = this.readD();

    let _insideZone = this.readC(); // 1=water, 2=flying
    let _teamId = this.readD();

    let _collisionRadius1 = this.readF();
    let _collisionHeight2 = this.readF();
    let _enchantEffect = this.readD(); //C4
    let _isFlying = this.readD() == 1; //C6
    let _pad2 = this.readD();
    let _colorEffect = this.readD(); // CT1.5 Pet form and skills, Color effect
    let _isTargetable = this.readC() == 1;
    let _isShowName = this.readC() == 1;
    let _abnormalVisualEffectSpecial = this.readD();
    let _displayEffect = this.readD();

    this.Client.NpcInfo.set(l2object.getObjectId(), l2object);
    return true;
  }

  //@Override
  run(): void {}
}
