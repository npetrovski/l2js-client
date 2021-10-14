import AbstractGameCommand from "./AbstractGameCommand";
import RequestItemList from "../network/outgoing/game/RequestItemList";

export default class CommandInventory extends AbstractGameCommand {
  execute(): void {
    this.GameClient?.sendPacket(new RequestItemList());
  }
}
