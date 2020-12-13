import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../entities/L2PartyMember";
import { GlobalEvents } from "../../mmocore/EventEmitter";
import L2Buff from "../../entities/L2Buff";

export default class PartySpelled extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charType = this.readD();
    const _objectId = this.readD();

    const creature = this.Client.PartyList.getEntryByObjectId(_objectId);
    if (creature) {
      creature.Buffs.clear();
    }

    const _size = this.readD();
    for (let i = 0; i < _size; i++) {
      const _skillId = this.readD();
      const _skillLevel = this.readH();
      const _skillTime = this.readD();
      if (creature) {
        creature.Buffs.add(new L2Buff(_skillId, _skillLevel));
      }
    }

    GlobalEvents.fire("PartySpelled", { creature });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
