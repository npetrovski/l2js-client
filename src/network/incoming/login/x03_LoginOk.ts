import { LoginPacket } from "@network/PacketRegistry";

import LoginClientPacket from "@network/incoming/login/LoginClientPacket";

@LoginPacket(0x03)
export default class x03_LoginOk extends LoginClientPacket {
  LoginOk1!: number;
  LoginOk2!: number;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.LoginOk1 = this.readD();
    this.LoginOk2 = this.readD();

    return true;
  }
}
