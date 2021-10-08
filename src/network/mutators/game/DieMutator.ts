import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import Die from "../../incoming/game/Die";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class DieMutator extends IMMOClientMutator<GameClient, Die> {
  update(packet: Die): void {
    const creature = this.Client.CreaturesList.getEntryByObjectId(
      packet.CharObjId
    );
    if (creature) {
      creature.Target = null;
      creature.IsDead = true;
      if (creature.ObjectId === this.Client.ActiveChar.ObjectId) {
        this.Client.BuffsList.clear();
      }

      GlobalEvents.fire("Die", { creature, isSpoiled: packet.Sweepable });
    }
  }
}
