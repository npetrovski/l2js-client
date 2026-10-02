import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xf1)
export default class xF1_RadarControl extends PayloadGameClientPacket {}

