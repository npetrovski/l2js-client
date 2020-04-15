import AbstractNpcInfo from "./AbstractNpcInfo";
import L2Npc from "../../model/actor/L2Npc";

export default class NpcInfo extends AbstractNpcInfo {
  //@Override
  readImpl(): boolean {
    let _id: number = this.readC();
    let _objId = this.readD();
    let _idTemplate = this.readD() - 1000000;

    var npc = this.Client.CreaturesList.getEntryByObjectId(_objId);
    if (!npc) {
      npc = new L2Npc();
      npc.setObjectId(_objId);
      npc.setTemplateId(_idTemplate);
      this.Client.CreaturesList.add(npc);
    }

    npc.setIsAttackable(this.readD() == 1);
    npc.setX(this.readD());
    npc.setY(this.readD());
    npc.setZ(this.readD());

    npc.setHeading(this.readD());

    let _pad1 = this.readD();
    npc.getStat().setMAtkSpd(this.readD());
    npc.getStat().setPAtkSpd(this.readD());
    npc.getStat().setRunSpeed(this.readD());
    npc.getStat().setWalkSpeed(this.readD());
    npc.getStat().setSwimRunSpeed(this.readD());
    npc.getStat().setSwimWalkSpeed(this.readD());
    npc.getStat().setFlyRunSpeed(this.readD());
    npc.getStat().setFlyWalkSpeed(this.readD());

    let _flyRunSpd1 = this.readD();
    let _flyWalkSpd1 = this.readD();

    npc.getStat().setMovementSpeedMultiplier(this.readF());
    npc.getStat().setAttackSpeedMultiplier(this.readF());
    let _collisionRadius = this.readF();
    let _collisionHeight = this.readF();

    let rhandId = this.readD();
    let chestId = this.readD();
    let lhandId = this.readD();
    //npc.getTemplate().setRhandId(this.readD()); // right hand weapon
    //npc.getTemplate().setChestId(this.readD());
    //npc.getTemplate().setLhandId(this.readD()); // left hand weapon

    let _unkn1 = this.readC(); // name above char 1=true ... ??
    npc.setIsRunning(this.readC() == 1);
    npc.setIsInCombat(this.readC() == 1);
    npc.setIsDead(this.readC() == 1);
    let _isSummoned = this.readC() == 2; // invisible ?? 0=false 1=true 2=summoned (only works if model has a summon animation)

    let _unkn2 = this.readD();
    npc.setName(this.readS());
    let _unkn3 = this.readD();
    npc.setTitle(this.readS());

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

    let _isTargetable = this.readC() == 1;
    let _isShowName = this.readC() == 1;
    let _abnormalVisualEffectSpecial = this.readD();
    let _displayEffect = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
