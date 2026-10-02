import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xaa)
export default class xFE_xAA_ExShowReceivedPostList extends PayloadGameClientPacket {}

