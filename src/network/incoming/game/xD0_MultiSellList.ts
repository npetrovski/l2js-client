import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xd0)
export default class xD0_MultiSellList extends PayloadGameClientPacket {}

