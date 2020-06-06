import L2Item from "../entities/L2Item";
import GameClient from "../network/GameClient";
import RequestAutoSoulShot from "../network/clientpackets/RequestAutoSoulShot";
import AbstractGameCommand from "./AbstractGameCommand";
import { ShotsType } from "../enums/ShotsType";

export default class CommandAutoShots extends AbstractGameCommand<GameClient> {
  execute(item: L2Item | ShotsType | number, enable: boolean): void {
    this.Client?.sendPacket(new RequestAutoSoulShot(item, enable));
  }
}
