import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandMoveTo extends AbstractGameCommand {
  execute(x: number, y: number, z: number): void {
    const char = this.GameClient?.ActiveChar;

    if (char) {
      this.GameClient.sendPacket("MoveBackwardToLocation", {
        destination_x: x,
        destination_y: y,
        destination_z: z,
        current_client_x: char.X,
        current_client_y: char.Y,
        current_client_z: char.Z,
      });

      // this.GameClient.sendPacket("ValidatePosition", {
      //   client_x: char.X,
      //   client_y: char.Y,
      //   client_z: char.Z,
      //   client_yaw: char.Heading,
      //   vehicle_oid: 0,
      // });
    }
  }
}
