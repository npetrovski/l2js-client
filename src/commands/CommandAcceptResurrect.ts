import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandAcceptResurrect extends AbstractGameCommand {
  execute(): void {
    if (
      typeof this.GameClient?.LastConfirmMessageId !== "undefined" &&
      typeof this.GameClient?.LastConfirmMessageRequesterId !== "undefined"
    ) {
      this.GameClient.sendPacket("DlgAnswer", {
        message: this.GameClient.LastConfirmMessageId,
        accepted: 1,
        requester: this.GameClient.LastConfirmMessageRequesterId,
      });
    }
  }
}
