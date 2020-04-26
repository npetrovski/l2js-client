import IPacketHandler from "../mmocore/IPacketHandler";
import ReceivablePacket from "../mmocore/ReceivablePacket";
import AccountKicked from "./clientpackets/AccountKicked";
import GGAuth from "./clientpackets/GGAuth";
import Init from "./clientpackets/Init";
import LoginFail from "./clientpackets/LoginFail";
import LoginOk from "./clientpackets/LoginOk";
import PlayFail from "./clientpackets/PlayFail";
import PlayOk from "./clientpackets/PlayOk";
import ServerList from "./clientpackets/ServerList";
import LoginClient from "./LoginClient";

export default class LoginPacketHandler implements IPacketHandler<LoginClient> {
  // @Override
  handlePacket(data: Uint8Array, client: LoginClient): ReceivablePacket<LoginClient> {
    const opcode: number = data[0] & 0xff;

    let rpk!: ReceivablePacket<LoginClient>;

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
        throw Error("Unknown login packet received." + opcode);
    }

    rpk.Client = client;
    rpk.Buffer = Uint8Array.from(data);
    return rpk;
  }
}
