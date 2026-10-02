import IMMOClientMutator from "@mmocore/IMMOClientMutator";
import GameClient from "@network/GameClient";
import UserInfo from "@network/incoming/game/x32_UserInfo";

export default class UserInfoMutator extends IMMOClientMutator<
  GameClient,
  UserInfo
> {
  update(packet: UserInfo): void {
    const user = this.Client.ActiveChar;
    if (!user) {
      this.Client.ActiveChar = packet.User;
    } else {
      const eventHandlers = this.Client.ActiveChar._eventHandlers;
      Object.assign(this.Client.ActiveChar, packet.User);
      // Restore event handlers
      this.Client.ActiveChar._eventHandlers = eventHandlers;
    }

    if (!this.Client.CreaturesList.getEntryByObjectId(packet.User.ObjectId)) {
      this.Client.CreaturesList.add(this.Client.ActiveChar);
    }
    if (this.Client.ActiveChar.Clan) {
      const knownClan = this.Client.ClansList.getEntryById(this.Client.ActiveChar.Clan.Id);
      if (knownClan) {
        Object.assign(knownClan, this.Client.ActiveChar.Clan);
        this.Client.ActiveChar.Clan = knownClan;
      } else {
        this.Client.ClansList.add(this.Client.ActiveChar.Clan);
      }
    }
  }
}
