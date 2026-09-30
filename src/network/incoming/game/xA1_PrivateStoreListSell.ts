import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xa1)
export default class xA1_PrivateStoreListSell extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();
    const _packageSale = this.readD();
    const _playerAdena = this.readQ();

    const _len = this.readD();
    for (let i = 0; i < _len; i++) {
      const _item = this.readItem();
      const _price = this.readQ();
      const _referencePrice = this.readQ();
    }

    return true;
  }
}
