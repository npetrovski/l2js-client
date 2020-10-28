export default interface IConnection {
  connect(): Promise<void>;

  write(buf: Uint8Array): Promise<void>;

  close(): void;
}
