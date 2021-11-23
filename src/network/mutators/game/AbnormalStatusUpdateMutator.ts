import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import L2Buff from "../../../entities/L2Buff";

export default class AbnormalStatusUpdateMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const list = this.Client.BuffsList;
    if (list) {
      (packet.get("effect_list") as []).forEach((buff: any) => {
        const l2buff = new L2Buff();
        l2buff.Id = buff.skill as number;
        l2buff.SkillLevel = buff.level as number;
        l2buff.RemainingTime = buff.time_left as number;

        list.removeById(l2buff.Id);
        list.add(l2buff);

        if (l2buff.RemainingTime > 0) {
          l2buff.autoCountDown(() => {
            list.removeById(buff.Id);
          });
        }
      });
    }
  }
}
