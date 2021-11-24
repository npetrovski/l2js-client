import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import UserInfo from "../../incoming/game/UserInfo";

import L2User from "../../../entities/L2User";

export default class UserInfoMutator extends IMMOClientMutator<
  GameClient,
  UserInfo
> {
  update(packet: UserInfo): void {
    const user = this.Client.ActiveChar;
    if (!user) {
      this.Client.ActiveChar = packet.User;
      this.Client.CreaturesList.add(packet.User);
    } else {
      this.Client.ActiveChar = {
        ...user,
        ...packet.User
      } as L2User;
    }
  }
}
