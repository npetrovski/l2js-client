import GameClientPacket from "./GameClientPacket";

export default class CreatureSay extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objectId = this.readD();
    const _textType = this.readD();

    const _charName = this.readS(); // or readD() ???

    const _messages = this.readS();
 
    this.logger.info(`CreatureSay: type=${_textType} obj=${_objectId} ${_charName}: `, _messages);
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
