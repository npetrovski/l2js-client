import GameServerPacket from "./GameServerPacket";

export default class ProtocolVersion extends GameServerPacket {
  private _protocolVersion = 656; // use value=-2 in order to "ping"
  private _magicHex = [0x09, 0x07, 0x54, 0x56, 0x03, 0x09, 0x0B, 0x01, 0x07, 0x02, 0x54, 0x54, 0x56, 0x07, 0x00, 0x02, 0x55, 0x56, 0x00, 0x51, 0x00, 0x53, 0x57, 0x04, 0x07, 0x55, 0x08, 0x54, 0x01, 0x07, 0x01, 0x53, 0x00, 0x56, 0x55, 0x56, 0x01, 0x06, 0x05, 0x04, 0x51, 0x03, 0x08, 0x51, 0x08, 0x51, 0x56, 0x04, 0x54, 0x06, 0x55, 0x08, 0x02, 0x09, 0x51, 0x56, 0x01, 0x53, 0x06, 0x55, 0x04, 0x53, 0x00, 0x56, 0x56, 0x53, 0x01, 0x09, 0x02, 0x09, 0x01, 0x51, 0x54, 0x51, 0x09, 0x55, 0x56, 0x09, 0x03, 0x04, 0x07, 0x05, 0x55, 0x04, 0x06, 0x55, 0x04, 0x06, 0x09, 0x04, 0x51, 0x01, 0x08, 0x08, 0x06, 0x05, 0x52, 0x06, 0x04, 0x01, 0x07, 0x54, 0x03, 0x06, 0x52, 0x55, 0x06, 0x55, 0x55, 0x51, 0x01, 0x02, 0x04, 0x54, 0x03, 0x55, 0x54, 0x01, 0x57, 0x51, 0x55, 0x05, 0x52, 0x05, 0x54, 0x07, 0x51, 0x51, 0x55, 0x07, 0x02, 0x53, 0x53, 0x00, 0x52, 0x05, 0x52, 0x07, 0x01, 0x54, 0x00, 0x03, 0x05, 0x05, 0x08, 0x06, 0x05, 0x05, 0x06, 0x03, 0x00, 0x0D, 0x08, 0x01, 0x07, 0x09, 0x03, 0x51, 0x03, 0x07, 0x53, 0x09, 0x51, 0x06, 0x07, 0x54, 0x0A, 0x50, 0x56, 0x02, 0x52, 0x04, 0x05, 0x55, 0x51, 0x02, 0x53, 0x00, 0x08, 0x54, 0x04, 0x52, 0x56, 0x06, 0x02, 0x09, 0x00, 0x08, 0x03, 0x53, 0x56, 0x01, 0x05, 0x00, 0x55, 0x06, 0x08, 0x56, 0x04, 0x0D, 0x06, 0x07, 0x52, 0x06, 0x07, 0x04, 0x0A, 0x06, 0x01, 0x04, 0x54, 0x04, 0x00, 0x05, 0x02, 0x04, 0x54, 0x00, 0x09, 0x52, 0x53, 0x05, 0x04, 0x01, 0x04, 0x05, 0x05, 0x01, 0x52, 0x51, 0x52, 0x0D, 0x06, 0x51, 0x08, 0x09, 0x54, 0x53, 0x00, 0x0D, 0x01, 0x02, 0x03, 0x54, 0x53, 0x01, 0x05, 0x03, 0x08, 0x56, 0x54, 0x07, 0x02, 0x54, 0x0B, 0x06]
  

  write(): void {
    this.writeC(0x00);
    this.writeD(this._protocolVersion);
    this.writeB(Uint8Array.from(this._magicHex));

  }
}
