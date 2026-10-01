import AbstractPacketStream from "@mmocore/AbstractPacketStream";
import IConnection from "@mmocore/IConnection";
import Logger from "@mmocore/Logger";
import IProcessable from "@mmocore/IProcessable";

export default class MMOConnection implements IConnection {
  protected readonly logger = Logger.for(this);

  IsConnected = false;
  private isClosing = false;

  constructor(private stream: AbstractPacketStream, private handler: IProcessable) {}

  connect(): Promise<void> {
    this.isClosing = false;
    this.logger.debug("Connecting", this.stream.toString());
    return this.stream
      .connect()
      .then(() => {
        this.IsConnected = true;
        this.logger.info("Connected", this.stream.toString());
        void this.read().catch((error) => {
          this.IsConnected = false;
          if (!this.isClosing) {
            this.logger.warn(error);
            this.handler.handleConnectionClosed?.(error);
          }
        });
      })
      .catch((error) => {
        this.IsConnected = false;
        const reason = error instanceof Error ? error.message : String(error);
        throw new Error(`Connection failed to ${this.stream.toString()}: ${reason}`, { cause: error });
      });
  }

  async read(): Promise<void> {
    if (!this.IsConnected) {return;}
    const data: Uint8Array = await this.stream.recv();
    if (data) {
      this.handler.process(data).catch((err) => this.logger.warn(err));
    }
    return this.read();
  }

  write(raw: Uint8Array): Promise<void> {
    return this.stream.send(raw);
  }

  close(): Promise<void> {
    this.isClosing = true;
    this.IsConnected = false;
    return this.stream.close().then(() => {
      this.logger.info("Disconnected", this.stream.toString());
    });
  }
}
