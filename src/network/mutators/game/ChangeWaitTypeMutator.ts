import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import ChangeWaitType from "../../incoming/game/ChangeWaitType";
import L2Character from "../../../entities/L2Character";

export default class ChangeWaitTypeMutator extends IMMOClientMutator<GameClient, ChangeWaitType> {
  update(packet: ChangeWaitType): void {
    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.ObjectId);
    if (creature && creature instanceof L2Character) {
      const [_x, _y, _z] = packet.Location;
      creature.Location = [_x, _y, _z];
      creature.IsSitting = packet.MoveType === 0; // 0 - sitting; 1 - standing; 2 - start fake dead; 3 - stop fake dead
    }
  }
}
