import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class xD0_x4E_ReqExCancelEnchantItem extends GameServerPacket {
  write(): void {
    this.writeC(0xD0);
    this.writeH(0x4E);
  }
}

