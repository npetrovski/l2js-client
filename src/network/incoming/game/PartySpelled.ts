import GameClientPacket from "./GameClientPacket";
import L2Buff from "../../../entities/L2Buff";

export default class PartySpelled extends GameClientPacket {
  PartyMemberObjectId!: number;
  PartyMemberBuffs: L2Buff[] = [];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charType = this.readD();
    this.PartyMemberObjectId = this.readD();

    const _size = this.readD();
    for (let i = 0; i < _size; i++) {
      const _skillId = this.readD();
      const _skillLevel = this.readH();
      const _skillTime = this.readD();

      this.PartyMemberBuffs.push(new L2Buff(_skillId, _skillLevel));
    }

    return true;
  }
}
