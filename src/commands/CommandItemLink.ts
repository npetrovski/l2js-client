import L2Item from "@entities/L2Item";
import RequestExRqItemLink from "@network/outgoing/game/xD0_x1E_RequestExRqItemLink";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandItemLink extends AbstractGameCommand {
  execute(item: L2Item | number): void {
    const objectId = item instanceof L2Item ? item.ObjectId : item;
    this.GameClient.sendPacket(new RequestExRqItemLink(objectId));
  }
}
