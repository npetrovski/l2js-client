import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import AbnormalStatusUpdate from "../../incoming/game/AbnormalStatusUpdate";
import GameClient from "../../GameClient";

export default class AbnormalStatusUpdateMutator extends IMMOClientMutator<
  GameClient,
  AbnormalStatusUpdate
> {
  update(packet: AbnormalStatusUpdate): void {
    const list = this.Client.BuffsList;
    if (list) {
      packet.AbnormalBuffs.forEach(buff => {
        list.removeById(buff.Id);
        list.add(buff);
        if (buff.RemainingTime > 0) {
          buff.autoCountDown(() => {
            list.removeById(buff.Id);
          });
        }
      });
    }
  }
}
