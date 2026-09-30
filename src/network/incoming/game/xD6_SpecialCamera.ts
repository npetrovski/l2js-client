import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xd6)
export default class xD6_SpecialCamera extends GameClientPacket {
  private _skyState!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();
    const _force = this.readD();
    const _angle1 = this.readD();
    const _angle2 = this.readD();
    const _time = this.readD();
    const _duration = this.readD();
    const _relYaw = this.readD();
    const _relPitch = this.readD();
    const _isWide = this.readD();
    const _relAngle = this.readD();
    const _unk = this.readD();

    return true;
  }
}
