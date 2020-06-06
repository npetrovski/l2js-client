import GameClientPacket from "./GameClientPacket";
import Appearing from "../clientpackets/Appearing";

export default class TeleportToLocation extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _targetObjectId = this.readD();
    const [_x, _y, _z] = this.readLoc();
    const _unkn1 = this.readD();
    const _heading = this.readD();

    if (_targetObjectId === this.Client.ActiveChar.ObjectId) {
      this.Client.CreaturesList.clear();
      this.Client.DroppedItems.clear();
    }

    const creature = this.Client.CreaturesList.getEntryByObjectId(_targetObjectId);
    if (creature) {
      creature.setLocation(_x, _y, _z);
    }

    return true;
  }

  // @Override
  run(): void {
    this.Client.sendPacket(new Appearing());
  }
}
