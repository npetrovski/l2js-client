import { GamePacket } from "@network/PacketRegistry";
import PayloadGameClientPacket from "@network/incoming/game/PayloadGameClientPacket";

@GamePacket(0xa0)
export default class xA0_PrivateStoreManageListSell extends PayloadGameClientPacket {}

