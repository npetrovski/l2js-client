import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import TeleportToLocation from "@network/incoming/game/x22_TeleportToLocation";

export default class TeleportToLocationMutator extends IMMOClientMutator<GameClient, TeleportToLocation> {
  update(packet: TeleportToLocation): void {
    if (packet.ObjectId === this.Client.ActiveChar.ObjectId) {
      this.Client.CreaturesList.clear();
      this.Client.DroppedItems.clear();
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(packet.ObjectId);
    if (creature) {
      const [_x, _y, _z] = packet.Location;
      creature.Location = [_x, _y, _z];
    }
  }
}
