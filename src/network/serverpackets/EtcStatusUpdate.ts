import GameClientPacket from "./GameClientPacket";
import L2Buff from "../../entities/L2Buff";

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
    EtcStatusUpdate.ETC_ARMOR_GRADE_PENALTY,
  ];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    for (const id of EtcStatusUpdate.ETC_BUFFS) {
      this.Client.BuffsList.removeById(id);
    }

    const _charges = this.readD(); // 1-7 increase force, lvl
    if (_charges > 0) {
      this.Client.BuffsList.add(new L2Buff(EtcStatusUpdate.ETC_INCREASE_FORCE, _charges));
    }
    const _weightPenalty = this.readD(); // 1-4 weight penalty, lvl (1=50%, 2=66.6%, 3=80%, 4=100%)
    if (_weightPenalty > 0) {
      this.Client.BuffsList.add(new L2Buff(EtcStatusUpdate.ETC_WEIGHT_PENALTY, _weightPenalty));
    }
    const _messageRefusal = this.readD(); // 1 = block all chat
    if (_messageRefusal > 0) {
      this.Client.BuffsList.add(new L2Buff(EtcStatusUpdate.ETC_BLOCK_ALL_CHAT, _messageRefusal));
    }

    const _isInsideDangerZone = this.readD();
    if (_isInsideDangerZone > 0) {
      this.Client.BuffsList.add(new L2Buff(EtcStatusUpdate.ETC_DANGER_AREA, _isInsideDangerZone));
    }

    const _expertiseWeaponPenalty = this.readD(); // Weapon Grade Penalty [1-4]
    if (_expertiseWeaponPenalty > 0) {
      this.Client.BuffsList.add(new L2Buff(EtcStatusUpdate.ETC_WEAPON_GRADE_PENALTY, _expertiseWeaponPenalty));
    }


    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
