import GameClientPacket from "./GameClientPacket";

export default class FriendList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _friendsSize = this.readD();
    for (let i = 0; i < _friendsSize; i++) {
      const _objId = this.readD();
      const _name = this.readS();
      const _online = this.readD(); // 0x01 = online
      const _objIdIfOnline = this.readD();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
