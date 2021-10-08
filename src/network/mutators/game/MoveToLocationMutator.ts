import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import MoveToLocation from "../../incoming/game/MoveToLocation";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class MoveToLocationMutator extends IMMOClientMutator<
  GameClient,
  MoveToLocation
> {
  update(packet: MoveToLocation): void {
    if (packet.ObjectId) {
      const creature = this.Client.CreaturesList.getEntryByObjectId(
        packet.ObjectId
      );

      if (creature) {
        const [_x, _y, _z] = packet.Location;
        const [_xDst, _yDst, _zDst] = packet.Destination;
        creature.setMovingTo(_x, _y, _z, _xDst, _yDst, _zDst);

        if (creature.ObjectId !== this.Client.ActiveChar.ObjectId) {
          creature.calculateDistance(this.Client.ActiveChar);
        }
      }
    }
  }
}
