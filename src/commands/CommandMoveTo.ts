import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import MoveBackwardToLocation from "../network/outgoing/game/MoveBackwardToLocation";
import ValidatePosition from "../network/outgoing/game/ValidatePosition";

export default class CommandMoveTo extends AbstractGameCommand<GameClient> {
  execute(x: number, y: number, z: number): void {
    this.Client?.sendPacket(
      new MoveBackwardToLocation(
        x,
        y,
        z,
        this.Client.ActiveChar.X,
        this.Client.ActiveChar.Y,
        this.Client.ActiveChar.Z
      )
    );

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
