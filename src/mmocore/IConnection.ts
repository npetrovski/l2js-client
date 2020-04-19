export default interface IConnection {
  write(buf: Uint8Array): void;

  read(data: Uint8Array): void;

  close(): void;
}
