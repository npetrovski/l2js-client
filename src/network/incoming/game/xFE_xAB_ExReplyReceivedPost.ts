import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xab)
export default class xFE_xAB_ExReplyReceivedPost extends PayloadGameClientPacket {}

