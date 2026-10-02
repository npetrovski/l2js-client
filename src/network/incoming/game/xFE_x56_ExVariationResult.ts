import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x56)
export default class xFE_x56_ExVariationResult extends PayloadGameClientPacket {}

