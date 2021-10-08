import { GlobalEvents } from "../../../mmocore/EventEmitter";
import AbstractMessagePacket from "./AbstractMessagePacket";

export default class ConfirmDlg extends AbstractMessagePacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.readMe();

    const _time = this.readD();
    const _requesterId = this.readD();

    GlobalEvents.fire("ConfirmDlg", {
      messageId: this.messageId,
      params: this.messageParams,
      time: _time,
      requesterId: _requesterId
    });

    return true;
  }
}
