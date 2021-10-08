import GameClientPacket from "./GameClientPacket";

export default class KeyPacket extends GameClientPacket {
  BlowfishKey!: Uint8Array;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _protocolStatus = this.readC(); // 0 - wrong protocol, 1 - protocol ok
    if (0 === _protocolStatus) {
      throw Error("Wrong protocol version!");
    }
    const key = this.readB(8);
    const _unkn1 = this.readD();
    const _unkn2 = this.readD();
    const _unkn3 = this.readC();
    const _unkn4 = this.readD();

    this.BlowfishKey = new Uint8Array(16);
    this.BlowfishKey.set(key, 0);
    this.BlowfishKey.set(
      Uint8Array.from([0xc8, 0x27, 0x93, 0x01, 0xa1, 0x6c, 0x31, 0x97]),
      8
    ); // the last 8 bytes are static

    return true;
  }
}
