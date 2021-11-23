import L2Server from "../../../entities/L2Server";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import MMOSession from "../../../mmocore/MMOSession";
import LoginClient from "../../LoginClient";

export default class ServerListMutator extends IMMOClientMutator<LoginClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    (packet.get("game_servers") as any).forEach((s: any) => {
      const srv = new L2Server();
      srv.Id = s.game_server;
      srv.Ip = s.ipv4;
      srv.Port = s.port;
      this.Client.Servers.push(srv);
    });

    const server = this.Client.Servers.find((s) => s.Id === this.Client.ServerId) ?? this.Client.Servers[0];

    MMOSession.Server = {
      host: server.Ipv4(),
      port: server.Port,
    };
  }
}
