class MMOSession {
  private static _instance?: MMOSession;

  constructor() {
    if (MMOSession._instance) {
      throw new Error("Error: Instantiation failed. MMOSession is singleton.");
    }
    MMOSession._instance = this;
  }

  SessionId!: number;
  PublicKey!: Uint8Array;
  GameServerSessionId!: number;
  GameServerAccountId!: number;
  AccountId!: number;
  AuthKey!: number;
  Username!: string;
  Server!: { host: string; port: number };
}

export default new MMOSession();
