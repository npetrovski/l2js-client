import l2 from "./login";
import { EConfirmDlg } from "l2js-client/events/EventTypes";
import DlgAnswer from "l2js-client/network/outgoing/DlgAnswer";

const RESURRECTION_REQUEST_BY_C1_FOR_S2_XP = 1510;

l2.on("ConfirmDlg", (e: EConfirmDlg) => {
  if (e.data.messageId === RESURRECTION_REQUEST_BY_C1_FOR_S2_XP) {
    l2.GameClient.sendPacket(
      new DlgAnswer(e.data.messageId, 1, e.data.requesterId)
    );
  }
});
