import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x27)
export default class x27_SocialAction extends GameClientPacket {
  static readonly LEVEL_UP: number = 2122;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _actionId = this.readD();

    return true;
  }
}
