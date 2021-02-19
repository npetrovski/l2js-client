import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class MyTargetSelected extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _objId = this.readD();
    const _levelDifference = this.readH();

    const npc = this.Client.CreaturesList.getEntryByObjectId(_objId);
    if (npc) {
      this.Client.ActiveChar.Target = npc;
    }

    GlobalEvents.fire("MyTargetSelected", {
      objectId: _objId,
    });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
