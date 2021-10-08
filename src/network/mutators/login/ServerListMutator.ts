import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import ServerList from "../../incoming/login/ServerList";
import LoginClient from "../../LoginClient";

export default class ServerListMutator extends IMMOClientMutator<
  LoginClient,
  ServerList
> {
  update(packet: ServerList): void {
    if (packet.Servers.length > 0) {
      this.Client.Servers = packet.Servers;

      const server =
        this.Client.Servers.find(s => s.Id === this.Client.ServerId) ??
        this.Client.Servers[0];

      this.Client.Session.server = {
        host: server.Ipv4(),
        port: server.Port
      };
    }
  }
}
