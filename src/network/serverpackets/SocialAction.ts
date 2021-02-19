import GameClientPacket from "./GameClientPacket";

export default class SocialAction extends GameClientPacket {
  static readonly LEVEL_UP: number = 2122;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _actionId = this.readD();


    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
