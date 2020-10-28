import * as net from "net";
import IStream from "../../mmocore/IStream";

export default class NetSocket implements IStream {
  private _socket: net.Socket = new net.Socket();

  connect(ip: string, port: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this._socket.connect(port, ip, () => {
        resolve();
      });
    });
  }

  send(bytes: Uint8Array): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this._socket.destroyed) {
        this._socket.write(bytes);
        resolve();
      } else {
        reject("Connection is closed");
      }
    });
  }

  recv(): Promise<Uint8Array> {
    this._socket.resume();
    return new Promise((resolve, reject) => {
      //this._socket.once("error", err => reject(err));
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
}
