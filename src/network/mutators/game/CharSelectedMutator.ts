import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import CharSelected from "../../incoming/game/CharSelected";

export default class CharSelectedMutator extends IMMOClientMutator<
  GameClient,
  CharSelected
> {
  update(packet: CharSelected): void {
    this.Client.ActiveChar = packet.User;
  }
}
