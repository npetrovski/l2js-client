import GameClientPacket from "./GameClientPacket";

export default class ValidateLocation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();
    const [_x, _y, _z] = this.readLoc();
    const _heading = this.readD();

    const creature = this.Client.CreaturesList.getEntryByObjectId(_objId);
    if (creature) {
      creature.setLocation(_x, _y, _z, _heading);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
