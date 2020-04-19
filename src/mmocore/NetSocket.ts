import * as net from "net";
import IStream from "./IStream";

export default class NetSocket implements IStream {
  private _socket: net.Socket = new net.Socket();

  private _onDataCallback!: (bytes: Uint8Array) => void;

  setDataCallback(callback?: (bytes: Uint8Array) => void): void {
    if (callback) {
      this._onDataCallback = callback;
    }
  }

  connect(ip: string, port: number): void {
    this._socket.on("data", (data: Uint8Array) => {
      this._socket.pause();
      this.receive(data);
    });
    this._socket.connect(port, ip);
  }
  send(bytes: Uint8Array): void {
    if (!this._socket.destroyed) {
      this._socket.write(bytes);
    }
  }
  receive(bytes: Uint8Array): void {
    if (this._onDataCallback) {
      setTimeout(() => {
        this._onDataCallback(bytes);
        this._socket.resume();
      }, 1);
    }
  }
  close(): void {
    if (!this._socket.destroyed) {
      this._socket.destroy();
    }
  }
}
