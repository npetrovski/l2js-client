import SendablePacket from "../../mmocore/SendablePacket";
import GameClient from "../GameClient";

export default abstract class GameServerPacket extends SendablePacket<GameClient> {
  static readonly PAPERDOLL_UNDER: number = 0;
  static readonly PAPERDOLL_LEAR: number = 1;
  static readonly PAPERDOLL_REAR: number = 2;
  static readonly PAPERDOLL_NECK: number = 3;
  static readonly PAPERDOLL_LFINGER: number = 4;
  static readonly PAPERDOLL_RFINGER: number = 5;
  static readonly PAPERDOLL_HEAD: number = 6;
  static readonly PAPERDOLL_RHAND: number = 7;
  static readonly PAPERDOLL_LHAND: number = 8;
  static readonly PAPERDOLL_GLOVES: number = 9;
  static readonly PAPERDOLL_CHEST: number = 10;
  static readonly PAPERDOLL_LEGS: number = 11;
  static readonly PAPERDOLL_FEET: number = 12;
  static readonly PAPERDOLL_BACK: number = 13;
  static readonly PAPERDOLL_LRHAND: number = 14;
  static readonly PAPERDOLL_HAIR: number = 15;

  static readonly PAPERDOLL_ORDER: number[] = [
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
    GameServerPacket.PAPERDOLL_BACK,
    GameServerPacket.PAPERDOLL_LRHAND,
    GameServerPacket.PAPERDOLL_HAIR
  ];

}
