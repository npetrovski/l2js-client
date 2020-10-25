import GameClientPacket from "./GameClientPacket";

export default abstract class AbstractMessagePacket<T extends AbstractMessagePacket<any>> extends GameClientPacket {
  // 15 exists in goddess of destruction but also may works in h5 needs to be verified!
  // private static final byte TYPE_CLASS_ID = 15;
  // id 14 unknown
  static readonly TYPE_SYSTEM_STRING: number = 13;
  static readonly TYPE_PLAYER_NAME: number = 12;
  static readonly TYPE_DOOR_NAME: number = 11;
  static readonly TYPE_INSTANCE_NAME: number = 10;
  static readonly TYPE_ELEMENT_NAME: number = 9;
  // id 8 - same as 3
  static readonly TYPE_ZONE_NAME: number = 7;
  static readonly TYPE_LONG_NUMBER: number = 6;
  static readonly TYPE_CASTLE_NAME: number = 5;
  static readonly TYPE_SKILL_NAME: number = 4;
  static readonly TYPE_ITEM_NAME: number = 3;
  static readonly TYPE_NPC_NAME: number = 2;
  static readonly TYPE_INT_NUMBER: number = 1;
  static readonly TYPE_TEXT: number = 0;

  readMe(): void {
    const _id = this.readC();
    const _messageId = this.readD();
    const _paramsLength = this.readD();
    const _params = [];
    for (let i = 0; i < _paramsLength; i++) {
      const _paramType = this.readD();
      switch (_paramType) {
        case AbstractMessagePacket.TYPE_TEXT:
        case AbstractMessagePacket.TYPE_PLAYER_NAME:
          _params.push(this.readS());
          break;

        case AbstractMessagePacket.TYPE_LONG_NUMBER:
          _params.push(this.readQ());
          break;

        case AbstractMessagePacket.TYPE_ITEM_NAME:
        case AbstractMessagePacket.TYPE_CASTLE_NAME:
        case AbstractMessagePacket.TYPE_INT_NUMBER:
        case AbstractMessagePacket.TYPE_NPC_NAME:
        case AbstractMessagePacket.TYPE_ELEMENT_NAME:
        case AbstractMessagePacket.TYPE_SYSTEM_STRING:
        case AbstractMessagePacket.TYPE_INSTANCE_NAME:
        case AbstractMessagePacket.TYPE_DOOR_NAME:
          _params.push(this.readD());
          break;

        case AbstractMessagePacket.TYPE_SKILL_NAME:
          _params.push([/** SkillId*/ this.readD(), /** SkillLevel */ this.readD()]);
          break;

        case AbstractMessagePacket.TYPE_ZONE_NAME:
          _params.push([/** x*/ this.readD(), /** y */ this.readD(), /** z */ this.readD()]);
          break;
        default:
          this.logger.warn("Unknown message packet type: " + _paramType.toString(16));
          return;
      }
    }

    this.logger.info(`System msg #${_messageId}`, _params);
  }
}
