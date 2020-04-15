import GameClientPacket from "./GameClientPacket";
import L2Npc from "../../model/actor/L2Npc";
import L2Object from "../../model/L2Object";
import L2Character from "../../model/actor/L2Character";
import L2PcInstance from "../../model/actor/instance/L2PcInstance";

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

  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _objectId = this.readD();

    let _attributeSize = this.readD();

    var char!: L2Character | undefined;
    if (this.Client.ActiveChar.getObjectId() === _objectId) {
      char = this.Client.ActiveChar;
    } else {
      char = this.Client.CreaturesList.getEntryByObjectId(_objectId);
    }

    if (!char) {
      return true;
    }

    for (var i = 0; i < _attributeSize; i++) {
      let status = this.readD();
      let value = this.readD();
      switch (status) {
        case StatusUpdate.LEVEL:
          char.getStat().setLevel(value);
          break;
        case StatusUpdate.EXP:
          if (char instanceof L2PcInstance) {
            char.getStat().setExp(value);
          }
          break;
        case StatusUpdate.STR:
          char.getStat().setSTR(value);
          break;
        case StatusUpdate.DEX:
          char.getStat().setDEX(value);
          break;
        case StatusUpdate.CON:
          char.getStat().setCON(value);
          break;
        case StatusUpdate.INT:
          char.getStat().setINT(value);
          break;
        case StatusUpdate.WIT:
          char.getStat().setWIT(value);
          break;
        case StatusUpdate.MEN:
          char.getStat().setMEN(value);
          break;
        case StatusUpdate.CUR_HP:
          char.getStatus().setCurrentHp(value);
          break;
        case StatusUpdate.MAX_HP:
          char.getStat().setMaxHp(value);
          break;
        case StatusUpdate.CUR_MP:
          char.getStatus().setCurrentMp(value);
          break;
        case StatusUpdate.MAX_MP:
          char.getStat().setMaxMp(value);
          break;
        case StatusUpdate.SP:
          if (char instanceof L2PcInstance) {
            char.getStat().setSp(value);
          }
          break;
        case StatusUpdate.CUR_LOAD:
          // todo
          break;
        case StatusUpdate.MAX_LOAD:
          //todo
          break;
        case StatusUpdate.P_ATK:
          char.getStat().setPAtk(value);
          break;
        case StatusUpdate.ATK_SPD:
          char.getStat().setPAtkSpd(value);
          break;
        case StatusUpdate.P_DEF:
          char.getStat().setPDef(value);
          break;
        case StatusUpdate.EVASION:
          char.getStat().setEvasionRate(value);
          break;
        case StatusUpdate.ACCURACY:
          char.getStat().setAccuracy(value);
          break;
        case StatusUpdate.CRITICAL:
          char.getStat().setCriticalHit(value);
          break;
        case StatusUpdate.M_ATK:
          char.getStat().setMAtk(value);
          break;
        case StatusUpdate.CAST_SPD:
          char.getStat().setMAtkSpd(value);
          break;
        case StatusUpdate.M_DEF:
          char.getStat().setMDef(value);
          break;
        case StatusUpdate.PVP_FLAG:
          //todo
          break;
        case StatusUpdate.KARMA:
          //todo
          break;
        case StatusUpdate.CUR_CP:
          //todo
          break;
        case StatusUpdate.MAX_CP:
          //todo
          break;
      }
    }

    return true;
  }

  //@Override
  run(): void {}
}
