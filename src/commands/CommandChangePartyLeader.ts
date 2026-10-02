import L2Character from "@entities/L2Character";
import RequestChangePartyLeader from "@network/outgoing/game/xD0_x0C_RequestChangePartyLeader";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandChangePartyLeader extends AbstractGameCommand {
  execute(member?: L2Character | string): void {
    const name = member instanceof L2Character ? member.Name : member ?? this.GameClient.ActiveChar.Target?.Name;
    if (name) {
      this.GameClient.sendPacket(new RequestChangePartyLeader(name));
    }
  }
}
