import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xe8)
export default class xE8_SendMacroList extends PayloadGameClientPacket {}

