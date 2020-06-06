import GameClientPacket from "./GameClientPacket";
import CharSelected from "./CharSelected";

export default class PartyMemberPosition extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _size = this.readD();
    for (let i = 0; i < _size; i++) {
      const _objId = this.readD();
      const [_x, _y, _z] = this.readLoc();
      const char = this.Client.PartyList.getEntryByObjectId(_objId);
      if (char) {
        char.setLocation(_x, _y, _z);
        char.calculateDistance(this.Client.ActiveChar);
      }
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
