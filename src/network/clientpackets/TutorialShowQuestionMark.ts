import GameClientPacket from "./GameClientPacket";

export default class TutorialShowQuestionMark extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _markId = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
