import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xa7)
export default class xFE_xA7_ExEnchantSkillResult extends PayloadGameClientPacket {}

