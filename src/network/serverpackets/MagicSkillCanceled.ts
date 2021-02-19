import GameClientPacket from "./GameClientPacket";

export default class MagicSkillCanceled extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
