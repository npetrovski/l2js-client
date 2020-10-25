export default interface IConnection {
  write(buf: Uint8Array): Promise<void>;

  close(): void;
}
