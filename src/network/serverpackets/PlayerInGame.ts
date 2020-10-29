import GameClientPacket from "./GameClientPacket";

export default class PlayerInGame extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _players = this.readH();

    for (let i = 0; i < _players; i++) {
      const _player = this.readS();
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
