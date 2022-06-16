import MMOConfig from "./MMOConfig";

export default abstract class AbstractPacketStream {
  constructor(protected config: MMOConfig) {}
  abstract connect(...params: any): Promise<void>;
  abstract send(bytes: Uint8Array): Promise<void>;
  abstract recv(): Promise<Uint8Array>;
  abstract close(): Promise<void>;
  public toString(): string {
    return `${this.config.Ip}:${this.config.Port}`;
  }
}
