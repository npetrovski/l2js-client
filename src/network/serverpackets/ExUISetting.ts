import GameClientPacket from "./GameClientPacket";

export default class ExUISetting extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();


    const _buffsSize = this.readD();
    const _categories = this.readD();
    const _numKeyCt = this.readD();
    for (let i = 0; i < _numKeyCt; i++) {
      const _catElList1 = this.readC();
      for (let c1 = 0; c1 < _catElList1; c1++) {
        const _cmd = this.readC();
      }

      const _catElList2 = this.readC();
      for (let c2 = 0; c2 < _catElList2; c2++) {
        const _cmd = this.readC();
      }

      const _keyElList = this.readD();
      for (let c3 = 0; c3 < _keyElList; c3++) {
        const _cmdId = this.readD();
        const _keyId = this.readD();
        const _toggleKey1 = this.readD();
        const _toggleKey2 = this.readD();
        const _showStatus = this.readD();
      }
    }

    const _unk11 = this.readD();
    const _unk10 = this.readD();


    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
