import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x81)
export default class xFE_x81_ExPutEnchantTargetItemResult extends PayloadGameClientPacket {}

