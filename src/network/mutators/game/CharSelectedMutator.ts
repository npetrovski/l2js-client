import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import CharSelected from "../../incoming/game/CharSelected";

export default class CharSelectedMutator extends IMMOClientMutator<
  GameClient,
  CharSelected  
> {
  update(packet: CharSelected): void {
    this.Client.ActiveChar = packet.User;
    if (!this.Client.CreaturesList.getEntryByObjectId(packet.User.ObjectId)) {
      this.Client.CreaturesList.add(this.Client.ActiveChar);
    }
  }
}
