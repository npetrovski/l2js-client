import * as net from "net";
import IStream from "../../mmocore/IStream";

export default class NetSocket implements IStream {
  private _socket: net.Socket = new net.Socket();
  private _remoteAddress!: string;
  private _remotePort!: number;

  constructor(ip: string, port: number) {
    this._remoteAddress = ip;
    this._remotePort = port;
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._socket.setTimeout(10000);
      this._socket.on("timeout", () => {
        reject("Socket timeout");
        this._socket.end();
      });
      this._socket.on("error", (err) => reject(err));
      this._socket.connect(this._remotePort, this._remoteAddress, () => {
        resolve();
      });
    });
  }

  send(bytes: Uint8Array): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this._socket.destroyed) {
        // this._socket.once("error", (err) => reject(err));
        this._socket.write(bytes);
        resolve();
      } else {
        reject("Connection is closed");
      }
    });
  }

  recv(): Promise<Uint8Array> {
    this._socket.resume();
    return new Promise((resolve) => {
      // this._socket.once("error", err => reject(err));
      this._socket.once("data", (data: Uint8Array) => {
        resolve(data);
        this._socket.pause();
      });
    });
  }

  close(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this._socket.destroyed) {
        this._socket.once("close", (err) => {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
        this._socket.destroy();
      }
    });
  }

  toString(): string {
    return `${this._remoteAddress}:${this._remotePort}`;
  }
}
