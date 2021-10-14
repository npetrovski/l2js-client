import AbstractGameCommand from "./AbstractGameCommand";
import DlgAnswer from "../network/outgoing/game/DlgAnswer";

export default class CommandAcceptResurrect extends AbstractGameCommand {
  execute(): void {
    if (
      typeof this.GameClient?.LastConfirmMessageId !== "undefined" &&
      typeof this.GameClient?.LastConfirmMessageRequesterId !== "undefined"
    ) {
      this.GameClient?.sendPacket(
        new DlgAnswer(
          this.GameClient.LastConfirmMessageId,
          1,
          this.GameClient.LastConfirmMessageRequesterId
        )
      );
    }
  }
}
