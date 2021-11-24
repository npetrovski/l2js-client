import AbstractMessagePacket from "./AbstractMessagePacket";

export default class SystemMessage extends AbstractMessagePacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.readMe();

    // TODO: Trigger from mutator
    // GlobalEvents.fire("SystemMessage", {
    //   messageId: this.messageId,
    //   params: this.messageParams
    // });
    return true;
  }
}
