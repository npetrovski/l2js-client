import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import RequestItemList from "../network/clientpackets/RequestItemList";

export default class CommandInventory extends AbstractGameCommand<GameClient> {
  execute(): void {
    this.Client?.sendPacket(new RequestItemList());
  }
}
