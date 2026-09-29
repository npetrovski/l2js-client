import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x1f)
export default class x1F_ActionFailed extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
