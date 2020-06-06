import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";

import UseItem from "../network/clientpackets/UseItem";
import L2Item from "../entities/L2Item";

export default class CommandUseItem extends AbstractGameCommand<GameClient> {
  execute(item: L2Item | number): void {
    if (item instanceof L2Item) {
      item = item.ObjectId;
    }
    this.Client?.sendPacket(new UseItem(item, false));
  }
}
