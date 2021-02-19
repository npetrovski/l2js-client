import L2User from "../../entities/L2User";
import EnterWorld from "../clientpackets/EnterWorld";
import RequestKeyMapping from "../clientpackets/RequestKeyMapping";
import RequestManorList from "../clientpackets/RequestManorList";
import GameClientPacket from "./GameClientPacket";

export default class CharacterSelected extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const user = new L2User();

    user.Name = this.readS();
    user.ObjectId = this.readD();
    user.Title = this.readS();
    const _accountId = this.readD();
    const clanId = this.readD();
    const _builderLevel = this.readD();
    user.Sex = this.readD();
    user.Race = this.readD();
    user.ClassId = this.readD();
    const _active1 = this.readD();
    user.X = this.readD();
    user.Y = this.readD();
    user.Z = this.readD();

    user.Hp = this.readF();
    user.Mp = this.readF();

    user.Sp = this.readD();
    user.Exp = this.readD();
    user.Level = this.readD();
    user.Karma = this.readD();
    user.PkKills = this.readD();

    user.STR = this.readD();
    user.DEX = this.readD();
    user.CON = this.readD();
    user.INT = this.readD();
    user.WIT = this.readD();
    user.MEN = this.readD();

    this.Client.ActiveChar = user;
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
