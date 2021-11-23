import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class ExVoteSystemInfoMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    this.Client.ActiveChar.RecommLeft = packet.get("recomendations") as number;
    this.Client.ActiveChar.RecommHave = packet.get("evaluation_score") as number;
  }
}
