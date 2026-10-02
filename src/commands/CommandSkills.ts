import RequestSkillList from "@network/outgoing/game/x50_RequestSkillList";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandSkills extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket(new RequestSkillList());
  }
}
