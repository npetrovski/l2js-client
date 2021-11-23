import L2Buff from "../entities/L2Buff";
import L2Character from "../entities/L2Character";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCancelBuff extends AbstractGameCommand {
  execute(object: L2Character | number, buff: L2Buff | number, skillLevel?: number): void {
    if (object instanceof L2Character) {
      object = object.ObjectId;
    }

    if (buff instanceof L2Buff) {
      skillLevel = buff.SkillLevel;
      buff = buff.Id;
    }
    if (!skillLevel) {
      this.logger.error("Cancel buff error: skill level is required.");
      return;
    }

    this.GameClient.sendPacket("RequestDispel", {
      target_oid: object,
      skill: buff,
      level: skillLevel,
    });
  }
}
