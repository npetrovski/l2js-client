import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x18)
export default class xFE_x18_ExPartyPetWindowAdd extends PayloadGameClientPacket {}

