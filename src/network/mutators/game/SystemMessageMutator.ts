import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import SystemMessage from "../../incoming/game/SystemMessage";
import GameClient from "../../GameClient";

export default class SystemMessageMutator extends IMMOClientMutator<
  GameClient,
  SystemMessage
> {
  update(packet: SystemMessage): void {
    this.fire("SystemMessage", {
      messageId: packet.messageId,
      params: packet.messageParams,
    });
  }
}
