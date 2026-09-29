import GameClientPacket from "./GameClientPacket";

export default class x50_PartySmallWindowDeleteAll extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
