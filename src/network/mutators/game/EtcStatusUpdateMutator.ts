import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import EtcStatusUpdate from "../../incoming/game/EtcStatusUpdate";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import L2Buff from "../../../entities/L2Buff";

export default class EtcStatusUpdateMutator extends IMMOClientMutator<
  GameClient,
  EtcStatusUpdate
> {
  update(packet: EtcStatusUpdate): void {
    const list = this.Client.BuffsList;

    if (list) {
      for (const id of EtcStatusUpdate.ETC_BUFFS) {
        list.removeById(id);
      }

      if (packet.Charges > 0) {
        list.add(
          new L2Buff(EtcStatusUpdate.ETC_INCREASE_FORCE, packet.Charges)
        );
      }

      if (packet.WeightPenalty > 0) {
        list.add(
          new L2Buff(EtcStatusUpdate.ETC_WEIGHT_PENALTY, packet.WeightPenalty)
        );
      }

      if (packet.MessageRefusal > 0) {
        list.add(
          new L2Buff(EtcStatusUpdate.ETC_BLOCK_ALL_CHAT, packet.MessageRefusal)
        );
      }

      if (packet.InsideDangerZone > 0) {
        list.add(
          new L2Buff(EtcStatusUpdate.ETC_DANGER_AREA, packet.InsideDangerZone)
        );
      }

      if (packet.ExpertiseWeaponPenalty > 0) {
        list.add(
          new L2Buff(
            EtcStatusUpdate.ETC_WEAPON_GRADE_PENALTY,
            packet.ExpertiseWeaponPenalty
          )
        );
      }

      if (packet.ExpertiseArmorPenalty > 0) {
        list.add(
          new L2Buff(
            EtcStatusUpdate.ETC_ARMOR_GRADE_PENALTY,
            packet.ExpertiseArmorPenalty
          )
        );
      }

      if (packet.HasCharmOfCourage > 0) {
        list.add(
          new L2Buff(
            EtcStatusUpdate.ETC_CHARM_OF_COURAGE,
            packet.HasCharmOfCourage
          )
        );
      }

      if (packet.DeathPenaltyBuffLevel > 0) {
        list.add(
          new L2Buff(
            EtcStatusUpdate.ETC_DEATH_PENALTY,
            packet.DeathPenaltyBuffLevel
          )
        );
      }

      if (packet.ChargedSouls > 0) {
        list.add(
          new L2Buff(EtcStatusUpdate.ETC_SOUL_EXPANSION, packet.ChargedSouls)
        );
      }
    }
  }
}
