import GameClientPacket from "./GameClientPacket";
import { PartyDistributionType } from "../../enums/PartyDistributionType";

export default class AskJoinParty extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _requestorName = this.readS();
    const _partyDistributionType = PartyDistributionType[this.readD()];

    console.log(`${_requestorName} is requesting to join a party of type ${_partyDistributionType}`);
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
