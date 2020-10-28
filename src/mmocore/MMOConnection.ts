import IStream from "./IStream";
import MMOConfig from "./MMOConfig";
import IConnection from "./IConnection";
import SocketFactory from "../socket/SocketFactory";
import Logger from "./Logger";
import IProcessable from "./IProcessable";

export default class MMOConnection implements IConnection {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  private _client!: IProcessable;

  private _stream: IStream;

  private _config!: MMOConfig;

  constructor(config: MMOConfig, client: IProcessable) {
    this._config = config;
    this._stream = SocketFactory.getSocketAdapter(config.Stream);
    this._client = client;
  }

  connect(): Promise<void> {
    this.logger.debug("Connecting", `${this._config.Ip}:${this._config.Port}`);
    return this._stream.connect(this._config.Ip, this._config.Port).then(() => {
      this.logger.info("Connected", `${this._config.Ip}:${this._config.Port}`);
      this.read();
    }).catch(() => {
      this.logger.error("Connection fail to ", `${this._config.Ip}:${this._config.Port}`);
    });
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
    return this._stream.close().then(() => {
      this.logger.info("Disconnected", `${this._config.Ip}:${this._config.Port}`);
    });
  }
}
