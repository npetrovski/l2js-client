import GameClientPacket from "./GameClientPacket";
import GameClient from "../GameClient";
import SendablePacket from "../../mmocore/SendablePacket";
import CharSelectInfoPackage from "../../model/CharSelectInfoPackage";
import GameServerPacket from "../serverpackets/GameServerPacket";
import CharacterSelect from "../serverpackets/CharacterSelect";

export default class CharSelectionInfo extends GameClientPacket {
  private _characterPackages: Array<CharSelectInfoPackage> = [];
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _characterPackages = this.readD();
    let _charMaxNumber = this.readD();
    let _pad = this.readC();

    for (let i = 0; i < _characterPackages; i++) {
      var char: CharSelectInfoPackage = new CharSelectInfoPackage();

      char.name = this.readS();

      char.objectId = this.readD();
      let _loginName = this.readS();
      let _sessionId = this.readD();
      char.clanId = this.readD();
      let _builderLevel = this.readD();

      char.sex = this.readD();
      char.race = this.readD();
      char.baseClassId = this.readD();

      let _active = this.readD(); //??

      char.x = this.readD();
      char.y = this.readD();
      char.z = this.readD();

      char.currentHp = this.readF();
      char.currentMp = this.readF();

      char.sp = this.readD();
      char.exp = this.readQ();
      let _expPercentFromCurrentLevel = this.readF();

      char.level = this.readD();
      char.karma = this.readD();
      char.pkKills = this.readD();
      char.pvpKills = this.readD();

      let _unknD1 = this.readD();
      let _unknD2 = this.readD();
      let _unknD3 = this.readD();
      let _unknD4 = this.readD();
      let _unknD5 = this.readD();
      let _unknD6 = this.readD();
      let _unknD7 = this.readD();

      for (let slot in GameServerPacket.PAPERDOLL_ORDER) {
        char.paperdoll.push(this.readD());
      }

      char.hairStyle = this.readD();
      char.hairColor = this.readD();
      char.face = this.readD();

      char.maxHp = this.readF();
      char.maxMp = this.readF();

      let _daysLeftBeforeDelete = this.readD();
      char.classId = this.readD();
      let _c3AutoSelectChar = this.readD(); // is this char active - the last one used

      let _enchantEffect = this.readC();
      char.augmentationId = this.readD();

      let _hideTransformation = this.readD();

      let _notImplementedPetId = this.readD();
      let _notImplementedPetLevel = this.readD();
      let _notImplementedPetMaxFood = this.readD();
      let _notImplementedPetCurrentFood = this.readD();
      let _notImplementedPetMaxHP = this.readF();
      let _notImplementedPetMaxMP = this.readF();

      char.vitalityPoints = this.readD();

      this._characterPackages.push(char);
    }

    return true;
  }

  //@Override
  run(): void {
    var spk: SendablePacket<GameClient> = new CharacterSelect(this.Client.Config.charSlotIndex ?? 0);
    this.Client.sendPacket(spk);
  }
}
