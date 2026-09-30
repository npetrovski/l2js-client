import { LoginPacket } from "@network/PacketRegistry";

import LoginClientPacket from "@network/incoming/login/LoginClientPacket";
import { AccountKickedReason } from "@enums/AccountKickedReason";

@LoginPacket(0x02)
export default class x02_AccountKicked extends LoginClientPacket {
  Reason!: number;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.Reason = this.readC();

    throw Error("Account kicked. Reason: " + AccountKickedReason[this.Reason]);
    // return true;
  }
}
