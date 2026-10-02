import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x94_RequestPetUseItem extends GameServerPacket {
  constructor(
    private readonly itemObjId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x94);
    this.writeD(this.itemObjId);
  }
}

