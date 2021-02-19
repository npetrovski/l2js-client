import GameClientPacket from "./GameClientPacket";

export default class AcquireSkillDone extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
