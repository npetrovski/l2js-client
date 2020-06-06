import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import Say2 from "../network/clientpackets/Say2";
import MoveBackwardToLocation from "../network/clientpackets/MoveBackwardToLocation";

export default class CommandMoveTo extends AbstractGameCommand<GameClient> {
  execute(x: number, y: number, z: number): void {
    this.Client?.sendPacket(
      new MoveBackwardToLocation(x, y, z, this.Client.ActiveChar.X, this.Client.ActiveChar.Y, this.Client.ActiveChar.Z)
    );
  }
}
