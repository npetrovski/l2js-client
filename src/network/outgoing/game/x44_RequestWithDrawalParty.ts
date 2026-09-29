import GameServerPacket from "./GameServerPacket";

export default class x44_RequestWithDrawalParty extends GameServerPacket {
  write(): void {
    this.writeC(0x44);
  }
}
