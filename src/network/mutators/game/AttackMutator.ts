import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import Attack from "../../incoming/game/Attack";
import GameClient from "../../GameClient";

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
