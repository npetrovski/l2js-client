import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xfe, 0x39)
export default class xFE_x39_ExShowScreenMessage extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _type = this.readD();
    const _sysMessageId = this.readD();
    const _position = this.readD();
    const _unk1 = this.readD();
    const _size = this.readD();
    const _unk2 = this.readD();
    const _unk3 = this.readD();
    const _effect = this.readD();
    const _time = this.readD();
    const _fade = this.readD();
    const _npcString = this.readD();
    if (_npcString === -1) {
      const _text = this.readS();
    } else {
      const _param1 = this.readS();
    }

    return true;
  }
}
