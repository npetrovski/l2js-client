import LoginClientPacket from "./LoginClientPacket";
import LoginClient from "../LoginClient";
import SendablePacket from "../../mmocore/SendablePacket";
import RequestAuthLogin from "../serverpackets/RequestAuthLogin";

export default class GGAuth extends LoginClientPacket {
  //@Override
  readImpl(): boolean {
    let _id: number = this.readC();
    var _response = this.readD();

    return true;
  }

  //@Override
  run(): void {
    var spk: SendablePacket<LoginClient> = new RequestAuthLogin();
    spk.Client = this.Client;
    this.Client.sendPacket(spk);
  }
}
