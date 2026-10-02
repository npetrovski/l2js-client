import L2Character from "@entities/L2Character";
import RequestGiveNickName from "@network/outgoing/game/x0B_RequestGiveNickName";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandGiveNickname extends AbstractGameCommand {
  execute(target: L2Character | string, nickname: string): void {
    const name = target instanceof L2Character ? target.Name : target;
    this.GameClient.sendPacket(new RequestGiveNickName(name, nickname));
  }
}
