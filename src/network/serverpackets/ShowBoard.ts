import GameClientPacket from "./GameClientPacket";

export default class ShowBoard extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _top = this.readS();
    const _up = this.readS();
    const _favorite = this.readS();
    const _addFav = this.readS();
    const _region = this.readS();
    const _clan = this.readS();

    const _content = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
