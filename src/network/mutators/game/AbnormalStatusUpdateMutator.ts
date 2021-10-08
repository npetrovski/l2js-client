import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import AbnormalStatusUpdate from "../../incoming/game/AbnormalStatusUpdate";
import GameClient from "../../GameClient";

export default class AbnormalStatusUpdateMutator extends IMMOClientMutator<
  GameClient,
  AbnormalStatusUpdate
> {
  update(packet: AbnormalStatusUpdate): void {
    packet.AbnormalBuffs.forEach(buff => {
      this.Client.BuffsList.removeById(buff.Id);
      this.Client.BuffsList.add(buff);
      if (buff.RemainingTime > 0) {
        buff.autoCountDown(() => {
          this.Client.BuffsList.removeById(buff.Id);
        });
      }
    });
  }
}
