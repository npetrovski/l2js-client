import L2Character from "../../../entities/L2Character";
import SerializablePacket from "../../../mmocore/SerializablePacket";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";

export default class CharInfoMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const l2char = new L2Character();
    l2char.ObjectId = packet.get("player_oid") as number;
    l2char.X = packet.get("location_x") as number;
    l2char.Y = packet.get("location_y") as number;
    l2char.Z = packet.get("location_z") as number;
    l2char.Name = packet.get("name") as string;
    l2char.Race = packet.get("race") as number;
    l2char.Sex = packet.get("sex") as number;
    l2char.BaseClassId = packet.get("visible_class") as number;
    l2char.Karma = packet.get("karma") as number;
    l2char.MAtkSpd = packet.get("casting_speed") as number;
    l2char.PAtkSpd = packet.get("attack_speed") as number;
    l2char.RunSpeed = packet.get("running_speed_on_ground") as number;
    l2char.WalkSpeed = packet.get("walking_speed_on_ground") as number;
    l2char.SwimRunSpeed = packet.get("running_speed_in_water") as number;
    l2char.SwimWalkSpeed = packet.get("walking_speed_in_water") as number;
    l2char.FlyRunSpeed = packet.get("running_speed_flying_mounted") as number;
    l2char.FlyWalkSpeed = packet.get("walking_speed_flying_mounted") as number;
    l2char.SpeedMultiplier = packet.get("movement_speed_multiplier") as number;
    l2char.AtkSpdMultiplier = packet.get("attack_speed_multiplier") as number;
    l2char.Title = packet.get("title") as string;
    l2char.IsSitting = (packet.get("is_sitting") as number) === 0; // standing = 1 sitting = 0
    l2char.IsRunning = (packet.get("is_running") as number) === 1; // running = 1 walking = 0
    l2char.IsInCombat = (packet.get("is_in_combat") as number) === 1;
    l2char.RecommHave = packet.get("evaluation_score") as number;
    l2char.ClassId = packet.get("current_class") as number;
    l2char.IsNoble = (packet.get("is_noble") as number) === 1;
    l2char.IsHero = (packet.get("is_hero") as number) === 1;
    l2char.IsFishing = (packet.get("is_fishing") as number) === 1;
    l2char.Heading = packet.get("yaw") as number;

    ///
    const char = this.Client.CreaturesList.getEntryByObjectId(l2char.ObjectId);
    if (!char) {
      l2char.calculateDistance(this.Client.ActiveChar);
      this.Client.CreaturesList.add(l2char);
    } else {
      char.X = l2char.X;
      char.Y = l2char.Y;
      char.Z = l2char.Z;
      char.Name = l2char.Name;

      char.Race = l2char.Race;
      char.Sex = l2char.Sex;
      char.BaseClassId = l2char.BaseClassId;
      char.RunSpeed = l2char.RunSpeed;
      char.WalkSpeed = l2char.WalkSpeed;
      char.SpeedMultiplier = l2char.SpeedMultiplier;
      char.Title = l2char.Title;
      char.IsRunning = l2char.IsRunning;
      char.IsInCombat = l2char.IsInCombat;
      char.ClassId = l2char.ClassId;
      char.IsNoble = l2char.IsNoble;
      char.IsHero = l2char.IsHero;
      char.Heading = l2char.Heading;

      char.calculateDistance(this.Client.ActiveChar);
    }

    GlobalEvents.fire("CharInfo", { creature: char });
  }
}
