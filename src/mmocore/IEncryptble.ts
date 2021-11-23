export default interface IEncryptable {
  encrypt(data: Uint8Array, offset: number, size: number): void;

  decrypt(data: Uint8Array, offset: number, size: number): void;

  setKey(key: Uint8Array): void;
}
