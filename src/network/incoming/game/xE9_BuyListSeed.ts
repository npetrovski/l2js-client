import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xe9)
export default class xE9_BuyListSeed extends PayloadGameClientPacket {}

