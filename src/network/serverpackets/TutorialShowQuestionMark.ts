import GameClientPacket from "./GameClientPacket";

export default class TutorialShowQuestionMark extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _markId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
