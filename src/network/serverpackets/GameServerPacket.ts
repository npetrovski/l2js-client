import SendablePacket from "../../mmocore/SendablePacket";
import GameClient from "../GameClient";
import Inventory from "../../model/itemcontainer/Inventory";

export default abstract class GameServerPacket extends SendablePacket<GameClient> {
  static readonly PAPERDOLL_ORDER: Array<number> = [
    Inventory.PAPERDOLL_UNDER,
    Inventory.PAPERDOLL_REAR,
    Inventory.PAPERDOLL_LEAR,
    Inventory.PAPERDOLL_NECK,
    Inventory.PAPERDOLL_RFINGER,
    Inventory.PAPERDOLL_LFINGER,
    Inventory.PAPERDOLL_HEAD,
    Inventory.PAPERDOLL_RHAND,
    Inventory.PAPERDOLL_LHAND,
    Inventory.PAPERDOLL_GLOVES,
    Inventory.PAPERDOLL_CHEST,
    Inventory.PAPERDOLL_LEGS,
    Inventory.PAPERDOLL_FEET,
    Inventory.PAPERDOLL_CLOAK,
    Inventory.PAPERDOLL_RHAND,
    Inventory.PAPERDOLL_HAIR,
    Inventory.PAPERDOLL_HAIR2,
    Inventory.PAPERDOLL_RBRACELET,
    Inventory.PAPERDOLL_LBRACELET,
    Inventory.PAPERDOLL_DECO1,
    Inventory.PAPERDOLL_DECO2,
    Inventory.PAPERDOLL_DECO3,
    Inventory.PAPERDOLL_DECO4,
    Inventory.PAPERDOLL_DECO5,
    Inventory.PAPERDOLL_DECO6,
    Inventory.PAPERDOLL_BELT,
  ];
}
