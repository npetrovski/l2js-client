import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x14_RequestItemList extends GameServerPacket {
  write(): void {
    this.writeC(0x14);
  }
}
