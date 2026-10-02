import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xa2)
export default class xA2_PrivateStoreMsgSell extends PayloadGameClientPacket {}

