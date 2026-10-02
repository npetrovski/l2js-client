import StopMove from "@network/outgoing/game/x47_StopMove";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandStopMove extends AbstractGameCommand {
  execute(): void {
    const character = this.GameClient.ActiveChar;
    this.GameClient.sendPacket(new StopMove(character.X, character.Y, character.Z));
  }
}
