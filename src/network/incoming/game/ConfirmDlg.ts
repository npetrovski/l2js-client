import AbstractMessagePacket from "./AbstractMessagePacket";

export default class ConfirmDlg extends AbstractMessagePacket {
  Time!: number;
  RequesterId!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.readMe();

    this.Time = this.readD();
    this.RequesterId = this.readD();

    return true;
  }
}
