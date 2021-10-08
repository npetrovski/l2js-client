import GameClientPacket from "./GameClientPacket";

export default class ExSendManorList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _castlesSize = this.readD();
    for (let i = 0; i < _castlesSize; i++) {
      const _residenceId = this.readD();
      const _castleName = this.readS();
    }

    return true;
  }
}
