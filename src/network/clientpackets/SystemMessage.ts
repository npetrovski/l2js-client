import AbstractMessagePacket from "./AbstractMessagePacket";

export default class SystemMessage extends AbstractMessagePacket<SystemMessage> {
  // @Override
  readImpl(): boolean {
    this.readMe();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
