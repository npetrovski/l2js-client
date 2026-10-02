import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x82)
export default class xFE_x82_ExPutEnchantSupportItemResult extends PayloadGameClientPacket {}

