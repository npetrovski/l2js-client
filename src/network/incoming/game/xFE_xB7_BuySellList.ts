import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xb7)
export default class xFE_xB7_BuySellList extends PayloadGameClientPacket {}

