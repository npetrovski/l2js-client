import GameClientPacket from "./GameClientPacket";
import { PartyDistributionType } from "../../../enums/PartyDistributionType";

export default class AskJoinParty extends GameClientPacket {
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
