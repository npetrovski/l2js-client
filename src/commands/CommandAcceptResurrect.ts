import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import DlgAnswer from "../network/outgoing/game/DlgAnswer";

export default class CommandAcceptResurrect extends AbstractGameCommand<
  GameClient
> {
  execute(): void {
    if (
      typeof this.Client?.LastConfirmMessageId != "undefined" &&
      typeof this.Client?.LastConfirmMessageRequesterId != "undefined"
    ) {
      this.Client?.sendPacket(
        new DlgAnswer(
          this.Client.LastConfirmMessageId,
          1,
          this.Client.LastConfirmMessageRequesterId
        )
      );
    }
  }
}
