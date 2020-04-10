import LoginClientPacket from "./LoginClientPacket";
import { AccountKickedReason } from "../../enums/AccountKickedReason";

export default class AccountKicked extends LoginClientPacket {
  //@Override
  readImpl(): boolean {
    let _id: number = this.readC();
    let _reason = this.readC();

    throw Error("Account kicked. Reason: " + AccountKickedReason[_reason]);
    return true;
  }

  //@Override
  run(): void {}
}
