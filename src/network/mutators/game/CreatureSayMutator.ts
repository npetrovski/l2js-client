import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import CreatureSay from "@network/incoming/game/x4A_CreatureSay";
import GameClient from "@network/GameClient";

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
      messages: packet.Messages,
    });
  }
}
