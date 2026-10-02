import L2Object from "@entities/L2Object";
import TradeRequest from "@network/outgoing/game/x1A_TradeRequest";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandTradeRequest extends AbstractGameCommand {
  execute(target?: L2Object | number): void {
    const objectId = target instanceof L2Object ? target.ObjectId : target ?? this.GameClient.ActiveChar.Target?.ObjectId;
    if (objectId !== undefined) {
      this.GameClient.sendPacket(new TradeRequest(objectId));
    }
  }
}
