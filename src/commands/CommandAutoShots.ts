import L2Item from "../entities/L2Item";
import AbstractGameCommand from "./AbstractGameCommand";
import { ShotsType } from "../enums/ShotsType";

export default class CommandAutoShots extends AbstractGameCommand {
  execute(item: L2Item | ShotsType | number, enable: boolean): void {
    let shotId = 0;
    if (item instanceof L2Item) {
      shotId = item.Id;
    } else {
      shotId = item;
    }

    this.GameClient.sendPacket("RequestAutoSoulShot", {
      shot: shotId,
      enable: enable ? 1 : 0,
    });
  }
}
