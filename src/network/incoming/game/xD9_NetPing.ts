import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xd9)
export default class xD9_NetPing extends PayloadGameClientPacket {}

