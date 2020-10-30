import GameClientPacket from "./GameClientPacket";

export default class GetItem extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _playerId = this.readD();
    const _objId = this.readD();

    const [x, y, z] = this.readLoc();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
