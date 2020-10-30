import GameClientPacket from "./GameClientPacket";

export default class HennaRemoveList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _adena = this.readQ();
    const _unk1 = this.readD(); // 00
    const _emptySlots = this.readD();

    for (let i = 0; i < 3; i++) {
      const _dyeId = this.readD();
      const _dyeItemId = this.readD();
      const _cancelCount = this.readD();
      const _unk2 = this.readD();
      const _cancelFee = this.readD();
      const _unk3 = this.readD(); // 00
      const _unk4 = this.readD(); // 01
    }
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
