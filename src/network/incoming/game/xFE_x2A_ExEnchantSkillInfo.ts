import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x2a)
export default class xFE_x2A_ExEnchantSkillInfo extends PayloadGameClientPacket {}

