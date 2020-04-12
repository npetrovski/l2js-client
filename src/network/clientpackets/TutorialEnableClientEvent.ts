import GameClientPacket from "./GameClientPacket";

export default class TutorialEnableClientEvent extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _eventId = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
