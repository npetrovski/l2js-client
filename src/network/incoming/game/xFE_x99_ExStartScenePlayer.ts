import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x99)
export default class xFE_x99_ExStartScenePlayer extends PayloadGameClientPacket {}

