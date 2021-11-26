import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import ValidateLocation from "../../incoming/game/ValidateLocation";

export default class ValidateLocationMutator extends IMMOClientMutator<
  GameClient,
  ValidateLocation
> {
  update(packet: ValidateLocation): void {
    const creature = this.Client.CreaturesList.getEntryByObjectId(
      packet.ObjectId
    );
    if (creature) {
      const [_x, _y, _z] = packet.Location;
      creature.setLocation(_x, _y, _z, packet.Heading);

      if (this.Client.ActiveChar.ObjectId == packet.ObjectId) {
        this.Client.ActiveChar.setLocation(_x, _y, _z, packet.Heading);
        console.log("updating self position");
      }
      
    }
  }
}
