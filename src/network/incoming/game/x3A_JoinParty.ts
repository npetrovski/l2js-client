import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x3a)
export default class x3A_JoinParty extends GameClientPacket {
  private _response = 0;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this._response = this.readD();

    return true;
  }
}
