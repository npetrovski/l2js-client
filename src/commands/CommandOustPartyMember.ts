import L2Character from "@entities/L2Character";
import RequestOustPartyMember from "@network/outgoing/game/x45_RequestOustPartyMember";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandOustPartyMember extends AbstractGameCommand {
  execute(member?: L2Character | string): void {
    const name = member instanceof L2Character ? member.Name : member ?? this.GameClient.ActiveChar.Target?.Name;
    if (name) {
      this.GameClient.sendPacket(new RequestOustPartyMember(name));
    }
  }
}
