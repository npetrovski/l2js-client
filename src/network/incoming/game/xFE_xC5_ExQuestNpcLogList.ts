import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xc5)
export default class xFE_xC5_ExQuestNpcLogList extends PayloadGameClientPacket {}

