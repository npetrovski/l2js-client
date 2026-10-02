import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0x2d)
export default class x2D_JoinPledge extends PayloadGameClientPacket {}

