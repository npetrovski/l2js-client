import GameClientPacket from "./GameClientPacket";

export default class SocialAction extends GameClientPacket {
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
