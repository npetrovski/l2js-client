import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xb6)
export default class xB6_PetStatusUpdate extends PayloadGameClientPacket {}

