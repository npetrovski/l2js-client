import L2Item from "@entities/L2Item";
import ReqCrystallizeItem from "@network/outgoing/game/x2F_ReqCrystallizeItem";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCrystallizeItem extends AbstractGameCommand {
  execute(item: L2Item | number): void {
    const objectId = item instanceof L2Item ? item.ObjectId : item;
    this.GameClient.sendPacket(new ReqCrystallizeItem(objectId));
  }
}
