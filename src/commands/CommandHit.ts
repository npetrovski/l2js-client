import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import Action from "../network/serverpackets/Action";

export default class CommandHit extends AbstractGameCommand<GameClient> {
  execute(objectId: number, shift?: boolean): void {
    let me = this.Client.ActiveChar;
    let forseShift = shift ?? false;
    this.Client?.sendPacket(new Action(objectId, me.getX(), me.getY(), me.getZ(), forseShift));
  }
}
