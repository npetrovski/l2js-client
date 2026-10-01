import AbstractPacketStream from "@mmocore/AbstractPacketStream";

export default class WebSocketStream extends AbstractPacketStream {
  private socket?: WebSocket;
  private pendingReceivers: Array<{
    resolve: (data: Uint8Array) => void;
    reject: (reason: unknown) => void;
  }> = [];
  private received: Uint8Array[] = [];
  private closeError: Error = new Error("WebSocket connection is closed.");

  connect(): Promise<void> {
    if (!this.config.WebSocketUrl) {
      return Promise.reject(new Error("WebSocketUrl is required for a browser connection."));
    }

    const url = new URL(this.config.WebSocketUrl, globalThis.location?.href);
    url.searchParams.set("host", this.config.Ip);
    url.searchParams.set("port", this.config.Port.toString());

    return new Promise((resolve, reject) => {
      const socket = new WebSocket(url);
      let opened = false;
      this.socket = socket;
      socket.binaryType = "arraybuffer";

      socket.addEventListener(
        "open",
        () => {
          opened = true;
          resolve();
        },
        { once: true }
      );

      socket.addEventListener("message", (event: MessageEvent<ArrayBuffer>) => {
        const data = new Uint8Array(event.data);
        const receiver = this.pendingReceivers.shift();
        if (receiver) {
          receiver.resolve(data);
        } else {
          this.received.push(data);
        }
      });

      socket.addEventListener("close", (event: CloseEvent) => {
        const detail = event.reason
          ? `: ${event.reason}`
          : event.code === 1006
            ? ": connection was rejected or lost; check the proxy target allowlist and upstream server"
            : "";
        this.closeError = new Error(`WebSocket closed (${event.code})${detail}`);
        if (!opened) {
          reject(this.closeError);
        }
        for (const receiver of this.pendingReceivers.splice(0)) {
          receiver.reject(this.closeError);
        }
      });
    });
  }

  send(bytes: Uint8Array): Promise<void> {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      return Promise.reject(this.closeError);
    }

    const data = new ArrayBuffer(bytes.byteLength);
    new Uint8Array(data).set(bytes);
    this.socket.send(data);
    return Promise.resolve();
  }

  recv(): Promise<Uint8Array> {
    const data = this.received.shift();
    if (data) {
      return Promise.resolve(data);
    }

    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      return Promise.reject(this.closeError);
    }

    return new Promise((resolve, reject) => this.pendingReceivers.push({ resolve, reject }));
  }

  close(): Promise<void> {
    const socket = this.socket;
    if (!socket || socket.readyState === WebSocket.CLOSED) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      socket.addEventListener("close", () => resolve(), { once: true });
      socket.close();
    });
  }

  public toString(): string {
    return `${this.config.WebSocketUrl} -> ${this.config.Ip}:${this.config.Port}`;
  }
}
