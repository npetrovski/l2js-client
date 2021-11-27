import GameClientPacket from "./GameClientPacket";

export default class PartySmallWindowDeleteAll extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
