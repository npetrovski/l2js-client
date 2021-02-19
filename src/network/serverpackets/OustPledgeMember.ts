import GameClientPacket from "./GameClientPacket";

export default class OustPledgeMember extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _dismissedYesNo = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
