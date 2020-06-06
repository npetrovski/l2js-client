import GameClientPacket from "./GameClientPacket";
import L2User from "../../entities/L2User";
import L2Creature from "../../entities/L2Creature";

export default class StatusUpdate extends GameClientPacket {
  static readonly LEVEL: number = 0x01;
  static readonly EXP: number = 0x02;
  static readonly STR: number = 0x03;
  static readonly DEX: number = 0x04;
  static readonly CON: number = 0x05;
  static readonly INT: number = 0x06;
  static readonly WIT: number = 0x07;
  static readonly MEN: number = 0x08;

  static readonly CUR_HP: number = 0x09;
  static readonly MAX_HP: number = 0x0a;
  static readonly CUR_MP: number = 0x0b;
  static readonly MAX_MP: number = 0x0c;

  static readonly SP: number = 0x0d;
  static readonly CUR_LOAD: number = 0x0e;
  static readonly MAX_LOAD: number = 0x0f;

  static readonly P_ATK: number = 0x11;
  static readonly ATK_SPD: number = 0x12;
  static readonly P_DEF: number = 0x13;
  static readonly EVASION: number = 0x14;
  static readonly ACCURACY: number = 0x15;
  static readonly CRITICAL: number = 0x16;
  static readonly M_ATK: number = 0x17;
  static readonly CAST_SPD: number = 0x18;
  static readonly M_DEF: number = 0x19;
  static readonly PVP_FLAG: number = 0x1a;
  static readonly KARMA: number = 0x1b;

  static readonly CUR_CP: number = 0x21;
  static readonly MAX_CP: number = 0x22;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objectId = this.readD();

    const _attributeSize = this.readD();

    const char = this.Client.CreaturesList.getEntryByObjectId(_objectId);

    if (!char) {
      return true;
    }

    for (let i = 0; i < _attributeSize; i++) {
      const status = this.readD();
      const value = this.readD();
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
          char.Hp = value;
          break;
        case StatusUpdate.MAX_HP:
          char.MaxHp = value;
          break;
        case StatusUpdate.CUR_MP:
          char.Mp = value;
          break;
        case StatusUpdate.MAX_MP:
          char.MaxMp = value;
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
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
