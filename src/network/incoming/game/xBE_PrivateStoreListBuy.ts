import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xbe)
export default class xBE_PrivateStoreListBuy extends PayloadGameClientPacket {}

