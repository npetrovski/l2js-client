import LoginClientPacket from "./LoginClientPacket";

export default class Init extends LoginClientPacket {
  PublicKey!: Uint8Array;

  BlowfishKey!: Uint8Array;

  SessionId!: number;

  ProtocolRevision!: number;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.SessionId = this.readD();

    this.ProtocolRevision = this.readD();

    this.logger.debug("ProtocolRevision", this.ProtocolRevision);

    this.PublicKey = this.unscrambleModulus(this.readB(128));

    // unk GG related?
    const _unkn1 = this.readD();
    const _unkn2 = this.readD();
    const _unkn3 = this.readD();
    const _unkn4 = this.readD();

    this.BlowfishKey = this.readB(16);

    return true;
  }

  private unscrambleModulus(mods: Uint8Array): Uint8Array {
    for (let i = 0; i < 0x40; i++) {
      mods[0x40 + i] = mods[0x40 + i] ^ mods[i];
    }
    // step 3 : xor bytes 0x0d-0x10 with bytes 0x34-0x38
    for (let i = 0; i < 4; i++) {
      mods[0x0d + i] = mods[0x0d + i] ^ mods[0x34 + i];
    }
    // step 2 : xor first 0x40 bytes with  last 0x40 bytes
    for (let i = 0; i < 0x40; i++) {
      mods[i] = mods[i] ^ mods[0x40 + i];
    }
    // step 1 : 0x4d-0x50 <-> 0x00-0x04
    for (let i = 0; i < 4; i++) {
      const temp: number = mods[0x00 + i];
      mods[0x00 + i] = mods[0x4d + i];
      mods[0x4d + i] = temp;
    }

    return mods;
  }
}
