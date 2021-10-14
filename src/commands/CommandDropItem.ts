import AbstractGameCommand from "./AbstractGameCommand";
import RequestDropItem from "../network/outgoing/game/RequestDropItem";

export default class CommandDropItem extends AbstractGameCommand {
  execute(
    objectId: number,
    count: number,
    x?: number,
    y?: number,
    z?: number
  ): void {
    const char = this.GameClient?.ActiveChar;
    if (char) {
      const xp = x || char.X;
      const yp = y || char.Y;
      const zp = z || char.Z;

      this.GameClient?.sendPacket(
        new RequestDropItem(objectId, count, xp, yp, zp)
      );
    }
  }
}
