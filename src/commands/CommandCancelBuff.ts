import L2Buff from "../entities/L2Buff";
import L2Character from "../entities/L2Character";
import GameClient from "../network/GameClient";
import RequestDispel from "../network/clientpackets/RequestDispel";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCancelBuff extends AbstractGameCommand<GameClient> {
  execute(object: L2Character | number, buff: L2Buff | number, level?: number): void {
    if (object instanceof L2Character) {
      object = object.ObjectId;
    }

    if (buff instanceof L2Buff) {
      level = buff.SkillLevel;
      buff = buff.Id;
    }
    if (!level) {
      this.logger.error("Cancel buff error: skill level is required.");
      return;
    }

    this.Client?.sendPacket(new RequestDispel(object, buff, level));
  }
}
