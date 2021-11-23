import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandInventory extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket("RequestItemList");
  }
}
