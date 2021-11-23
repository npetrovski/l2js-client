import AbstractGameCommand from "./AbstractGameCommand";
import L2Object from "../entities/L2Object";

export default class CommandHit extends AbstractGameCommand {
  execute(object: L2Object | number, shift?: boolean): void {
    if (object instanceof L2Object) {
      object = object.ObjectId;
    }
    const me = this.GameClient?.ActiveChar;
    if (me) {
      const forceShift = shift ?? false;

      this.GameClient.sendPacket("Action", {
        target_oid: object,
        current_client_x: me.X,
        current_client_y: me.Y,
        current_client_z: me.Z,
        shift: forceShift ? 1 : 0,
      });
    }
  }
}
