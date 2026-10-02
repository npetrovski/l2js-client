import RequestWithDrawalParty from "@network/outgoing/game/x44_RequestWithDrawalParty";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandLeaveParty extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new RequestWithDrawalParty());
  }
}
