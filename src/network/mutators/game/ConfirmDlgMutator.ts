import { ConfirmDlgType } from "../../../enums/ConfirmDlgType";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import ConfirmDlg from "../../incoming/game/ConfirmDlg";

export default class ConfirmDlgMutator extends IMMOClientMutator<
  GameClient,
  ConfirmDlg
> {
  update(packet: ConfirmDlg): void {
    this.Client.LastConfirmMessageId = packet.messageId;
    this.Client.LastConfirmMessageRequesterId = packet.RequesterId;

    this.fire("ConfirmDlg", {
      messageId: packet.messageId,
      type:
        Object.values(ConfirmDlgType).indexOf(packet.messageId) > -1
          ? ConfirmDlgType[packet.messageId]
          : ConfirmDlgType.UNKNOWN,
      isResurrect:
        packet.messageId ===
          ConfirmDlgType.RESURRECTION_REQUEST_BY_C1_FOR_S2_XP ||
        packet.messageId === ConfirmDlgType.RESURRECT_USING_CHARM_OF_COURAGE,
      params: packet.messageParams,
      time: packet.Time,
      requesterId: packet.RequesterId,
    });
  }
}
