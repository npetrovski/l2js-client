import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xa0)
export default class xFE_xA0_ExVitalityPointInfo extends PayloadGameClientPacket {}

