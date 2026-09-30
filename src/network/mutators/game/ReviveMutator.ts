import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import Revive from "@network/incoming/game/x01_Revive";

export default class ReviveMutator extends IMMOClientMutator<
  GameClient,
  Revive
> {
  update(packet: Revive): void {
    if (packet.ObjectId === this.Client.ActiveChar.ObjectId) {
      this.Client.ActiveChar.IsDead = false;
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(
      packet.ObjectId
    );
    if (creature) {
      creature.IsDead = false;
    }

    this.fire("Revive", { creature });
  }
}
