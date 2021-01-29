import { NetConnectOpts, createServer, connect, Socket } from "net";
import LoginClient from "l2js-client/network/LoginClient";
import GameClient from "l2js-client/network/GameClient";
import ServerList from "l2js-client/network/serverpackets/ServerList";
import MMOClient from "l2js-client/mmocore/MMOClient";
import ReceivablePacket from "l2js-client/mmocore/ReceivablePacket";
import SendablePacket from "l2js-client/mmocore/SendablePacket";

interface ProxyConfig {
    remoteIp: string;
    remotePort: number;
    listenPort: number;
    mmoClient: MMOClient;
}


const config: ProxyConfig[] = [
    {
        remoteIp: "176.9.27.229",
        remotePort: 2106,
        listenPort: 2106,
        mmoClient: new LoginClient()
    },
    {
        remoteIp: "176.9.27.229",
        remotePort: 7777,
        listenPort: 7777,
        mmoClient: new GameClient()
    }
];


const proxy = (cfg: ProxyConfig) => {

    const server = createServer((client) => {

        const connectOption: NetConnectOpts = { port: cfg.remotePort, host: cfg.remoteIp };
        // Proxy client
        const remote: Socket = connect(connectOption);

        client.on("end", () => remote.destroy());

        client.on("error", () => remote.destroy());

        client.on("data", (data: Uint8Array) => {
            client.pause();
            remote.write(data);
            client.resume();
        });

        remote.on("data", (data: Uint8Array) => {
            remote.pause();

            cfg.mmoClient.process(data)
            .then((packet: ReceivablePacket<MMOClient>) => {

                if (packet != null && packet instanceof ServerList) {
                    const list = (cfg.mmoClient as LoginClient).Servers;
                    const fakeServerListPacket = new class extends SendablePacket<LoginClient> {
                        write(): void {
                            this.writeC(0x04);
                            this.writeC(list.length);
                            this.writeC(1);
                            list.forEach(s => {
                                this.writeC(s.Id);
                                this.writeD(0x0100007F); // 127.0.0.1
                                this.writeD(s.Port);
                                this.writeC(s.AgeLimit);
                                this.writeC(s.Pvp);
                                this.writeH(s.CurrentPlayers);
                                this.writeH(s.MaxPlayers);
                                this.writeC(s.Status);
                                this.writeD(s.ServerType);
                                this.writeC(s.Brackets);
                            });
                            this.writeH(0);
                            this.writeC(0);
                        }
                    }();
                    fakeServerListPacket.Client = cfg.mmoClient as LoginClient;

                    data = cfg.mmoClient.pack(fakeServerListPacket);
                }

                client.write(data);
                remote.resume();
            })
            .catch(() => {

                client.write(data);
                remote.resume();
            });
        });

        remote.on("end", () => client.destroy());
        remote.on("error", () => client.destroy());
    });


    server.listen(cfg.listenPort, () => {
        console.info('Listen on port:', cfg.listenPort);
    });
};

config.forEach((c) => proxy(c));


