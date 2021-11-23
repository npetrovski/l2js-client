import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandValidatePosition extends AbstractGameCommand {
  execute(): void {
    this.GameClient.sendPacket("ValidatePosition", {
      client_x: this.GameClient.ActiveChar.X,
      client_y: this.GameClient.ActiveChar.Y,
      client_z: this.GameClient.ActiveChar.Z,
      client_yaw: this.GameClient.ActiveChar.Heading,
      vehicle_oid: 0,
    });
  }
}
