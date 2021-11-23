import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import L2Buff from "../../../entities/L2Buff";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class EtcStatusUpdateMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
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
    EtcStatusUpdateMutator.ETC_DANGER_AREA,
    EtcStatusUpdateMutator.ETC_BLOCK_ALL_CHAT,
    EtcStatusUpdateMutator.ETC_WEIGHT_PENALTY,
    EtcStatusUpdateMutator.ETC_INCREASE_FORCE,
    EtcStatusUpdateMutator.ETC_CHARM_OF_COURAGE,
    EtcStatusUpdateMutator.ETC_DEATH_PENALTY,
    EtcStatusUpdateMutator.ETC_SOUL_EXPANSION,
    EtcStatusUpdateMutator.ETC_WEAPON_GRADE_PENALTY,
    EtcStatusUpdateMutator.ETC_ARMOR_GRADE_PENALTY,
  ];

  update(packet: SerializablePacket): void {
    const list = this.Client.BuffsList;

    if (list) {
      for (const id of EtcStatusUpdateMutator.ETC_BUFFS) {
        list.removeById(id);
      }

      if ((packet.get("charges") as number) > 0) {
        list.add(new L2Buff(EtcStatusUpdateMutator.ETC_INCREASE_FORCE, packet.get("charges") as number));
      }

      if ((packet.get("weight_penalty") as number) > 0) {
        list.add(new L2Buff(EtcStatusUpdateMutator.ETC_WEIGHT_PENALTY, packet.get("weight_penalty") as number));
      }

      if ((packet.get("block_all_chat") as number) > 0) {
        list.add(new L2Buff(EtcStatusUpdateMutator.ETC_BLOCK_ALL_CHAT, packet.get("block_all_chat") as number));
      }

      if ((packet.get("danger_area") as number) > 0) {
        list.add(new L2Buff(EtcStatusUpdateMutator.ETC_DANGER_AREA, packet.get("danger_area") as number));
      }

      if ((packet.get("weapon_grade_penalty") as number) > 0) {
        list.add(
          new L2Buff(EtcStatusUpdateMutator.ETC_WEAPON_GRADE_PENALTY, packet.get("weapon_grade_penalty") as number)
        );
      }

      if ((packet.get("armor_grade_penalty") as number) > 0) {
        list.add(
          new L2Buff(EtcStatusUpdateMutator.ETC_ARMOR_GRADE_PENALTY, packet.get("armor_grade_penalty") as number)
        );
      }

      if ((packet.get("charm_of_courage") as number) > 0) {
        list.add(new L2Buff(EtcStatusUpdateMutator.ETC_CHARM_OF_COURAGE, packet.get("charm_of_courage") as number));
      }

      if ((packet.get("death_penalty") as number) > 0) {
        list.add(new L2Buff(EtcStatusUpdateMutator.ETC_DEATH_PENALTY, packet.get("death_penalty") as number));
      }

      if ((packet.get("soul_expansion") as number) > 0) {
        list.add(new L2Buff(EtcStatusUpdateMutator.ETC_SOUL_EXPANSION, packet.get("soul_expansion") as number));
      }
    }
  }
}
