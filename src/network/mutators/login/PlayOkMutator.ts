import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import PlayOk from "../../incoming/login/PlayOk";
import LoginClient from "../../LoginClient";

export default class PlayOkMutator extends IMMOClientMutator<
  LoginClient,
  PlayOk
> {
  update(packet: PlayOk): void {
    this.Client.Session.playOk1 = packet.PlayOk1;
    this.Client.Session.playOk2 = packet.PlayOk2;
  }
}
