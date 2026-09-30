import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import ExVoteSystemInfo from "@network/incoming/game/xFE_xC9_ExVoteSystemInfo";

export default class ExVoteSystemInfoMutator extends IMMOClientMutator<
  GameClient,
  ExVoteSystemInfo
> {
  update(packet: ExVoteSystemInfo): void {
    this.Client.ActiveChar.RecommLeft = packet.RecommLeft;
    this.Client.ActiveChar.RecommHave = packet.RecommHave;
  }
}
