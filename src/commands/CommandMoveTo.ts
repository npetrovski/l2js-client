import AbstractGameCommand from "./AbstractGameCommand";
import MoveBackwardToLocation from "@network/outgoing/game/x0F_MoveBackwardToLocation";
import ValidatePosition from "@network/outgoing/game/x59_ValidatePosition";

export default class CommandMoveTo extends AbstractGameCommand {
  execute(x: number, y: number, z: number): void {
    const char = this.GameClient?.ActiveChar;

    if (char) {
      this.GameClient?.sendPacket(
        new MoveBackwardToLocation(x, y, z, char.X, char.Y, char.Z)
      );

      this.GameClient?.sendPacket(
        new ValidatePosition(char.X, char.Y, char.Z, char.Heading, 0)
      );
    }
  }
}
