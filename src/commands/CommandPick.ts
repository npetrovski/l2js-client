import AbstractGameCommand from "./AbstractGameCommand";
import L2Item from "../entities/L2Item";

export default class CommandPick extends AbstractGameCommand {
  execute(item: L2Item): void {
    this.GameClient.sendPacket("Action", {
      target_oid: item.ObjectId,
      current_client_x: item.X,
      current_client_y: item.Y,
      current_client_z: item.Z,
      shift: 0,
    });
  }
}
