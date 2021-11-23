import { ConfirmDlgType } from "../../../enums/ConfirmDlgType";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";

export default class ConfirmDlgMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const messageId = packet.get("message") as number;
    this.Client.LastConfirmMessageId = messageId;
    this.Client.LastConfirmMessageRequesterId = packet.get("requester_id") as number;

    GlobalEvents.fire("ConfirmDlg", {
      messageId,
      type: Object.values(ConfirmDlgType).indexOf(messageId) > -1 ? ConfirmDlgType[messageId] : ConfirmDlgType.UNKNOWN,
      isResurrect:
        messageId === ConfirmDlgType.RESURRECTION_REQUEST_BY_C1_FOR_S2_XP ||
        messageId === ConfirmDlgType.RESURRECT_USING_CHARM_OF_COURAGE,
      params: [],
      time: packet.get("time_to_answer") as number,
      requesterId: packet.get("requester_id") as number,
    });
  }
}
