import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x0c)
export default class xFE_x0C_ExAutoSoulShot extends PayloadGameClientPacket {}

