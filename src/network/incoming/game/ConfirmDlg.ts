import AbstractMessagePacket from "./AbstractMessagePacket";

export default class ConfirmDlg extends AbstractMessagePacket {
  Time!: number;
  RequesterId!: number;
  RequesterName!: String;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.RequesterId = this.readD();
    this.readD();
    this.readD();
    this.RequesterName = this.readS();
    this.readD();
    this.readD();

    return true;
  }
}
