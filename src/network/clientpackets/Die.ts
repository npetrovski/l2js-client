import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class Die extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjId = this.readD();
    const _canTeleport = this.readD() === 1;

    const _hideOutId = this.readD();
    const _toCastle = this.readD();
    const _toSiegeHQ = this.readD();

    const _sweepable = this.readD() === 1; // blue glow
    const _staticRes = this.readD() === 1; // to Fixed

    const _toFortress = this.readD();

    const creature = this.Client.CreaturesList.getEntryByObjectId(_charObjId);
    if (creature) {
      creature.Target = null;
      creature.IsDead = true;
      if (creature.ObjectId === this.Client.ActiveChar.ObjectId) {
        this.Client.BuffsList.clear();
      }

      GlobalEvents.fire("Die", { creature, isSpoiled: _sweepable });
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
