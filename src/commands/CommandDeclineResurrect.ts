import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandDeclineResurrect extends AbstractGameCommand {
  execute(): void {
    if (
      typeof this.GameClient?.LastConfirmMessageId !== "undefined" &&
      typeof this.GameClient?.LastConfirmMessageRequesterId !== "undefined"
    ) {
      this.GameClient.sendPacket("DlgAnswer", {
        message: this.GameClient.LastConfirmMessageId,
        accepted: 0,
        requester: this.GameClient.LastConfirmMessageRequesterId,
      });
    }
  }
}
