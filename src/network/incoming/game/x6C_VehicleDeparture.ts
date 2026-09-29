import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x6c)
export default class x6C_VehicleDeparture extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();
    const _moveSpeed = this.readD();
    const _rotationSpeed = this.readD();
    const [_x, _y, _z] = this.readLoc();

    return true;
  }
}
