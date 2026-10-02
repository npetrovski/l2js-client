import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x0B_RequestGiveNickName extends GameServerPacket {
  constructor(
    private readonly target: string,
    private readonly nickname: string
  ) {
    super();
  }

  write(): void {
    this.writeC(0x0B);
    this.writeS(this.target);
    this.writeS(this.nickname);
  }
}

