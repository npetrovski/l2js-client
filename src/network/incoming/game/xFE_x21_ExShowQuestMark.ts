import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x21)
export default class xFE_x21_ExShowQuestMark extends PayloadGameClientPacket {}

