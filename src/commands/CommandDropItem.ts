import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import MoveBackwardToLocation from "../network/outgoing/game/MoveBackwardToLocation";
import RequestDropItem from "../network/outgoing/game/RequestDropItem";

export default class CommandDropItem extends AbstractGameCommand<GameClient> {
  execute(
    objectId: number,
    count: number,
    x?: number,
    y?: number,
    z?: number
  ): void {
    const xp = x || this.Client.ActiveChar.X;
    const yp = y || this.Client.ActiveChar.Y;
    const zp = z || this.Client.ActiveChar.Z;
    this.Client?.sendPacket(new RequestDropItem(objectId, count, xp, yp, zp));
  }
}
