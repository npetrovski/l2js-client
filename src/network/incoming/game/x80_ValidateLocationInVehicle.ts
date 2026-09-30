import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x80)
export default class x80_ValidateLocationInVehicle extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjId = this.readD();
    const _boatObjId = this.readD();

    const [_x, _y, _z] = this.readLoc();
    const _heading = this.readD();

    return true;
  }
}
