import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0x7c)
export default class x7C_ChooseInventoryItem extends PayloadGameClientPacket {}

