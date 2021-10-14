import l2 from "./login";
import { EConfirmDlg } from "l2js-client/events/EventTypes";

l2.on("ConfirmDlg", (e: EConfirmDlg) => {
  if (e.data.isResurrect) {
    l2.acceptResurrect();
  }
});
