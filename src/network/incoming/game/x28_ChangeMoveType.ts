import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x28)
export default class x28_ChangeMoveType extends GameClientPacket {
  static readonly WALK: number = 0;
  static readonly RUN: number = 1;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjId = this.readD();
    const _running = this.readD() === x28_ChangeMoveType.RUN;
    const _pad1 = this.readD();

    return true;
  }
}
