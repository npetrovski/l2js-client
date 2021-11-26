import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import NpcInfo from "../../incoming/game/NpcInfo";

export default class NpcInfoMutator extends IMMOClientMutator<
  GameClient,
  NpcInfo
> {
  update(packet: NpcInfo): void {
    const npc = this.Client.CreaturesList.getEntryByObjectId(packet.ObjectId);
    if (!npc) {
      this.Client.CreaturesList.add(packet.Creature);

      packet.Creature.calculateDistance(this.Client.ActiveChar);
    } else {
      npc.ObjectId = packet.Creature.ObjectId;
      npc.IsAttackable = packet.Creature.IsAttackable;
      npc.X = packet.Creature.X;
      npc.Y = packet.Creature.Y;
      npc.Z = packet.Creature.Z;
      npc.Heading = packet.Creature.Heading;
      npc.RunSpeed = packet.Creature.RunSpeed;
      npc.WalkSpeed = packet.Creature.WalkSpeed;
      npc.SwimRunSpeed = packet.Creature.SwimRunSpeed;
      npc.SwimWalkSpeed = packet.Creature.SwimWalkSpeed;
      npc.FlyRunSpeed = packet.Creature.FlyRunSpeed;
      npc.FlyWalkSpeed = packet.Creature.FlyWalkSpeed;
      npc.SpeedMultiplier = packet.Creature.SpeedMultiplier;
      npc.IsRunning = packet.Creature.IsRunning;
      npc.IsInCombat = packet.Creature.IsInCombat;
      npc.IsDead = packet.Creature.IsDead;
      npc.Name = packet.Creature.Name;
      npc.Title = packet.Creature.Title;
      npc.IsTargetable = packet.Creature.IsTargetable;

      npc.calculateDistance(this.Client.ActiveChar);
    }
  }
}
