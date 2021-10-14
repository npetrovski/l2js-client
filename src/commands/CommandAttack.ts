import L2Object from "../entities/L2Object";
import AttackRequest from "../network/outgoing/game/AttackRequest";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandAttack extends AbstractGameCommand {
  execute(object: L2Object | number, shift?: boolean): void {
    if (object instanceof L2Object) {
      object = object.ObjectId;
    }
    const me = this.GameClient?.ActiveChar;
    if (me) {
      const forceShift = shift ?? false;
      this.GameClient?.sendPacket(
        new AttackRequest(object, me.X, me.Y, me.Z, forceShift)
      );
    }
  }
}
