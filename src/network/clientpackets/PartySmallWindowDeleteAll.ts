import GameClientPacket from "./GameClientPacket";

export default class PartySmallWindowDeleteAll extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.Client.PartyList.clear();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
