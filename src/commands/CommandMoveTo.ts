import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import MoveBackwardToLocation from "../network/outgoing/game/MoveBackwardToLocation";

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
  }
}
