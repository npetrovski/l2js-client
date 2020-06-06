import ReceivablePacket from "../../mmocore/ReceivablePacket";
import LoginClient from "../LoginClient";

export default abstract class LoginClientPacket extends ReceivablePacket<LoginClient> {
  // @Override
  read(): boolean {
    try {
      return this.readImpl();
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  abstract readImpl(): boolean;
}
