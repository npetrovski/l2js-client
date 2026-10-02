import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xa9)
export default class xFE_xA9_ExNoticePostArrived extends PayloadGameClientPacket {}

