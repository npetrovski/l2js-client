import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x5F_RequestEnchantItem extends GameServerPacket {
  constructor(public objectId: number, public supportId: number) {
    super();
  }
  write(): void {
    this.writeC(0x5f);
    this.writeD(this.objectId);
    this.writeD(this.supportId);
  }
}
