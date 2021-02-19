import GameClientPacket from "./GameClientPacket";

export default class OustPartyMember extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _success = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
