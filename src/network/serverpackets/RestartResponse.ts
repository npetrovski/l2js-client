import GameClientPacket from "./GameClientPacket";

export default class RestartResponse extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _canReturnToCharacterSelection = this.readD() === 1; // 1 or 0
    const _message = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
