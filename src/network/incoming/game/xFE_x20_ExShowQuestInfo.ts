import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x20)
export default class xFE_x20_ExShowQuestInfo extends PayloadGameClientPacket {}

