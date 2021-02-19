import GameClientPacket from "./GameClientPacket";

export default class StaticObject extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _staticObjectId = this.readD();
    const _objectId = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
