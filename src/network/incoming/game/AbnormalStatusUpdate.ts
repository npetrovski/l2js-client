import L2Buff from "../../../entities/L2Buff";
import GameClientPacket from "./GameClientPacket";

export default class AbnormalStatusUpdate extends GameClientPacket {
  AbnormalBuffs: L2Buff[] = [];

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _size = this.readH();
    for (let i = 0; i < _size; i++) {
      const buff = new L2Buff();
      buff.Id = this.readD();
      buff.SkillLevel = this.readH();
      buff.RemainingTime = this.readD();

      this.AbnormalBuffs.push(buff);
    }

    return true;
  }
}
