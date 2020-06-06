import GameClient from "../network/GameClient";
import RequestMagicSkillUse from "../network/clientpackets/RequestMagicSkillUse";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCast extends AbstractGameCommand<GameClient> {
  execute(magicSkillId: number, ctrl?: boolean, shift?: boolean): void {
    const forceCtrl = ctrl ?? false;
    const forceShift = shift ?? false;
    this.Client?.sendPacket(new RequestMagicSkillUse(magicSkillId, forceCtrl, forceShift));
  }
}
