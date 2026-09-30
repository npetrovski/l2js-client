import GameClientPacket from "@network/incoming/game/GameClientPacket";

/**
 * A server packet whose wire id is known but which does not yet have a
 * specialised state-mutating parser. The payload is retained losslessly so
 * callers can inspect it without the packet being reported as unknown.
 */
export default class RawGamePacket extends GameClientPacket {
  readonly Opcode: number;
  readonly SubOpcode?: number;
  readonly PacketNames: readonly string[];
  Payload: Uint8Array = new Uint8Array();

  constructor(opcode: number, packetNames: readonly string[], subOpcode?: number) {
    super();
    this.Opcode = opcode;
    this.SubOpcode = subOpcode;
    this.PacketNames = packetNames;
  }

  get PacketName(): string {
    return this.PacketNames.join(" | ");
  }

  // @Override
  readImpl(): boolean {
    this.readC();
    if (this.SubOpcode !== undefined) {
      this.readH();
    }
    this.Payload = this.readB(this._buffer.byteLength - this._offset);
    return true;
  }
}
