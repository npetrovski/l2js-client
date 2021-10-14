import RequestMagicSkillUse from "../network/outgoing/game/RequestMagicSkillUse";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCast extends AbstractGameCommand {
  execute(magicSkillId: number, ctrl?: boolean, shift?: boolean): void {
    const forceCtrl = ctrl ?? false;
    const forceShift = shift ?? false;
    this.GameClient?.sendPacket(
      new RequestMagicSkillUse(magicSkillId, forceCtrl, forceShift)
    );
  }
}
