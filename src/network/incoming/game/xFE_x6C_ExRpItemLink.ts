import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x6c)
export default class xFE_x6C_ExRpItemLink extends PayloadGameClientPacket {}

