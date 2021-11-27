import AbstractMessagePacket from "./AbstractMessagePacket";

export default class SystemMessage extends AbstractMessagePacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.readMe();

    return true;
  }
}
