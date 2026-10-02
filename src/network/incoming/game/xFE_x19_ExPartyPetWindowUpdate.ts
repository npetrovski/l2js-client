import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x19)
export default class xFE_x19_ExPartyPetWindowUpdate extends PayloadGameClientPacket {}

