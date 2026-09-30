import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x6d)
export default class x6D_VehicleCheckLocation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();
    const [_x, _y, _z] = this.readLoc();
    const _heading = this.readD();

    return true;
  }
}
