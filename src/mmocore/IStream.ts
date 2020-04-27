export default interface IStream {
  connect(ip: string, port: number): void;

  send(bytes: Uint8Array): Promise<boolean>;

  receive(bytes: Uint8Array): void;

  close(): void;

  setDataCallback(callback?: (bytes: Uint8Array) => void): void;
}
