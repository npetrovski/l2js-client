import RequestWithdrawalPledge from "@network/outgoing/game/x28_RequestWithdrawalPledge";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandLeaveClan extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new RequestWithdrawalPledge());
  }
}
