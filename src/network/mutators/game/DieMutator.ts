import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import Die from "@network/incoming/game/x00_Die";

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

      this.fire("Die", { creature, isSpoiled: packet.Sweepable });
    }
  }
}
