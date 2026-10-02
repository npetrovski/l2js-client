import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x9C_RequestPrivateStoreQuitBuy extends GameServerPacket {
  write(): void {
    this.writeC(0x9C);
  }
}

