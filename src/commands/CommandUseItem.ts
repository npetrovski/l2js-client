import AbstractGameCommand from "./AbstractGameCommand";
import L2Item from "../entities/L2Item";

export default class CommandUseItem extends AbstractGameCommand {
  execute(item: L2Item | number): void {
    if (item instanceof L2Item) {
      item = item.ObjectId;
    }

    this.GameClient.sendPacket("RequestUseItem", {
      item_oid: item,
      ctrl_force_attack: 0,
    });
  }
}
