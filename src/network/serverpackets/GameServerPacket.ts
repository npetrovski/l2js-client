import SendablePacket from "../../mmocore/SendablePacket";
import GameClient from "../GameClient";

export default abstract class GameServerPacket extends SendablePacket<GameClient> {
  static readonly PAPERDOLL_UNDER: number = 0;
  static readonly PAPERDOLL_HEAD: number = 1;
  static readonly PAPERDOLL_HAIR: number = 2;
  static readonly PAPERDOLL_HAIR2: number = 3;
  static readonly PAPERDOLL_NECK: number = 4;
  static readonly PAPERDOLL_RHAND: number = 5;
  static readonly PAPERDOLL_CHEST: number = 6;
  static readonly PAPERDOLL_LHAND: number = 7;
  static readonly PAPERDOLL_REAR: number = 8;
  static readonly PAPERDOLL_LEAR: number = 9;
  static readonly PAPERDOLL_GLOVES: number = 10;
  static readonly PAPERDOLL_LEGS: number = 11;
  static readonly PAPERDOLL_FEET: number = 12;
  static readonly PAPERDOLL_RFINGER: number = 13;
  static readonly PAPERDOLL_LFINGER: number = 14;
  static readonly PAPERDOLL_LBRACELET: number = 15;
  static readonly PAPERDOLL_RBRACELET: number = 16;
  static readonly PAPERDOLL_DECO1: number = 17;
  static readonly PAPERDOLL_DECO2: number = 18;
  static readonly PAPERDOLL_DECO3: number = 19;
  static readonly PAPERDOLL_DECO4: number = 20;
  static readonly PAPERDOLL_DECO5: number = 21;
  static readonly PAPERDOLL_DECO6: number = 22;
  static readonly PAPERDOLL_CLOAK: number = 23;
  static readonly PAPERDOLL_BELT: number = 24;
  static readonly PAPERDOLL_TOTALSLOTS: number = 25;

  static readonly PAPERDOLL_ORDER: Array<number> = [
    GameServerPacket.PAPERDOLL_UNDER,
    GameServerPacket.PAPERDOLL_REAR,
    GameServerPacket.PAPERDOLL_LEAR,
    GameServerPacket.PAPERDOLL_NECK,
    GameServerPacket.PAPERDOLL_RFINGER,
    GameServerPacket.PAPERDOLL_LFINGER,
    GameServerPacket.PAPERDOLL_HEAD,
    GameServerPacket.PAPERDOLL_RHAND,
    GameServerPacket.PAPERDOLL_LHAND,
    GameServerPacket.PAPERDOLL_GLOVES,
    GameServerPacket.PAPERDOLL_CHEST,
    GameServerPacket.PAPERDOLL_LEGS,
    GameServerPacket.PAPERDOLL_FEET,
    GameServerPacket.PAPERDOLL_CLOAK,
    GameServerPacket.PAPERDOLL_RHAND,
    GameServerPacket.PAPERDOLL_HAIR,
    GameServerPacket.PAPERDOLL_HAIR2,
    GameServerPacket.PAPERDOLL_RBRACELET,
    GameServerPacket.PAPERDOLL_LBRACELET,
    GameServerPacket.PAPERDOLL_DECO1,
    GameServerPacket.PAPERDOLL_DECO2,
    GameServerPacket.PAPERDOLL_DECO3,
    GameServerPacket.PAPERDOLL_DECO4,
    GameServerPacket.PAPERDOLL_DECO5,
    GameServerPacket.PAPERDOLL_DECO6,
    GameServerPacket.PAPERDOLL_BELT,
  ];
}
