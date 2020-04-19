import LoginServerPacket from "./LoginServerPacket";

export default class AuthGameGuard extends LoginServerPacket {
  _sessionId: number = 0;

  constructor(sessionId: number) {
    super();
    this._sessionId = sessionId;
  }

  write(): void {
    this.writeC(0x07);
    this.writeD(this._sessionId);

    this.writeD(0x00000123); // data1
    this.writeD(0x00004567); // data2
    this.writeD(0x000089ab); // data3
    this.writeD(0x0000cdef); // data4
    this.writeB(Uint8Array.from(Array(19).fill(0)));
  }
}
