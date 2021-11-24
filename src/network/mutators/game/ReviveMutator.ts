import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import Revive from "../../incoming/game/Revive";


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
