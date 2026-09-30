import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import SystemMessage from "@network/incoming/game/x62_SystemMessage";
import GameClient from "@network/GameClient";

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
