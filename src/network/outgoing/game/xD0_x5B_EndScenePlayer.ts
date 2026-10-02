import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x5B_EndScenePlayer extends GameServerPacket {
  constructor(
    private readonly movieId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x5B);
    this.writeD(this.movieId);
  }
}

