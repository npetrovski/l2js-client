import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x62)
export default class xFE_x62_ExChooseInventoryAttributeItem extends PayloadGameClientPacket {}

