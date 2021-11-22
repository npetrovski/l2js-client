import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import UserInfo from "../../incoming/game/UserInfo";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import L2User from "../../../entities/L2User";

export default class UserInfoMutator extends IMMOClientMutator<
  GameClient,
  UserInfo
> {
  update(packet: UserInfo): void {
    console.log("Mutator setting user " + packet.User.X);
    this.Client.ActiveChar = packet.User;
    this.Client.CreaturesList.add(packet.User);
  }
}
