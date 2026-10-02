import L2Store from "@entities/L2Store";
import { StoreType } from "@enums/StoreType";
import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import PrivateStoreMsgSell from "@network/incoming/game/xA2_PrivateStoreMsgSell";

export default class PrivateStoreMsgSellMutator extends IMMOClientMutator<GameClient, PrivateStoreMsgSell> {
  update(packet: PrivateStoreMsgSell): void {
    let store = this.Client.PrivateStoreList.getEntryByObjectId(packet.ObjectId);
    if (!store) {
      store = new L2Store();
      store.ObjectId = packet.ObjectId;
      this.Client.PrivateStoreList.add(store);
    }
    store.Owner = this.Client.CreaturesList.getEntryByObjectId(packet.ObjectId);
    store.Message = packet.Message;
    store.Type = StoreType.Sell;
    store.IsPackage = false;
    this.fire("PrivateStore", { store });
  }
}
