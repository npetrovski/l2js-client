import LoginClientPacket from "./LoginClientPacket";
import ServerData from "../ServerData";
import RequestServerLogin from "../serverpackets/RequestServerLogin";

export default class ServerList extends LoginClientPacket {
  _servers: ServerData[] = [];

  _lastServerId: number = 0;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const serversSize = this.readC();
    this._lastServerId = this.readC();

    for (let i = 0; i < serversSize; i++) {
      const server = new ServerData();
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

      this._servers.push(server);
    }

    const _unkn = this.readH();
    // ...

    this.Client.Servers = this._servers;
    return true;
  }

  // @Override
  run(): void {
    this.Client.sendPacket(
      new RequestServerLogin(this.Client.LoginOk1, this.Client.LoginOk2, this.Client.ServerId ?? this._lastServerId)
    );
  }
}
