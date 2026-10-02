import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xbd)
export default class xBD_PrivateStoreManageListBuy extends PayloadGameClientPacket {}

