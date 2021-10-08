import GameClientPacket from "./GameClientPacket";

export default class TutorialCloseHtml extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
