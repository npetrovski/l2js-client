import { connect } from "node:net";
import { IncomingMessage } from "node:http";
import { RawData, WebSocket, WebSocketServer } from "ws";

interface ProxyTarget {
  host: string;
  port: number;
}

const listenPort = Number(process.env.L2_WS_PROXY_PORT ?? 8080);

// Add every login or game endpoint that browsers may reach. Keeping this list
// explicit prevents the proxy from becoming an unrestricted TCP relay.
const targets: ProxyTarget[] = [
  { host: "127.0.0.1", port: 2106 },
  { host: "127.0.0.1", port: 7777 },
  { host: "149.56.28.81", port: 2106 },
  { host: "149.56.28.81", port: 7777 },
];

const server = new WebSocketServer({
  port: listenPort,
  perMessageDeflate: false,
  maxPayload: 1024 * 1024,
});

server.on("connection", (webSocket, request) => {
  const target = resolveTarget(request);
  if (!target) {
    console.warn(`Rejected WebSocket target: ${request.url ?? "(missing URL)"}`);
    webSocket.close(1008, "Target is not allowed");
    return;
  }

  const remote = connect({ host: target.host, port: target.port });
  let remoteConnected = false;
  const queued: Buffer[] = [];

  remote.on("connect", () => {
    remoteConnected = true;
    for (const packet of queued.splice(0)) {
      remote.write(packet);
    }
  });

  webSocket.on("message", (data, isBinary) => {
    if (!isBinary) {
      webSocket.close(1003, "Binary messages are required");
      return;
    }

    const packet = toBuffer(data);
    if (!remoteConnected) {
      queued.push(packet);
    } else if (!remote.write(packet)) {
      webSocket.pause();
    }
  });

  remote.on("drain", () => webSocket.resume());

  remote.on("data", (data) => {
    if (webSocket.readyState !== WebSocket.OPEN) {
      return;
    }

    remote.pause();
    webSocket.send(data, { binary: true }, () => remote.resume());
  });

  webSocket.on("close", () => remote.destroy());
  webSocket.on("error", () => remote.destroy());

  remote.on("end", () => webSocket.close(1000));
  remote.on("error", (error) => {
    console.error(`Lineage II connection failed for ${target.host}:${target.port}`, error.message);
    webSocket.close(1011, "Lineage II connection failed");
  });
});

server.on("listening", () => {
  console.info(`Lineage II WebSocket proxy listening on port ${listenPort}`);
});

function resolveTarget(request: IncomingMessage): ProxyTarget | undefined {
  const url = new URL(request.url ?? "/", "ws://proxy.invalid");
  const host = url.searchParams.get("host");
  const port = Number(url.searchParams.get("port"));

  return targets.find((target) => target.host === host && target.port === port);
}

function toBuffer(data: RawData): Buffer {
  if (Array.isArray(data)) {
    return Buffer.concat(data);
  }
  if (data instanceof ArrayBuffer) {
    return Buffer.from(data);
  }
  return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
}
