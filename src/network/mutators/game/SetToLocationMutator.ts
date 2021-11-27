import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import SetToLocation from "../../incoming/game/SetToLocation";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class SetToLocationMutator extends IMMOClientMutator<
  GameClient,
  SetToLocation
> {
  update(packet: SetToLocation): void {
    if (packet.ObjectId) {
      const creature = this.Client.CreaturesList.getEntryByObjectId(
        packet.ObjectId
      );

      if (creature) {
        const [_x, _y, _z] = packet.Destination;
        creature.setLocation(_x, _y, _z, packet.Heading);

        if (creature.ObjectId !== this.Client.ActiveChar.ObjectId) {
          creature.calculateDistance(this.Client.ActiveChar);
        }

        if (this.Client.ActiveChar.ObjectId == packet.ObjectId) {
          this.Client.ActiveChar.setLocation(_x, _y, _z, packet.Heading);
          console.log("updating self position");
        }
      }
    }
  }
}
