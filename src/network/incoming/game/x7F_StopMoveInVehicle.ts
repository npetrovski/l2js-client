import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x7f)
export default class x7F_StopMoveInVehicle extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _boatId = this.readD();
    const [_x, _y, _z] = this.readLoc();

    const _heading = this.readD();

    return true;
  }
}
