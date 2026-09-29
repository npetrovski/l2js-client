import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0xfe, 0x4c)
export default class xFE_x4C_ExDuelAskStart extends GameClientPacket {
  RequestorName: string = "";
  PartyDuel: number = 0;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.RequestorName = this.readS();
    this.PartyDuel = this.readD();

    return true;
  }
}
