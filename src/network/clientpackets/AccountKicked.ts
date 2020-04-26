import LoginClientPacket from "./LoginClientPacket";
import { AccountKickedReason } from "../../enums/AccountKickedReason";

export default class AccountKicked extends LoginClientPacket {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _reason = this.readC();

    throw Error("Account kicked. Reason: " + AccountKickedReason[_reason]);
    // return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
