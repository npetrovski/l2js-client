import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xb3)
export default class xB3_PetItemList extends PayloadGameClientPacket {}

