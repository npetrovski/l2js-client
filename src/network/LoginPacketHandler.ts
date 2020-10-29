import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import AccountKicked from "./serverpackets/AccountKicked";
import GGAuth from "./serverpackets/GGAuth";
import Init from "./serverpackets/Init";
import LoginFail from "./serverpackets/LoginFail";
import LoginOk from "./serverpackets/LoginOk";
import PlayFail from "./serverpackets/PlayFail";
import PlayOk from "./serverpackets/PlayOk";
import ServerList from "./serverpackets/ServerList";
import LoginClient from "./LoginClient";
import Logger from "../mmocore/Logger";

export default class LoginPacketHandler implements IPacketHandler<LoginClient> {
  protected logger: Logger = Logger.getLogger(this.constructor.name);

  // @Override
  handlePacket(data: Uint8Array, client: LoginClient): ReceivablePacket<LoginClient> {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket<LoginClient>;

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

          return rpk;
      }

      rpk.Client = client;
      rpk.Buffer = Uint8Array.from(data);
    } catch (err) {
      this.logger.error(err);
    }
    return rpk;
  }
}
