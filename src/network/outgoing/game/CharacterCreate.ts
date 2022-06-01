import L2Character from "../../../entities/L2Character";
import GameServerPacket from "./GameServerPacket";

export default class CharacterCreate extends GameServerPacket {
  constructor(private char: L2Character) {
    super();
  }

  write(): void {
    this.writeC(0x0c);
    this.writeS(this.char.Name);
    this.writeD(this.char.Race);
    this.writeD(this.char.Sex);
    this.writeD(this.char.ClassId);
    this.writeD(this.char.INT);
    this.writeD(this.char.STR);
    this.writeD(this.char.CON);
    this.writeD(this.char.MEN);
    this.writeD(this.char.DEX);
    this.writeD(this.char.WIT);
    this.writeD(this.char.HairStyle);
    this.writeD(this.char.HairColor);
    this.writeD(this.char.Face);
  }
}
