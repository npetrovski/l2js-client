import GameClientPacket from "./GameClientPacket";
import L2Buff from "../../../entities/L2Buff";

export default class EtcStatusUpdate extends GameClientPacket {
  static readonly ETC_DANGER_AREA: number = 4268;
  static readonly ETC_BLOCK_ALL_CHAT: number = 4269;
  static readonly ETC_WEIGHT_PENALTY: number = 4270;
  static readonly ETC_INCREASE_FORCE: number = 4271;
  static readonly ETC_CHARM_OF_COURAGE: number = 5041;
  static readonly ETC_DEATH_PENALTY: number = 5076;
  static readonly ETC_SOUL_EXPANSION: number = 5446;
  static readonly ETC_WEAPON_GRADE_PENALTY: number = 6209;
  static readonly ETC_ARMOR_GRADE_PENALTY: number = 6213;

  static readonly ETC_BUFFS: number[] = [
    EtcStatusUpdate.ETC_DANGER_AREA,
    EtcStatusUpdate.ETC_BLOCK_ALL_CHAT,
    EtcStatusUpdate.ETC_WEIGHT_PENALTY,
    EtcStatusUpdate.ETC_INCREASE_FORCE,
    EtcStatusUpdate.ETC_CHARM_OF_COURAGE,
    EtcStatusUpdate.ETC_DEATH_PENALTY,
    EtcStatusUpdate.ETC_SOUL_EXPANSION,
    EtcStatusUpdate.ETC_WEAPON_GRADE_PENALTY,
    EtcStatusUpdate.ETC_ARMOR_GRADE_PENALTY
  ];

  Charges!: number;
  WeightPenalty!: number;
  MessageRefusal!: number;
  InsideDangerZone!: number;
  ExpertiseWeaponPenalty!: number;
  ExpertiseArmorPenalty!: number;
  HasCharmOfCourage!: number;
  DeathPenaltyBuffLevel!: number;
  ChargedSouls!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.Charges = this.readD(); // 1-7 increase force, lvl
    this.WeightPenalty = this.readD(); // 1-4 weight penalty, lvl (1=50%, 2=66.6%, 3=80%, 4=100%)
    this.MessageRefusal = this.readD(); // 1 = block all chat
    this.InsideDangerZone = this.readD();
    this.ExpertiseWeaponPenalty = this.readD(); // Weapon Grade Penalty [1-4]
    this.ExpertiseArmorPenalty = this.readD(); // Armor Grade Penalty [1-4]
    this.HasCharmOfCourage = this.readD(); // 1 = charm of courage (allows resurrection on the same spot upon death on the siege battlefield)
    this.DeathPenaltyBuffLevel = this.readD(); // 1-15 death penalty, lvl (combat ability decreased due to death)
    this.ChargedSouls = this.readD();

    return true;
  }
}
