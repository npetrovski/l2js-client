import ServerData from "../ServerData";
import LoginClientPacket from "./LoginClientPacket";

export default class ServerList extends LoginClientPacket {
  _lastServerId = 0;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _size = this.readC();
    this._lastServerId = this.readC();

    for (let i = 0; i < _size; i++) {
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

      this.Client.Servers.push(server);
    }

    const _unkn = this.readH();
    // ...

    this.Client.Session.selectedServer =
      this.Client.Servers.find((s) => s.Id === this.Client.ServerId) ?? this.Client.Servers[0];

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
