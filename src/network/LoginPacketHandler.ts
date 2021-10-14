import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import Logger from "../mmocore/Logger";
import LoginClient from "./LoginClient";
import * as Packets from "./incoming/login/index";

export default class LoginPacketHandler implements IPacketHandler<LoginClient> {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  // @Override
  handlePacket(data: Uint8Array, client: LoginClient): ReceivablePacket {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket;

    try {
      switch (opcode) {
        case 0x00:
          rpk = new Packets.Init();
          break;
        case 0x01:
          rpk = new Packets.LoginFail();
          break;
        case 0x02:
          rpk = new Packets.AccountKicked();
          break;
        case 0x03:
          rpk = new Packets.LoginOk();
          break;
        case 0x04:
          rpk = new Packets.ServerList();
          break;
        case 0x06:
          rpk = new Packets.PlayFail();
          break;
        case 0x07:
          rpk = new Packets.PlayOk();
          break;
        case 0x0b:
          rpk = new Packets.GGAuth();
          break;
        default:
          // no-op
          break;
      }

      if (!rpk) {
        if (data.byteLength > 2) {
          this.logger.debug(
            "Unknown game packet received. [0x" +
              opcode.toString(16) +
              " 0x" +
              data[1].toString(16) +
              "] len=" +
              data.byteLength
          );
        }
      } else {
        // rpk.Client = client;
        rpk.Buffer = data;
      }
    } catch (err) {
      this.logger.error(err);
    }

    return rpk;
  }
}
