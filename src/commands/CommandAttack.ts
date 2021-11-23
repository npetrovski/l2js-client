import L2Object from "../entities/L2Object";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandAttack extends AbstractGameCommand {
  execute(object: L2Object | number, shift?: boolean): void {
    if (object instanceof L2Object) {
      object = object.ObjectId;
    }
    const me = this.GameClient?.ActiveChar;
    if (me) {
      const forceShift = shift ?? false;

      this.GameClient.sendPacket("AttackRequest", {
        oid: object,
        origin_x: me.X,
        origin_y: me.Y,
        origin_z: me.Z,
        shift: forceShift,
      });
    }
  }
}
