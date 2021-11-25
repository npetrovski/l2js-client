import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import CreatureSay from "../../incoming/game/CreatureSay";
import GameClient from "../../GameClient";

export default class CreatureSayMutator extends IMMOClientMutator<
  GameClient,
  CreatureSay
> {
  update(packet: CreatureSay): void {
    this.fire("CreatureSay", {
      objectId: packet.ObjectId,
      type: packet.Type,
      charName: packet.CharName,
      npcStringId: packet.NpcStringId,
      messages: packet.Messages
    });
  }
}
