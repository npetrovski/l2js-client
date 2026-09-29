import IPacketHandler from "../mmocore/IPacketHandler";
import Logger from "../mmocore/Logger";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import LoginClient from "./LoginClient";
import "./incoming/login/index";
import { findLoginPacket } from "./PacketRegistry";

export default class LoginPacketHandler implements IPacketHandler<LoginClient> {
  protected readonly logger = Logger.for(this);

  // @Override
  handlePacket(data: Uint8Array): ReceivablePacket {
    const opcode = data[0] & 0xff;

    let rpk!: ReceivablePacket;

    try {
      const PacketClass = findLoginPacket(opcode);

      if (PacketClass) {
        rpk = new PacketClass();
        rpk.Buffer = data;
      } else if (data.byteLength > 2) {
        this.logger.debug(
          "Unknown login packet received. [0x" +
            opcode.toString(16) +
            " 0x" +
            data[1].toString(16) +
            "] len=" +
            data.byteLength
        );
      } else {
        this.logger.debug("Unknown login packet received.");
      }
    } catch (err) {
      this.logger.error(err);
    }

    return rpk;
  }
}
