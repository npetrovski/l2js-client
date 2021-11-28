import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import UserInfo from "../../incoming/game/UserInfo";

export default class UserInfoMutator extends IMMOClientMutator<
  GameClient,
  UserInfo
> {
  update(packet: UserInfo): void {
    this.Client.ActiveChar = packet.User;
    this.Client.CreaturesList.add(packet.User);
  }
}
