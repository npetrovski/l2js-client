import * as net from "net";
import IStream from "../../mmocore/IStream";

export default class NetSocket implements IStream {
  private _socket!: net.Socket;

  private timeoutTimer!: ReturnType<typeof setTimeout>;

  private timeout = 5000;

  constructor(private ip: string, private port: number) {}

  connect(): Promise<void> {
    this._socket = new net.Socket();
    return new Promise((resolve, reject) => {
      this.timeoutTimer = setTimeout(() => {
        this._socket.end();
        this._socket.destroy();
        reject("Socket timeout");
      }, this.timeout);

      this._socket.setTimeout(0);
      this._socket.once("error", (err) => reject(err));
      this._socket.connect(this.port, this.ip, () => {
        clearTimeout(this.timeoutTimer);
        resolve();
      });
    });
  }

  send(bytes: Uint8Array): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this._socket.destroyed) {
        // this._socket.once("error", (err) => reject(err));
        if (this._socket.write(bytes)) {
          resolve();
        } else {
          reject("Data not sent");
        }
      } else {
        reject("Connection is closed");
      }
    });
  }

  recv(): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      if (!this._socket.destroyed) {
        this._socket.resume();
        this._socket.once("data", (data: Uint8Array) => {
          resolve(data);
          this._socket.pause();
        });
      } else {
        reject("Connection is closed");
      }
    });
  }

  close(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this._socket.destroyed) {
        this._socket.once("close", (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
        this._socket.destroy();
      }
    });
  }

  toString(): string {
    return `${this.ip}:${this.port}`;
  }
}
