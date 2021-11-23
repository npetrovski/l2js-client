import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandCast extends AbstractGameCommand {
  execute(magicSkillId: number, ctrl = false, shift = false): void {
    this.GameClient.sendPacket("RequestMagicSkillUse", {
      skill: magicSkillId,
      ctrl_force_attack: ctrl ? 1 : 0,
      shift: shift ? 1 : 0,
    });
  }
}
