import IStream from "./IStream";
import IConnection from "./IConnection";
import Logger from "./Logger";
import IProcessable from "./IProcessable";

export default class MMOConnection implements IConnection {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  constructor(private _stream: IStream, private _client: IProcessable) {}

  connect(): Promise<void> {
    this.logger.debug("Connecting", this._stream.toString());
    return this._stream
      .connect()
      .then(() => {
        this.logger.info("Connected", this._stream.toString());
        this.read();
      })
      .catch(() => {
        this.logger.error("Connection fail to ", this._stream.toString());
      });
  }

  async read(): Promise<void> {
    const data: Uint8Array = await this._stream.recv();
    if (data) {
      this._client.process(data).catch((err) => this.logger.warn(err));
    }
    this.read();
  }

  write(raw: Uint8Array): Promise<void> {
    return this._stream.send(raw);
  }

  close(): Promise<void> {
    return this._stream.close().then(() => {
      this.logger.debug("Disconnected", this._stream.toString());
    });
  }
}
