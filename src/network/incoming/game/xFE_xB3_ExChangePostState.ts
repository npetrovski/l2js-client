import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0xb3)
export default class xFE_xB3_ExChangePostState extends PayloadGameClientPacket {}

