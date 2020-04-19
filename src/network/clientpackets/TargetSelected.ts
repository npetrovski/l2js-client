import GameClientPacket from "./GameClientPacket";

export default class TargetSelected extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objectId = this.readD();
    const _targetObjectId = this.readD();

    const [_x, _y, _z] = this.readLoc();

    const _unkn1 = this.readD();

    const char = this.Client.CreaturesList.getEntryByObjectId(_objectId);
    if (!char) {
      return true;
    }

    const target = this.Client.CreaturesList.getEntryByObjectId(_targetObjectId);
    if (target) {
      char.Target = target;
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
