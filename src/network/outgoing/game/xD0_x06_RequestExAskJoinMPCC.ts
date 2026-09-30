import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x06_RequestExAskJoinMPCC extends GameServerPacket {
  constructor(public name: string) {
    super();
  }
  write(): void {
    this.writeC(0xd0);
    this.writeH(0x06);
    this.writeS(this.name);
  }
}
