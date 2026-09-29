import AbstractMessagePacket from "./AbstractMessagePacket";

export default class x62_SystemMessage extends AbstractMessagePacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.readMe();

    return true;
  }
}
