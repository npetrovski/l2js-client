import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x0E_ProtocolVersion extends GameServerPacket {
  constructor(
    public protocolVersion: number = 273 /** use value=-2 in order to "ping" */
  ) {
    super();
  }

  write(): void {
    this.writeC(0x0e);
    this.writeD(this.protocolVersion);
  }
}
