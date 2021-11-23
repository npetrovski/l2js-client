import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCancelTarget extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket("RequestTargetCancel");
  }
}
