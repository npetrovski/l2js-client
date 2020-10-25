import GameServerPacket from "./GameServerPacket";
import L2Item from "../../entities/L2Item";
import { ShotsType } from "../../enums/ShotsType";

export default class RequestAutoSoulShot extends GameServerPacket {
  private _shotItemId: number;

  private _enabled: boolean;

  constructor(shot: L2Item | ShotsType | number, enabled: boolean) {
    super();
    if (shot instanceof L2Item) {
      this._shotItemId = shot.Id;
    } else {
      this._shotItemId = shot;
    }

    if (!ShotsType[this._shotItemId]) {
      this.logger.error("Invalid shot item Id");
    }

    this._enabled = enabled;
  }

  write(): void {
    this.writeC(0xd0);
    this.writeH(0x0d);
    this.writeD(this._shotItemId);
    this.writeD(this._enabled ? 1 : 0);
  }
}
