import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xd4)
export default class xD4_FlyToLocation extends PayloadGameClientPacket {}

