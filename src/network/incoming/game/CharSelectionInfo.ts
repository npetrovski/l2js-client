import L2ObjectCollection from "../../../entities/L2ObjectCollection";
import L2User from "../../../entities/L2User";
import { ClassId } from "../../../enums/ClassId";
import { Race } from "../../../enums/Race";
import { Sex } from "../../../enums/Sex";
import GameServerPacket from "../../outgoing/game/GameServerPacket";
import GameClientPacket from "./GameClientPacket";

export default class CharSelectionInfo extends GameClientPacket {
  characterPackagesSize!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _characterPackages: L2ObjectCollection<L2User> = new L2ObjectCollection();

    this.characterPackagesSize = this.readD();
    const _charMaxNumber = this.readD();
    const _pad = this.readC();

    for (let i = 0; i < this.characterPackagesSize; i++) {
      const char: L2User = new L2User();

      char.Name = this.readS();

      char.ObjectId = this.readD();
      const _loginName = this.readS();
      const _sessionId = this.readD();
      const clanId = this.readD();
      const _builderLevel = this.readD();

      char.Sex = (Sex as any)[this.readD()];
      char.Race = (Race as any)[this.readD()];
      char.BaseClassId = (ClassId as any)[this.readD()];

      const _active = this.readD(); // ??

      char.X = this.readD();
      char.Y = this.readD();
      char.Z = this.readD();

      char.Hp = this.readF();
      char.Mp = this.readF();

      char.Sp = this.readD();
      char.Exp = this.readQ();
      char.ExpPercent = this.readF();

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

      const hairStyle = this.readD();
      const hairColor = this.readD();
      const face = this.readD();

      char.MaxHp = this.readF();
      char.MaxMp = this.readF();

      const _daysLeftBeforeDelete = this.readD();
      char.ClassId = (ClassId as any)[this.readD()];
      const _c3AutoSelectChar = this.readD(); // is this char active - the last one used

      const _enchantEffect = this.readC();
      const augmentationId = this.readD();

      const _hideTransformation = this.readD();

      const _notImplementedPetId = this.readD();
      const _notImplementedPetLevel = this.readD();
      const _notImplementedPetMaxFood = this.readD();
      const _notImplementedPetCurrentFood = this.readD();
      const _notImplementedPetMaxHP = this.readF();
      const _notImplementedPetMaxMP = this.readF();

      char.Vitality = this.readD();

      _characterPackages.add(char);
    }

    return true;
  }
}
