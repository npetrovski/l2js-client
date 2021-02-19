import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class Say2 extends GameClientPacket {

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objectId = this.readD();
    const _textType = this.readD();
    const _charName = this.readS();

    const _message = this.readS();

    GlobalEvents.fire("CreatureSay", {
      objectId: _objectId,
      type: _textType,
      charName: _charName,
      message: _message,
    });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
