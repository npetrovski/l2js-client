import ValidatePosition from "../network/outgoing/game/ValidatePosition";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandValidatePosition extends AbstractGameCommand {
  execute(): void {
    this.GameClient?.sendPacket(
      new ValidatePosition(
        this.GameClient.ActiveChar.X,
        this.GameClient.ActiveChar.Y,
        this.GameClient.ActiveChar.Z,
        this.GameClient.ActiveChar.Heading,
        0
      )
    );
  }
}
