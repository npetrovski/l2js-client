import { GamePacket } from "@network/PacketRegistry";
import L2Clan from "@entities/L2Clan";
import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0x89)
export default class x89_PledgeInfo extends GameClientPacket {
  Clan = new L2Clan();

  readImpl(): boolean {
    this.readC();
    this.Clan.Id = this.readD();
    this.Clan.Name = this.readS();
    this.Clan.AllyName = this.readS();

    return true;
  }
}
