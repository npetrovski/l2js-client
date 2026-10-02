import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x1a)
export default class xFE_x1A_ExAskJoinMPCC extends PayloadGameClientPacket {}

