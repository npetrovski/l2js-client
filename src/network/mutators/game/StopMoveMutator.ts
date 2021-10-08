import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import StopMove from "../../incoming/game/StopMove";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class StopMoveMutator extends IMMOClientMutator<
  GameClient,
  StopMove
> {
  update(packet: StopMove): void {
    const creature = this.Client.CreaturesList.getEntryByObjectId(
      packet.ObjectId
    );
    if (creature) {
      const [_x, _y, _z] = packet.Location;
      creature.setLocation(_x, _y, _z, packet.Heading);
      creature.calculateDistance(this.Client.ActiveChar);
      creature.IsMoving = false;
    }
  }
}
