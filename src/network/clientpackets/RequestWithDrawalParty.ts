import GameServerPacket from "./GameServerPacket";

export default class RequestWithDrawalParty extends GameServerPacket {
  write(): void {
    this.writeC(0x44);
  }
}
