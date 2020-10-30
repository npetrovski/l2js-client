import GameClientPacket from "./GameClientPacket";

export default class TutorialShowHtml extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _html = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
