import SendablePacket from "../../mmocore/SendablePacket";
import LoginClient from "../LoginClient";
import RequestAuthLogin from "../clientpackets/RequestAuthLogin";
import LoginClientPacket from "./LoginClientPacket";

export default class GGAuth extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _response = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
