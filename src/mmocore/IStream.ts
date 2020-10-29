export default interface IStream {
  connect(...params: any): Promise<void>;

  send(bytes: Uint8Array): Promise<void>;

  recv(): Promise<Uint8Array>;

  close(): Promise<void>;

  toString(): string;
}
