import LoginClientPacket from "./LoginClientPacket";
import LoginClient from "../LoginClient";
import SendablePacket from "../../mmocore/SendablePacket";
import RequestAuthLogin from "../serverpackets/RequestAuthLogin";

export default class GGAuth extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _response = this.readD();

    return true;
  }

  // @Override
  run(): void {
    const spk: SendablePacket<LoginClient> = new RequestAuthLogin();
    spk.Client = this.Client;
    this.Client.sendPacket(spk);
  }
}
