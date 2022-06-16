export default interface ICrypt {
  setKey(key: Uint8Array): void;
  decrypt(raw: Uint8Array, offset?: number, size?: number): void;
  encrypt(raw: Uint8Array, offset?: number, size?: number): void;
}
