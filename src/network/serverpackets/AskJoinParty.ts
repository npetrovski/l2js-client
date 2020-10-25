import GameClientPacket from "./GameClientPacket";
import { PartyDistributionType } from "../../enums/PartyDistributionType";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class AskJoinParty extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _requestorName = this.readS();
    const _partyDistributionType = PartyDistributionType[this.readD()];

    this.logger.info(`${_requestorName} is requesting to join a party of type ${_partyDistributionType}`);

    GlobalEvents.fire(`PartyRequest`, { requestorName: _requestorName, partyDistributionType: _partyDistributionType });
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
