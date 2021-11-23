import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";
import { GlobalEvents } from "../../../mmocore/EventEmitter";
import SerializablePacket from "../../../mmocore/SerializablePacket";

export default class UserInfoMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const char = this.Client.ActiveChar;

    char.ObjectId = packet.get("my_oid") as number;

    char.X = packet.get("location_x") as number;
    char.Y = packet.get("location_y") as number;
    char.Z = packet.get("location_z") as number;

    char.Name = packet.get("name") as string;
    char.Race = packet.get("race") as number;
    char.Sex = packet.get("sex") as number;
    char.BaseClassId = packet.get("visible_class") as number;
    char.Level = packet.get("level") as number;
    char.Exp = packet.get("xp") as number;
    char.STR = packet.get("str") as number;
    char.DEX = packet.get("dex") as number;
    char.CON = packet.get("con") as number;
    char.INT = packet.get("int") as number;
    char.WIT = packet.get("wit") as number;
    char.MEN = packet.get("men") as number;
    char.MaxHp = packet.get("maximum_hp") as number;
    char.Hp = packet.get("current_hp") as number;
    char.MaxMp = packet.get("maximum_mp") as number;
    char.Mp = packet.get("current_mp") as number;
    char.Sp = packet.get("sp") as number;
    char.Load = packet.get("current_carried_weight") as number; // inventory => totalWeight
    char.MaxLoad = packet.get("maximum_carried_weight") as number;
    char.PAtk = packet.get("p_atk") as number;
    char.PAtkSpd = packet.get("attack_speed") as number;
    char.PDef = packet.get("p_def") as number;
    char.EvasionRate = packet.get("evasion") as number;
    char.Accuracy = packet.get("accuracy") as number;
    char.Crit = packet.get("critical") as number;
    char.MAtk = packet.get("m_atk") as number;
    char.MAtkSpd = packet.get("casting_speed") as number;
    char.MDef = packet.get("m_def") as number;
    char.Karma = packet.get("karma") as number;

    char.RunSpeed = packet.get("running_speed_on_ground") as number;
    char.WalkSpeed = packet.get("walking_speed_on_ground") as number;
    char.SwimRunSpeed = packet.get("running_speed_in_water") as number;
    char.SwimWalkSpeed = packet.get("walking_speed_in_water") as number;
    char.FlyRunSpeed = packet.get("running_speed_flying_mounted") as number;
    char.FlyWalkSpeed = packet.get("walking_speed_flying_mounted") as number;

    char.SpeedMultiplier = packet.get("movement_speed_multiplier") as number;
    char.AtkSpdMultiplier = packet.get("attack_speed_multiplier") as number;

    char.Title = packet.get("title") as string;
    char.PkKills = packet.get("pk_count") as number;
    char.PvpKills = packet.get("pvp_count") as number;

    char.RecommLeft = packet.get("recommendations") as number;
    char.RecommHave = packet.get("evaluation_score") as number;

    char.ClassId = packet.get("class") as number;

    char.MaxCp = packet.get("maximum_cp") as number;
    char.Cp = packet.get("current_cp") as number;
    char.IsNoble = (packet.get("is_noble") as number) === 1;
    char.IsHero = (packet.get("is_hero") as number) === 1;
    char.IsFishing = (packet.get("is_fishing") as number) === 1;
    char.IsRunning = (packet.get("is_running") as number) === 1;

    char.AtkElementPower = packet.get("attack_element_power") as number;

    char.Fame = packet.get("fame") as number;
  }
}
