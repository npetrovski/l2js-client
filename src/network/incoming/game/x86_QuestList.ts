import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0x86)
export default class x86_QuestList extends PayloadGameClientPacket {}

