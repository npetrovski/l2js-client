import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import AccountKicked from "./incoming/login/AccountKicked";
import GGAuth from "./incoming/login/GGAuth";
import Init from "./incoming/login/Init";
import LoginFail from "./incoming/login/LoginFail";
import LoginOk from "./incoming/login/LoginOk";
import PlayFail from "./incoming/login/PlayFail";
import PlayOk from "./incoming/login/PlayOk";
import ServerList from "./incoming/login/ServerList";
import LoginClient from "./LoginClient";
import Logger from "../mmocore/Logger";

export default class LoginPacketHandler implements IPacketHandler<LoginClient> {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  // @Override
  handlePacket(data: Uint8Array, client: LoginClient): ReceivablePacket {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket;

    try {
      switch (opcode) {
        case 0x00:
          rpk = new Init();
          break;
        case 0x01:
          rpk = new LoginFail();
          break;
        case 0x02:
          rpk = new AccountKicked();
          break;
        case 0x03:
          rpk = new LoginOk();
          break;
        case 0x04:
          rpk = new ServerList();
          break;
        case 0x06:
          rpk = new PlayFail();
          break;
        case 0x07:
          rpk = new PlayOk();
          break;
        case 0x0b:
          rpk = new GGAuth();
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
