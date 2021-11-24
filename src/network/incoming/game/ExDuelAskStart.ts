import GameClientPacket from "./GameClientPacket";

export default class ExDuelAskStart extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _requestorName = this.readS();
    const _partyDuel = this.readD();

    // TODO: Trigger from mutator
    // GlobalEvents.fire("RequestedDuel", { requestorName: _requestorName });

    return true;
  }
}
