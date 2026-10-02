import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import CharInfo from "@network/incoming/game/x31_CharInfo";
import L2Character from "@entities/L2Character";

export default class CharInfoMutator extends IMMOClientMutator<
  GameClient,
  CharInfo
> {
  update(packet: CharInfo): void {
    const char = this.Client.CreaturesList.getEntryByObjectId(
      packet.Char.ObjectId
    );
    if (!char) {
      packet.Char.calculateDistance(this.Client.ActiveChar);
      this.Client.CreaturesList.add(packet.Char);
    } else {
      char.X = packet.Char.X;
      char.Y = packet.Char.Y;
      char.Z = packet.Char.Z;
      char.Name = packet.Char.Name;

      char.Race = packet.Char.Race;
      char.Sex = packet.Char.Sex;
      char.BaseClassId = packet.Char.BaseClassId;
      char.RunSpeed = packet.Char.RunSpeed;
      char.WalkSpeed = packet.Char.WalkSpeed;
      char.SpeedMultiplier = packet.Char.SpeedMultiplier;
      char.Title = packet.Char.Title;
      char.IsRunning = packet.Char.IsRunning;
      char.IsInCombat = packet.Char.IsInCombat;
      char.ClassId = packet.Char.ClassId;
      char.IsNoble = packet.Char.IsNoble;
      char.IsHero = packet.Char.IsHero;
      char.Heading = packet.Char.Heading;
      if (char instanceof L2Character) {
        char.Clan = packet.Char.Clan;
        char.PrivateStoreType = packet.Char.PrivateStoreType;
      }

      if (packet.Char.ObjectId !== this.Client.ActiveChar.ObjectId) {
        char.calculateDistance(this.Client.ActiveChar);
      }
    }

    if (packet.Char.Clan) {
      const knownClan = this.Client.ClansList.getEntryById(packet.Char.Clan.Id);
      if (knownClan) {
        Object.assign(knownClan, packet.Char.Clan);
        if (char instanceof L2Character) {char.Clan = knownClan;}
      } else {
        this.Client.ClansList.add(packet.Char.Clan);
      }
    }

    this.fire("CharInfo", { creature: char });
  }
}
