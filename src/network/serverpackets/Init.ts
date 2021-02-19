import LoginClientPacket from "./LoginClientPacket";
import NewCrypt from "../../security/crypt/NewCrypt";

export default class Init extends LoginClientPacket {
  // @Override
  readImpl(): boolean {

    const _id: number = this.readC();
    this.Client.Session.sessionId = this.readD();
    const _protocolVersion: number = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }

}
