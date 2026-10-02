import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x6a)
export default class xFE_x6A_ExPartyPetWindowDelete extends PayloadGameClientPacket {}

