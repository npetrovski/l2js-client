import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import ExVoteSystemInfo from "../../incoming/game/ExVoteSystemInfo";
import { GlobalEvents } from "../../../mmocore/EventEmitter";

export default class ExVoteSystemInfoMutator extends IMMOClientMutator<
  GameClient,
  ExVoteSystemInfo
> {
  update(packet: ExVoteSystemInfo): void {
    this.Client.ActiveChar.RecommLeft = packet.RecommLeft;
    this.Client.ActiveChar.RecommHave = packet.RecommHave;
  }
}
