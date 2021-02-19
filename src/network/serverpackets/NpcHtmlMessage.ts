import { GlobalEvents } from "../../mmocore/EventEmitter";
import GameClientPacket from "./GameClientPacket";

export default class NpcHtmlMessage extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _npcObjId = this.readD();
    const _html = this.readS();

    GlobalEvents.fire("NpcHtmlMessage", {
      npcObjectId: _npcObjId,
      html: _html
    });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
