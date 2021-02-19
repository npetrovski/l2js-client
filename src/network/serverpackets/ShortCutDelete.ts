import GameClientPacket from "./GameClientPacket";

export default class ShortCutDelete extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _shortcutSlotBase10 = this.readD();
    const _unk0 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
