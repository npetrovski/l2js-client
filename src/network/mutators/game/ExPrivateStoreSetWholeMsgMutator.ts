import L2Store from "@entities/L2Store";
import { StoreType } from "@enums/StoreType";
import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import ExPrivateStoreSetWholeMsg from "@network/incoming/game/xFE_x80_ExPrivateStoreSetWholeMsg";

export default class ExPrivateStoreSetWholeMsgMutator extends IMMOClientMutator<GameClient, ExPrivateStoreSetWholeMsg> {
  update(packet: ExPrivateStoreSetWholeMsg): void {
    let store = this.Client.PrivateStoreList.getEntryByObjectId(packet.ObjectId);
    if (!store) {
      store = new L2Store();
      store.ObjectId = packet.ObjectId;
      this.Client.PrivateStoreList.add(store);
    }
    store.Owner = this.Client.CreaturesList.getEntryByObjectId(packet.ObjectId);
    store.Message = packet.Message;
    store.Type = StoreType.Sell;
    store.IsPackage = true;
    this.fire("PrivateStore", { store });
  }
}
