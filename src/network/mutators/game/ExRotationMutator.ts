import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import ExRotation from "../../incoming/game/ExRotation";

export default class ExRotationMutator extends IMMOClientMutator<
  GameClient,
  ExRotation
> {
  update(packet: ExRotation): void {
    const char = this.Client.CreaturesList.getEntryByObjectId(
      packet.CharObjectId
    );
    if (char) {
      char.Heading = packet.Heading;
    }
  }
}
