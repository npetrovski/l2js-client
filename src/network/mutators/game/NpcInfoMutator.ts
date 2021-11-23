import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import L2Mob from "../../../entities/L2Mob";
import L2Npc from "../../../entities/L2Npc";
import L2Creature from "../../../entities/L2Creature";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class NpcInfoMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const objectId = packet.get("npc_oid") as number;
    const idTemplate = (packet.get("npc") as number) - 1000000;
    const isAttackable = (packet.get("is_attackable") as number) === 1;

    let creature: L2Creature = {} as L2Creature;
    if (isAttackable) {
      creature = new L2Mob();
      creature.Name = `Mob #${idTemplate}`;
    } else {
      creature = new L2Npc();
      creature.Name = `NPC #${idTemplate}`;
    }

    creature.Id = idTemplate;
    creature.ObjectId = objectId;
    creature.IsAttackable = isAttackable;
    creature.X = packet.get("location_x") as number;
    creature.Y = packet.get("location_y") as number;
    creature.Z = packet.get("location_z") as number;

    creature.Heading = packet.get("yaw") as number;
    creature.MAtkSpd = packet.get("casting_speed") as number;
    creature.PAtkSpd = packet.get("attack_speed") as number;
    creature.RunSpeed = packet.get("running_speed_on_ground") as number;
    creature.WalkSpeed = packet.get("walking_speed_on_ground") as number;
    creature.SwimRunSpeed = packet.get("running_speed_in_water") as number;
    creature.SwimWalkSpeed = packet.get("walking_speed_in_water") as number;
    creature.FlyRunSpeed = packet.get("running_speed_flying_mounted") as number;
    creature.FlyWalkSpeed = packet.get("walking_speed_flying_mounted") as number;
    creature.SpeedMultiplier = packet.get("movement_speed_multiplier") as number;
    creature.AtkSpdMultiplier = packet.get("attack_speed_multiplier") as number;
    creature.IsRunning = (packet.get("is_running") as number) === 1;
    creature.IsInCombat = (packet.get("is_in_combat") as number) === 1;
    creature.IsDead = (packet.get("is_dead") as number) === 1;
    creature.Title = packet.get("title") as string;
    creature.IsTargetable = (packet.get("is_targetable") as number) === 1;

    const npc = this.Client.CreaturesList.getEntryByObjectId(creature.ObjectId);
    if (!npc) {
      this.Client.CreaturesList.add(creature);
      creature.calculateDistance(this.Client.ActiveChar);
    } else {
      npc.ObjectId = creature.ObjectId;
      npc.IsAttackable = creature.IsAttackable;
      npc.X = creature.X;
      npc.Y = creature.Y;
      npc.Z = creature.Z;
      npc.Heading = creature.Heading;
      npc.RunSpeed = creature.RunSpeed;
      npc.WalkSpeed = creature.WalkSpeed;
      npc.SwimRunSpeed = creature.SwimRunSpeed;
      npc.SwimWalkSpeed = creature.SwimWalkSpeed;
      npc.FlyRunSpeed = creature.FlyRunSpeed;
      npc.FlyWalkSpeed = creature.FlyWalkSpeed;
      npc.SpeedMultiplier = creature.SpeedMultiplier;
      npc.IsRunning = creature.IsRunning;
      npc.IsInCombat = creature.IsInCombat;
      npc.IsDead = creature.IsDead;
      npc.Name = creature.Name;
      npc.Title = creature.Title;
      npc.IsTargetable = creature.IsTargetable;

      npc.calculateDistance(this.Client.ActiveChar);
    }
  }
}
