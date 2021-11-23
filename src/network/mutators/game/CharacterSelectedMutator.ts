import SerializablePacket from "../../../mmocore/SerializablePacket";
import IMMOClientMutator from "../../../mmocore/IMMOClientMutator";
import GameClient from "../../GameClient";

export default class CharacterSelectedMutator extends IMMOClientMutator<GameClient, SerializablePacket> {
  update(packet: SerializablePacket): void {
    const user = this.Client.ActiveChar;

    user.Name = packet.get("name") as string;
    user.ObjectId = packet.get("character_id") as number;
    user.Title = packet.get("title") as string;

    user.Sex = packet.get("sex") as number;
    user.Race = packet.get("race") as number;
    user.ClassId = packet.get("visible_class") as number;

    user.X = packet.get("location_x") as number;
    user.Y = packet.get("location_y") as number;
    user.Z = packet.get("location_z") as number;

    user.Hp = packet.get("current_hp") as number;
    user.Mp = packet.get("current_mp") as number;
    user.Sp = packet.get("sp") as number;
    user.Exp = packet.get("xp") as number;
    user.Level = packet.get("level") as number;
    user.Karma = packet.get("karma") as number;
    user.PkKills = packet.get("pk_count") as number;

    user.INT = packet.get("int") as number;
    user.STR = packet.get("str") as number;
    user.CON = packet.get("con") as number;
    user.MEN = packet.get("men") as number;
    user.DEX = packet.get("dex") as number;
    user.WIT = packet.get("wit") as number;
  }
}
