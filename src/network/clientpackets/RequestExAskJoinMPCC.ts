import GameServerPacket from "./GameServerPacket";

export default class RequestExAskJoinMPCC extends GameServerPacket {
  constructor(public name: string) {
    super();
  }
  write(): void {
    this.writeC(0xd0);
    this.writeH(0x06);
    this.writeS(this.name);
  }
}
