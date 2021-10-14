import AbstractGameCommand from "./AbstractGameCommand";
import Action from "../network/outgoing/game/Action";
import L2Object from "../entities/L2Object";

export default class CommandHit extends AbstractGameCommand {
  execute(object: L2Object | number, shift?: boolean): void {
    if (object instanceof L2Object) {
      object = object.ObjectId;
    }
    const me = this.GameClient?.ActiveChar;
    if (me) {
      const forceShift = shift ?? false;
      this.GameClient?.sendPacket(
        new Action(object, me.X, me.Y, me.Z, forceShift)
      );
    }
  }
}
