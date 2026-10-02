import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x98_RequestPetGetItem extends GameServerPacket {
  constructor(
    private readonly itemObjId: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0x98);
    this.writeD(this.itemObjId);
  }
}

