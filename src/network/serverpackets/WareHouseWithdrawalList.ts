import GameClientPacket from "./GameClientPacket";

export default class WareHouseWithdrawalList extends GameClientPacket {

  static readonly PRIVATE: number = 1;
  static readonly CLAN: number = 4;
  static readonly CASTLE: number = 3; // not sure
  static readonly FREIGHT: number = 1;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _whType = this.readH();
    const _playerAdena = this.readQ();

    const _size = this.readH();

    for (let i = 0; i < _size; i++) {
      const _item = this.readItem();
      const _objId = this.readD();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
