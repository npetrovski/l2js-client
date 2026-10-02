import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x58)
export default class xFE_x58_ExVariationCancelResult extends PayloadGameClientPacket {}

