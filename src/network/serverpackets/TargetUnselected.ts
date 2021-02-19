import GameClientPacket from "./GameClientPacket";

export default class TargetUnselected extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _targetObjectId = this.readD();

    const char = this.Client.CreaturesList.getEntryByObjectId(_targetObjectId);
    if (char) {
      char.Target = null;
    }
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
