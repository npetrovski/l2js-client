import LoginClientPacket from "./LoginClientPacket";
import { AccountKickedReason } from "../../../enums/AccountKickedReason";

export default class AccountKicked extends LoginClientPacket {
  Reason!: number;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.Reason = this.readC();

    throw Error("Account kicked. Reason: " + AccountKickedReason[this.Reason]);
    // return true;
  }
}
