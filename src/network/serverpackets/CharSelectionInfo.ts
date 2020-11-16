import GameClientPacket from "./GameClientPacket";
import GameServerPacket from "../clientpackets/GameServerPacket";
import CharacterSelect from "../clientpackets/CharacterSelect";
import L2User from "../../entities/L2User";
import L2ObjectCollection from "../../entities/L2ObjectCollection";

export default class CharSelectionInfo extends GameClientPacket {


  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _characterPackages: L2ObjectCollection<L2User> = new L2ObjectCollection();

    const _characterPackagesSize = this.readD();
    for (let i = 0; i < _characterPackagesSize; i++) {
      const char: L2User = new L2User();

      char.Name = this.readS();

      char.ObjectId = this.readD();
      const _loginName = this.readS();
      const _sessionId = this.readD();
      const clanId = this.readD();
      const _builderLevel = this.readD();

      char.Sex = this.readD();
      char.Race = this.readD();
      char.BaseClassId = this.readD();

      const _active = this.readD(); // ??

      char.X = this.readD();
      char.Y = this.readD();
      char.Z = this.readD();

      char.Hp = this.readF();
      char.Mp = this.readF();

      char.Sp = this.readD();
      char.Exp = this.readD();
      char.Level = this.readD();
      char.Karma = this.readD();

      const _unknD1 = this.readD();
      const _unknD2 = this.readD();
      const _unknD3 = this.readD();
      const _unknD4 = this.readD();
      const _unknD5 = this.readD();
      const _unknD6 = this.readD();
      const _unknD7 = this.readD();
      const _unknD8 = this.readD();
      const _unknD9 = this.readD();

      const _paperdollObjIds = [];
      GameServerPacket.PAPERDOLL_ORDER.forEach(() => {
        _paperdollObjIds.push(this.readD());
      });

      const _paperdollIds = [];
      GameServerPacket.PAPERDOLL_ORDER.forEach(() => {
        _paperdollIds.push(this.readD());
      });

      const hairStyle = this.readD();
      const hairColor = this.readD();
      const face = this.readD();

      char.MaxHp = this.readF();
      char.MaxMp = this.readF();

      const _daysLeftBeforeDelete = this.readD();
      char.ClassId = this.readD();

      const _lastUsed = this.readD();
      const _enchantEffect = this.readC();

      _characterPackages.add(char);
    }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
