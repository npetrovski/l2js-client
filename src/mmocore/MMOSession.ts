export default class MMOSession {
  sessionId!: number;
  publicKey!: Uint8Array;
  playOk1!: number;
  playOk2!: number;
  loginOk1!: number;
  loginOk2!: number;
  username!: string;
  server!: { host: string; port: number };
}
