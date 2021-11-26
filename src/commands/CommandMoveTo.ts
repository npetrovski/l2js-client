import AbstractGameCommand from "./AbstractGameCommand";
import MoveBackwardToLocation from "../network/outgoing/game/MoveBackwardToLocation";
import ValidatePosition from "../network/outgoing/game/ValidatePosition";

export default class CommandMoveTo extends AbstractGameCommand {
  execute(x: number, y: number, z: number): void {
    const char = this.GameClient?.ActiveChar;
    //TODO check char position and destination and see if we really need to send packet
    if (x === char.X && y === char.Y) {
      return;
    }
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
