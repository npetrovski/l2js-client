import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";
import { PartyDistributionType } from "../../../enums/PartyDistributionType";

@GamePacket(0x39)
export default class x39_AskJoinParty extends GameClientPacket {
  RequestorName: string = "";
  PartyDistributionType?: PartyDistributionType;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.RequestorName = this.readS();
    this.PartyDistributionType = this.readD();

    return true;
  }
}
