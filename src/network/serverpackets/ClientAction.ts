import GameClientPacket from "./GameClientPacket";

export default class ClientAction extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _playerAction = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
