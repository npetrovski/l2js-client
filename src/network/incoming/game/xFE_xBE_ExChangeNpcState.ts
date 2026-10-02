import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xbe)
export default class xFE_xBE_ExChangeNpcState extends PayloadGameClientPacket {}

