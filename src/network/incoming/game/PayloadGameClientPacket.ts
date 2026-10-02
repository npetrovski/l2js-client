import GameClientPacket from "@network/incoming/game/GameClientPacket";

/**
 * Lossless parser for known packets whose higher-level client state is not modelled yet.
 * The opcode header is consumed and the remaining bytes are exposed for consumers.
 */
export default abstract class PayloadGameClientPacket extends GameClientPacket {
  Payload: Uint8Array = new Uint8Array();

  readImpl(): boolean {
    const opcode = this.readC();
    if (opcode === 0xfe) {
      this.readH();
    }
    this.Payload = this.readB(this._buffer.byteLength - this._offset);
    return true;
  }
}
