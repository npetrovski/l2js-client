import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xe5)
export default class xE5_HennaInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _int = this.readC();
    const _str = this.readC();
    const _con = this.readC();
    const _men = this.readC();
    const _dex = this.readC();
    const _wit = this.readC();

    const _slots = this.readD(); // 3

    const _hennaEquipListSize = this.readD();

    for (let i = 0; i < _hennaEquipListSize; i++) {
      const _dyeId = this.readD();
      const _unk = this.readD();
    }
    return true;
  }
}
