import GameClient from "../network/GameClient";
import ValidatePosition from "../network/clientpackets/ValidatePosition";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandValidatePosition extends AbstractGameCommand<GameClient> {
  execute(): void {
    this.Client?.sendPacket(
      new ValidatePosition(
        this.Client.ActiveChar.X,
        this.Client.ActiveChar.Y,
        this.Client.ActiveChar.Z,
        this.Client.ActiveChar.Heading,
        0
      )
    );
  }
}
