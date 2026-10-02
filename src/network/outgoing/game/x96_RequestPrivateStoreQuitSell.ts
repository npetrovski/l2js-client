import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x96_RequestPrivateStoreQuitSell extends GameServerPacket {
  write(): void {
    this.writeC(0x96);
  }
}

