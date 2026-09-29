import GameClientPacket from "./GameClientPacket";

export default class xA6_TutorialShowHtml extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _html = this.readS();

    return true;
  }
}
