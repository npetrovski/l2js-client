import GameClientPacket from "@network/incoming/game/GameClientPacket";

export default class x00_VersionCheck extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }
}
