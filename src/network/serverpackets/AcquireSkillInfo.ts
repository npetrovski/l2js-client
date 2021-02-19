import GameClientPacket from "./GameClientPacket";

export default class AcquireSkillInfo extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _skillId = this.readD();
    const _skillLevel = this.readD();
    const _skillRequiredSP = this.readD();
    const _skillItemsCount = this.readD();

    for(let i = 0; i < _skillItemsCount; i++) {
      const _itemType = this.readD();
      const _itemId = this.readD();
      const _itemCount = this.readD();
      const _itemInventorySlot = this.readD();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
