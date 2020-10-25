import MMOClient from "./MMOClient";
import IStream from "./IStream";
import MMOConfig from "./MMOConfig";
import IConnection from "./IConnection";
import SocketFactory from "../socket/SocketFactory";
import Logger from "./Logger";

export default class MMOConnection<T extends MMOClient> implements IConnection {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  private _client!: T;

  private _stream: IStream;

  constructor(config: MMOConfig) {
    this._stream = SocketFactory.getSocketAdapter(config.Stream);
    this.logger.debug("Connecting", `${config.Ip}:${config.Port}`);
    this._stream.connect(config.Ip, config.Port).then(() => {
      this.logger.info("Connected", `${config.Ip}:${config.Port}`);
      this.read();
    }).catch(() => {
      this.logger.error("Connection fail to ", `${config.Ip}:${config.Port}`);
    });
  }

  get Client(): T {
    return this._client;
  }

  set Client(client: T) {
    this._client = client;
  }

  async read(): Promise<void> {
    const data: Uint8Array = await this._stream.recv();
    if (data) {
      this._client.process(data);
    }
    this.read();
  }

  write(raw: Uint8Array): Promise<void> {
    return this._stream.send(raw);
  }

  close(): Promise<void> {
    return this._stream.close();
  }
}
