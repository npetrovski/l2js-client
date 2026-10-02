import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x12)
export default class xFE_x12_ExOpenMPCC extends PayloadGameClientPacket {}

