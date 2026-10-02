import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x61)
export default class xFE_x61_ExAttributeEnchantResult extends PayloadGameClientPacket {}

