import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xfe, 0x80)
export default class xFE_x80_ExPrivateStoreSetWholeMsg extends PayloadGameClientPacket {}

