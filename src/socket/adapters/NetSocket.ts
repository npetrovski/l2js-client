import * as net from "net";
import IStream from "../../mmocore/IStream";

export default class NetSocket implements IStream {
  private _socket: net.Socket = new net.Socket();

  async connect(ip: string, port: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this._socket.connect(port, ip, () => {
        resolve();
      });
    });
  }

  async send(bytes: Uint8Array): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this._socket.destroyed) {
        this._socket.write(bytes);
        resolve();
      } else {
        reject("Connection is closed");
      }
    });
  }

  async recv(): Promise<Uint8Array> {
    this._socket.resume();
    return new Promise((resolve, reject) => {
      this._socket.on("data", (data: Uint8Array) => {
        this._socket.pause();
        resolve(data);
      });
      this._socket.on("error", err => reject(err));
    });
  }


  async close(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this._socket.destroyed) {
        this._socket.on("close", (err) => {
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
}
