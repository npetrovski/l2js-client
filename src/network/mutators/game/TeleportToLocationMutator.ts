import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import TeleportToLocation from "../../incoming/game/TeleportToLocation";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class TeleportToLocationMutator extends IMMOClientMutator<
  GameClient,
  TeleportToLocation
> {
  update(packet: TeleportToLocation): void {
    if (packet.ObjectId === this.Client.ActiveChar.ObjectId) {
      this.Client.CreaturesList.clear();
      this.Client.DroppedItems.clear();
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(
      packet.ObjectId
    );
    if (creature) {
      const [_x, _y, _z] = packet.Location;
      creature.setLocation(_x, _y, _z);
    }
  }
}
