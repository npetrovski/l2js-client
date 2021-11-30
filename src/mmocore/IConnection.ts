export default interface IConnection {
  IsConnected: boolean;
  connect(): Promise<void>;
  write(buf: Uint8Array): Promise<void>;
  close(): void;
}
