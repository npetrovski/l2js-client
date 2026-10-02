import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xb2)
export default class xFE_xB2_ExReplyPostItemList extends PayloadGameClientPacket {}

