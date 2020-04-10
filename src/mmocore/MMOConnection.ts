import MMOClient from "./MMOClient";
import IStream from "./IStream";
import MMOConfig from "./MMOConfig";

export default class MMOConnection<T extends MMOClient<any>> {
  private _client!: T;

  private _stream: IStream;

  constructor(config: MMOConfig) {
    this._stream = config.stream;
    this._stream.setDataCallback((buf: Uint8Array) => this.read(buf));
    this._stream.connect(config.loginServerIp, config.loginServerPort);
  }

  get Client(): T {
    return this._client;
  }

  set Client(client: T) {
    this._client = client;
  }

  write(buf: Uint8Array) {
    this._stream.send(buf);
  }

  read(data: Uint8Array): void {
    this._client.process(data);
  }

  close(): void {
    this._stream.close();
  }
}
