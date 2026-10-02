import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x31)
export default class xFE_x31_ExMultiPartyCommandChannelInfo extends PayloadGameClientPacket {}

