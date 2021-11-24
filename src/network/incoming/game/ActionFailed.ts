import GameClientPacket from "./GameClientPacket";

export default class ActionFailed extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    // TODO: trigger from mutator
    // GlobalEvents.fire("ActionFailed");

    return true;
  }
}
