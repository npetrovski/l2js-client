import L2Server from "../../../entities/L2Server";
import LoginClientPacket from "./LoginClientPacket";

export default class ServerList extends LoginClientPacket {
  Servers: L2Server[] = [];

  LastServerId = 0;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _size = this.readC();
    this.LastServerId = this.readC();

    for (let i = 0; i < _size; i++) {
      const server = new L2Server();
      server.Id = this.readC();
      server.Ip = this.readD();
      server.Port = this.readD();
      server.AgeLimit = this.readC();
      server.Pvp = this.readC();
      server.CurrentPlayers = this.readH();
      server.MaxPlayers = this.readH();
      server.Status = this.readC();
      server.ServerType = this.readD();
      server.Brackets = this.readC();

      this.Servers.push(server);
    }

    const _unkn = this.readH();

    this.Servers.forEach((server) => {
      this.logger.info("Server " + server.Id + " " + server.ServerType + " " + server.Brackets + " " + server.CurrentPlayers) 
    })

    // ...

    return true;
  }
}
