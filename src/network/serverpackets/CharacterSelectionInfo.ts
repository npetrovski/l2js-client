import GameClientPacket from "./GameClientPacket";
import GameServerPacket from "../clientpackets/GameServerPacket";
import L2User from "../../entities/L2User";
import L2ObjectCollection from "../../entities/L2ObjectCollection";

export default class CharacterSelectionInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _characterPackages: L2ObjectCollection<L2User> = new L2ObjectCollection();

    const _charsCount = this.readD();

    for (let i = 0; i < _charsCount; i++) {
      const char: L2User = new L2User();

      char.Name = this.readS();
      char.ObjectId = this.readD();
      const _loginName = this.readS();
      const _accountId = this.readD();
      const _clanId = this.readD();
      const _builderLevel = this.readD();

      char.Sex = this.readD();
      char.Race = this.readD();
      char.BaseClassId = this.readD();

      const _server = this.readD(); // ??

      char.X = this.readD();
      char.Y = this.readD();
      char.Z = this.readD();

      char.Hp = this.readF();
      char.Mp = this.readF();

      char.Sp = this.readD();
      char.Exp = this.readD();

      char.Level = this.readD();
      char.Karma = this.readD();
      char.PkKills = this.readD();
      char.PvpKills = this.readD();

      const _unknD1 = this.readD();
      const _unknD2 = this.readD();
      const _unknD3 = this.readD();
      const _unknD4 = this.readD();
      const _unknD5 = this.readD();
      const _unknD6 = this.readD();
      const _unknD7 = this.readD();

      const _paperdoll = [];
      GameServerPacket.PAPERDOLL_ORDER.forEach(() => {
        _paperdoll.push(this.readD());
      });

      GameServerPacket.PAPERDOLL_ORDER.forEach(() => {
        _paperdoll.push(this.readD());
      });

      const hairStyle = this.readD();
      const hairColor = this.readD();
      const face = this.readD();

      char.MaxHp = this.readF();
      char.MaxMp = this.readF();

      const _daysLeftBeforeDelete = this.readD();
      _characterPackages.add(char);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
