import L2Item from "../entities/L2Item";
import RequestAutoSoulShot from "../network/outgoing/game/RequestAutoSoulShot";
import AbstractGameCommand from "./AbstractGameCommand";
import { ShotsType } from "../enums/ShotsType";

export default class CommandAutoShots extends AbstractGameCommand {
  execute(item: L2Item | ShotsType | number, enable: boolean): void {
    this.GameClient?.sendPacket(new RequestAutoSoulShot(item, enable));
  }
}
