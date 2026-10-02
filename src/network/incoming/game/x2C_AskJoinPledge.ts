import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0x2c)
export default class x2C_AskJoinPledge extends PayloadGameClientPacket {}

