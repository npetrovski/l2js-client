import Logger from "../../mmocore/Logger";
import GameClientPacket from "./GameClientPacket";

export default class CryptInit extends GameClientPacket {
  // @Override
  readImpl(): boolean {

    const _id = this.readC();
    const _unkn1 = this.readC(); // 01

    const _key = this.readD();
    this.logger.debug("XOR key", _key);

    this.Client.Session.xorKey = _key
    this.Client.setCryptInitialKey(_key);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
