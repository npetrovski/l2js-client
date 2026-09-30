import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x11_EnterWorld extends GameServerPacket {
  write(): void {
    this.writeC(0x11);
    this.writeB(new Uint8Array(32)); // Unknown Byte Array
    this.writeD(0);
    this.writeD(0);
    this.writeD(0);
    this.writeD(0);
    this.writeB(new Uint8Array(32)); // Unknown Byte Array
    this.writeD(0);
    for (let i = 0; i < 5; i++) {
      for (let o = 0; o < 4; o++) {
        this.writeC(0);
      }
    }
  }
}
