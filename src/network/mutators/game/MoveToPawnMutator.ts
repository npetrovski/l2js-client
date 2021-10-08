import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import MoveToPawn from "../../incoming/game/MoveToPawn";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class MoveToPawnMutator extends IMMOClientMutator<
  GameClient,
  MoveToPawn
> {
  update(packet: MoveToPawn): void {
    if (packet.CharObjId) {
      const creature = this.Client.CreaturesList.getEntryByObjectId(
        packet.CharObjId
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
