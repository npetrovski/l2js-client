import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import StatusUpdate from "../../incoming/game/StatusUpdate";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import L2User from "../../../entities/L2User";

export default class StatusUpdateMutator extends IMMOClientMutator<
  GameClient,
  StatusUpdate
> {
  update(packet: StatusUpdate): void {
    if (packet.ObjectId) {
      const char = this.Client.CreaturesList.getEntryByObjectId(
        packet.ObjectId
      );

      Object.keys(packet.Stats).forEach(key => {
        const status: number = parseInt(key, 10);
        const value = packet.Stats[status];

        switch (status) {
          case StatusUpdate.LEVEL:
            if (char instanceof L2User) {
              char.Level = value;
            }
            break;
          case StatusUpdate.EXP:
            if (char instanceof L2User) {
              char.Exp = value;
            }
            break;
          case StatusUpdate.STR:
            if (char instanceof L2User) {
              char.STR = value;
            }
            break;
          case StatusUpdate.DEX:
            if (char instanceof L2User) {
              char.DEX = value;
            }
            break;
          case StatusUpdate.CON:
            if (char instanceof L2User) {
              char.CON = value;
            }
            break;
          case StatusUpdate.INT:
            if (char instanceof L2User) {
              char.INT = value;
            }
            break;
          case StatusUpdate.WIT:
            if (char instanceof L2User) {
              char.WIT = value;
            }
            break;
          case StatusUpdate.MEN:
            if (char instanceof L2User) {
              char.MEN = value;
            }
            break;
          case StatusUpdate.CUR_HP:
            if (typeof char !== "undefined") {
              char.Hp = value;
            }
            break;
          case StatusUpdate.MAX_HP:
            if (typeof char !== "undefined") {
              char.MaxHp = value;
            }
            break;
          case StatusUpdate.CUR_MP:
            if (typeof char !== "undefined") {
              char.Mp = value;
            }
            break;
          case StatusUpdate.MAX_MP:
            if (typeof char !== "undefined") {
              char.MaxMp = value;
            }
            break;
          case StatusUpdate.SP:
            if (char instanceof L2User) {
              char.Sp = value;
            }
            break;
          case StatusUpdate.CUR_LOAD:
            // todo
            break;
          case StatusUpdate.MAX_LOAD:
            // todo
            break;
          case StatusUpdate.P_ATK:
            if (char instanceof L2User) {
              char.PAtk = value;
            }
            break;
          case StatusUpdate.ATK_SPD:
            if (char instanceof L2User) {
              char.PAtkSpd = value;
            }
            break;
          case StatusUpdate.P_DEF:
            if (char instanceof L2User) {
              char.PDef = value;
            }
            break;
          case StatusUpdate.EVASION:
            if (char instanceof L2User) {
              char.EvasionRate = value;
            }
            break;
          case StatusUpdate.ACCURACY:
            if (char instanceof L2User) {
              char.Accuracy = value;
            }
            break;
          case StatusUpdate.CRITICAL:
            if (char instanceof L2User) {
              char.Crit = value;
            }
            break;
          case StatusUpdate.M_ATK:
            if (char instanceof L2User) {
              char.MAtk = value;
            }
            break;
          case StatusUpdate.CAST_SPD:
            if (char instanceof L2User) {
              char.MAtkSpd = value;
            }
            break;
          case StatusUpdate.M_DEF:
            if (char instanceof L2User) {
              char.MDef = value;
            }
            break;
          case StatusUpdate.PVP_FLAG:
            // todo
            break;
          case StatusUpdate.KARMA:
            // todo
            break;
          case StatusUpdate.CUR_CP:
            // todo
            break;
          case StatusUpdate.MAX_CP:
            // todo
            break;
        }
      });
    }
  }
}
