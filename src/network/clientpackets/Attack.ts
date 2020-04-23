import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class Attack extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _attackerObjId = this.readD();
    const event: { object: number; subjects: number[] } = {
      object: _attackerObjId,
      subjects: [],
    };

    const _targetId = this.readD();
    const _damage = this.readD();
    const _flags = this.readC();

    event.subjects.push(_targetId);

    const [_attackerX, _attackerY, _attackerZ] = this.readLoc();

    const _hitSize = this.readH();
    for (let i = 0; i < _hitSize; i++) {
      const _targetId1 = this.readD();
      const _damage1 = this.readD();
      const _flags1 = this.readC();

      event.subjects.push(_targetId1);
    }

    const [_targetX, _targetY, _targetZ] = this.readLoc();

    GlobalEvents.fire(`Attacked`, event);

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
