export default interface IStream {
  connect(ip: string, port: number): Promise<void>;

  send(bytes: Uint8Array): Promise<void>;

  recv(): Promise<Uint8Array>;

  close(): Promise<void>;
}
