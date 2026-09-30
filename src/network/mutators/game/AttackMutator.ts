import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import Attack from "@network/incoming/game/x33_Attack";
import GameClient from "@network/GameClient";

export default class AttackMutator extends IMMOClientMutator<
  GameClient,
  Attack
> {
  update(packet: Attack): void {
    this.fire(`Attacked`, {
      object: packet.AttackerObjectId,
      subjects: packet.Subjects,
    });
  }
}
