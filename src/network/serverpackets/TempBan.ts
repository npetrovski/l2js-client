import GameClientPacket from "./GameClientPacket";

export default class TempBan extends GameClientPacket {
  // @Override
  readImpl(): boolean {

    if (this._buffer.length > 5) {
      const _id = this.readC();
      const _char = this.readS();
      const _ip = this.readS();
      const _time = this.readQ();
      const _c = this.readC();

      let _reason = "";
      if (_c === 1) {
        _reason = this.readS();
      }

      this.logger.warn(`Account temporary banned. Char: ${_char}; IP: ${_ip}; Reason: ${_reason}`);
    }
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
