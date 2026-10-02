import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xb4)
export default class xB4_PetInventoryUpdate extends PayloadGameClientPacket {}

