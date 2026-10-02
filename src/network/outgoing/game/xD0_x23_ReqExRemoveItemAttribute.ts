import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x23_ReqExRemoveItemAttribute extends GameServerPacket {
  constructor(
    private readonly objId: number,
    private readonly element: number
  ) {
    super();
  }

  write(): void {
    this.writeC(0xD0);
    this.writeH(0x23);
    this.writeD(this.objId);
    this.writeD(this.element);
  }
}

