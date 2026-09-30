import { GamePacket } from "@network/PacketRegistry";

import AbstractMessagePacket from "@network/incoming/game/AbstractMessagePacket";

@GamePacket(0xf3)
export default class xF3_ConfirmDlg extends AbstractMessagePacket {
  Time!: number;
  RequesterId!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.readMe();

    this.Time = this.readD();
    this.RequesterId = this.readD();

    return true;
  }
}
