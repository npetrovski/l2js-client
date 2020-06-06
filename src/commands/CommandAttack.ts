import L2Object from "../entities/L2Object";
import GameClient from "../network/GameClient";
import AttackRequest from "../network/clientpackets/AttackRequest";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandAttack extends AbstractGameCommand<GameClient> {
  execute(object: L2Object | number, shift?: boolean): void {
    if (object instanceof L2Object) {
      object = object.ObjectId;
    }
    const me = this.Client.ActiveChar;
    const forceShift = shift ?? false;
    this.Client?.sendPacket(new AttackRequest(object, me.X, me.Y, me.Z, forceShift));
  }
}
