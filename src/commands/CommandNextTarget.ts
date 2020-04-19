import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import L2Creature from "../entities/L2Creature";

export default class CommandNextTarget extends AbstractGameCommand<GameClient> {
  execute(): L2Creature {
    var mobs = Array.from(this.Client?.CreaturesList);
    return mobs.reduce(
      (m: L2Creature, p: L2Creature) => (p.Distance < m.Distance && !p.IsDead && p.IsAttackable ? p : m),
      mobs[0]
    );
  }
}
