import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0x87)
export default class x87_EnchantResult extends PayloadGameClientPacket {}

