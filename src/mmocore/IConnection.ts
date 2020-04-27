export default interface IConnection {
  write(buf: Uint8Array): Promise<boolean>;

  read(data: Uint8Array): void;

  close(): void;
}
