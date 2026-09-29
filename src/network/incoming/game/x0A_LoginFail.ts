import GameClientPacket from "./GameClientPacket";

export default class x0A_LoginFail extends GameClientPacket {
  Reason = 0;

  // @Override
  readImpl(): boolean {
    this.readC();
    this.Reason = this.readD();
    return true;
  }
}
