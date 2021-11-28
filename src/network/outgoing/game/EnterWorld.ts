import GameServerPacket from "./GameServerPacket";

export default class EnterWorld extends GameServerPacket {
  write(): void {
    this.writeC(0x03);
    this.writeB(new Uint8Array(32)); // Unknown Byte Array
    this.writeD(0);
    this.logger.info("Enterworld ");
  }
}
