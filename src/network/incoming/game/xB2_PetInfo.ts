import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xb2)
export default class xB2_PetInfo extends PayloadGameClientPacket {}

