import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x75)
export default class xFE_x75_ExBaseAttributeCancelResult extends PayloadGameClientPacket {}

