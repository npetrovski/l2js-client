import L2Item from "@entities/L2Item";
import RequestDestroyItem from "@network/outgoing/game/x60_RequestDestroyItem";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandDestroyItem extends AbstractGameCommand {
  execute(item: L2Item | number, count?: number): void {
    const objectId = item instanceof L2Item ? item.ObjectId : item;
    const itemCount = count ?? (item instanceof L2Item ? item.Count : 1);
    this.GameClient.sendPacket(new RequestDestroyItem(objectId, itemCount));
  }
}
