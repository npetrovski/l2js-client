import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import L2Creature from "../entities/L2Creature";
import L2User from "../entities/L2User";

export default class CommandNextTarget extends AbstractGameCommand<GameClient> {
  execute(): L2Creature {
    const mobs = Array.from(this.Client?.CreaturesList);
    return mobs.reduce(
      (m: L2Creature, p: L2Creature) =>
        !(p instanceof L2User) && p.Distance < m.Distance && !p.IsDead && p.IsAttackable ? p : m,
      mobs[0]
    );
  }
}
