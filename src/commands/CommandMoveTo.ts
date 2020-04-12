import AbstractGameCommand from "./AbstractGameCommand";
import GameClient from "../network/GameClient";
import Say2 from "../network/serverpackets/Say2";
import MoveBackwardToLocation from "../network/serverpackets/MoveBackwardToLocation";

export default class CommandMoveTo extends AbstractGameCommand<GameClient> {
  execute(x: number, y: number, z: number): void {
    this.Client?.sendPacket(
      new MoveBackwardToLocation(
        x,
        y,
        z,
        this.Client.ActiveChar.getX(),
        this.Client.ActiveChar.getY(),
        this.Client.ActiveChar.getZ()
      )
    );
  }
}
