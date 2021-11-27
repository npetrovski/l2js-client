import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import UserInfo from "../../incoming/game/UserInfo";

export default class UserInfoMutator extends IMMOClientMutator<
  GameClient,
  UserInfo
> {
  update(packet: UserInfo): void {
    const user = this.Client.ActiveChar;
    if (!user) {
      this.Client.ActiveChar = packet.User;
    } else {
      let eventHandlers = this.Client.ActiveChar._eventHandlers;
      Object.assign(this.Client.ActiveChar, packet.User);
      // Restore event handlers
      this.Client.ActiveChar._eventHandlers = eventHandlers;
    }

    if (!this.Client.CreaturesList.getEntryByObjectId(packet.User.ObjectId)) {
      this.Client.CreaturesList.add(this.Client.ActiveChar);
    }
  }
}
