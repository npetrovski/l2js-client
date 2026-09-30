import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x23_RequestBypassToServer extends GameServerPacket {
  constructor(public text: string) {
    super();
  }

  write(): void {
    this.writeC(0x23);
    this.writeS(this.text);
  }
}
