import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import L2User from "../../../entities/L2User";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class StatusUpdateMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  static readonly LEVEL = 0x01;
  static readonly EXP = 0x02;
  static readonly STR = 0x03;
  static readonly DEX = 0x04;
  static readonly CON = 0x05;
  static readonly INT = 0x06;
  static readonly WIT = 0x07;
  static readonly MEN = 0x08;
  static readonly CUR_HP = 0x09;
  static readonly MAX_HP = 0x0a;
  static readonly CUR_MP = 0x0b;
  static readonly MAX_MP = 0x0c;
  static readonly SP = 0x0d;
  static readonly CUR_LOAD = 0x0e;
  static readonly MAX_LOAD = 0x0f;
  static readonly P_ATK = 0x11;
  static readonly ATK_SPD = 0x12;
  static readonly P_DEF = 0x13;
  static readonly EVASION = 0x14;
  static readonly ACCURACY = 0x15;
  static readonly CRITICAL = 0x16;
  static readonly M_ATK = 0x17;
  static readonly CAST_SPD = 0x18;
  static readonly M_DEF = 0x19;
  static readonly PVP_FLAG = 0x1a;
  static readonly KARMA = 0x1b;
  static readonly CUR_CP = 0x21;
  static readonly MAX_CP = 0x22;

  update(packet: SerializablePacket): void {
    // char
    const char = this.Client.CreaturesList.getEntryByObjectId(packet.get("updated_actor_oid") as number);

    (packet.get("stats") as Record<string, number>[]).forEach((data) => {
      const value = data.value;

      switch (data.type) {
        case StatusUpdateMutator.LEVEL:
          if (char instanceof L2User) {
            char.Level = value;
          }
          break;
        case StatusUpdateMutator.EXP:
          if (char instanceof L2User) {
            char.Exp = value;
          }
          break;
        case StatusUpdateMutator.STR:
          if (char instanceof L2User) {
            char.STR = value;
          }
          break;
        case StatusUpdateMutator.DEX:
          if (char instanceof L2User) {
            char.DEX = value;
          }
          break;
        case StatusUpdateMutator.CON:
          if (char instanceof L2User) {
            char.CON = value;
          }
          break;
        case StatusUpdateMutator.INT:
          if (char instanceof L2User) {
            char.INT = value;
          }
          break;
        case StatusUpdateMutator.WIT:
          if (char instanceof L2User) {
            char.WIT = value;
          }
          break;
        case StatusUpdateMutator.MEN:
          if (char instanceof L2User) {
            char.MEN = value;
          }
          break;
        case StatusUpdateMutator.CUR_HP:
          if (typeof char !== "undefined") {
            char.Hp = value;
          }
          break;
        case StatusUpdateMutator.MAX_HP:
          if (typeof char !== "undefined") {
            char.MaxHp = value;
          }
          break;
        case StatusUpdateMutator.CUR_MP:
          if (typeof char !== "undefined") {
            char.Mp = value;
          }
          break;
        case StatusUpdateMutator.MAX_MP:
          if (typeof char !== "undefined") {
            char.MaxMp = value;
          }
          break;
        case StatusUpdateMutator.SP:
          if (char instanceof L2User) {
            char.Sp = value;
          }
          break;
        case StatusUpdateMutator.CUR_LOAD:
          // todo
          break;
        case StatusUpdateMutator.MAX_LOAD:
          // todo
          break;
        case StatusUpdateMutator.P_ATK:
          if (char instanceof L2User) {
            char.PAtk = value;
          }
          break;
        case StatusUpdateMutator.ATK_SPD:
          if (char instanceof L2User) {
            char.PAtkSpd = value;
          }
          break;
        case StatusUpdateMutator.P_DEF:
          if (char instanceof L2User) {
            char.PDef = value;
          }
          break;
        case StatusUpdateMutator.EVASION:
          if (char instanceof L2User) {
            char.EvasionRate = value;
          }
          break;
        case StatusUpdateMutator.ACCURACY:
          if (char instanceof L2User) {
            char.Accuracy = value;
          }
          break;
        case StatusUpdateMutator.CRITICAL:
          if (char instanceof L2User) {
            char.Crit = value;
          }
          break;
        case StatusUpdateMutator.M_ATK:
          if (char instanceof L2User) {
            char.MAtk = value;
          }
          break;
        case StatusUpdateMutator.CAST_SPD:
          if (char instanceof L2User) {
            char.MAtkSpd = value;
          }
          break;
        case StatusUpdateMutator.M_DEF:
          if (char instanceof L2User) {
            char.MDef = value;
          }
          break;
        case StatusUpdateMutator.PVP_FLAG:
          // todo
          break;
        case StatusUpdateMutator.KARMA:
          // todo
          break;
        case StatusUpdateMutator.CUR_CP:
          // todo
          break;
        case StatusUpdateMutator.MAX_CP:
          // todo
          break;
      }
    });
  }
}
