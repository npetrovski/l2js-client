import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import L2Creature from "../entities/L2Creature";
import Action from "../network/clientpackets/Action";

export default class CommandNextTarget extends AbstractGameCommand<GameClient> {
  execute(): L2Creature | undefined {
    let mobs = Array.from(this.Client.CreaturesList);
    const me = this.Client.ActiveChar;

    mobs = mobs.filter(
      (p: L2Creature) => me.ObjectId !== p.ObjectId && me.Target?.ObjectId !== p.ObjectId && !p.IsDead && p.IsAttackable
    );
    const result = mobs.reduce((m: L2Creature, p: L2Creature) => (p.Distance < m.Distance ? p : m), mobs[0]);
    if (result) {
      this.Client?.sendPacket(new Action(result.ObjectId, me.X, me.Y, me.Z, false));
      return result;
    }
  }
}
