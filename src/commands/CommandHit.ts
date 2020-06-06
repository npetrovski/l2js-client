import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import Action from "../network/clientpackets/Action";
import L2Object from "../entities/L2Object";

export default class CommandHit extends AbstractGameCommand<GameClient> {
  execute(object: L2Object | number, shift?: boolean): void {
    if (object instanceof L2Object) {
      object = object.ObjectId;
    }
    const me = this.Client.ActiveChar;
    const forceShift = shift ?? false;
    this.Client?.sendPacket(new Action(object, me.X, me.Y, me.Z, forceShift));
  }
}
