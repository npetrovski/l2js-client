import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x41)
export default class x41_WareHouseDepositList extends GameClientPacket {
  static readonly PRIVATE: number = 1;
  static readonly CLAN: number = 4;
  static readonly CASTLE: number = 3; // not sure
  static readonly FREIGHT: number = 1;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _whType = this.readH();
    const _playerAdena = this.readQ();

    const _size = this.readH();

    for (let i = 0; i < _size; i++) {
      const _item = this.readItem();
      const _objId = this.readD();
    }

    return true;
  }
}
