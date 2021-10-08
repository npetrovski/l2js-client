import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import InventoryUpdate from "../../incoming/game/InventoryUpdate";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class InventoryUpdateMutator extends IMMOClientMutator<
  GameClient,
  InventoryUpdate
> {
  update(packet: InventoryUpdate): void {
    packet.Items.forEach(item => {
      const currentItem = this.Client.InventoryItems.getEntryById(item.Id);
      if (currentItem) {
        this.Client.InventoryItems.delete(currentItem);
      }

      this.Client.InventoryItems.add(item);
    });
  }
}
