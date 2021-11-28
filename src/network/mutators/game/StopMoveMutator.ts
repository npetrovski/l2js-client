import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import StopMove from "../../incoming/game/StopMove";

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
      if (this.Client.ActiveChar.ObjectId !== packet.ObjectId) {
        creature.calculateDistance(this.Client.ActiveChar);
      }
      creature.IsMoving = false;

      if (this.Client.ActiveChar.ObjectId == packet.ObjectId) {
        this.Client.ActiveChar.setLocation(_x, _y, _z, packet.Heading);
        console.log("updating self position");
      }
    }
  }
}
