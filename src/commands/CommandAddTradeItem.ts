import L2Item from "@entities/L2Item";
import AddTradeItem from "@network/outgoing/game/x1B_AddTradeItem";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandAddTradeItem extends AbstractGameCommand {
  execute(item: L2Item | number, count?: number): void {
    const objectId = item instanceof L2Item ? item.ObjectId : item;
    const itemCount = count ?? (item instanceof L2Item ? item.Count : 1);
    this.GameClient.sendPacket(new AddTradeItem(1, objectId, itemCount));
  }
}
