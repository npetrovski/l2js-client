import GameServerPacket from "./GameServerPacket";

export default class ProtocolVersion extends GameServerPacket {
  constructor(
    public protocolVersion: number = 746 /** use value=-2 in order to "ping" */
  ) {
    super();
  }

  write(): void {
    this.writeC(0x00);
    this.writeH(this.protocolVersion);
    this.writeB(new Uint8Array(32));
    this.logger.info("Protocol version");
  }
}
