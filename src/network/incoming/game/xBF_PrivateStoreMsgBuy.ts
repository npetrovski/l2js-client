import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xbf)
export default class xBF_PrivateStoreMsgBuy extends PayloadGameClientPacket {}

