import GameClientPacket from "./GameClientPacket";

export default class NpcSay extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charObjId = this.readD();
    const _textType = this.readD();
    const _npcId = this.readD();
    const _message = this.readS();

    this.logger.info("NpcSay", _message);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
