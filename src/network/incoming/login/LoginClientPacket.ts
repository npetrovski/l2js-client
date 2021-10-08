import ReceivablePacket from "../../../mmocore/ReceivablePacket";

export default abstract class LoginClientPacket extends ReceivablePacket {
  // @Override
  read(): boolean {
    try {
      return this.readImpl();
    } catch (err) {
      this.logger.error(err);
      return false;
    }
  }

  abstract readImpl(): boolean;
}
