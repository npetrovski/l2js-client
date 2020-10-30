import GameClientPacket from "./GameClientPacket";

export default class ExShowContactList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    const _contacts = this.readD();
    for (let i = 0; i < _contacts; i++) {
      const _name = this.readS();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
