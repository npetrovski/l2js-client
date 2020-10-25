import L2User from "../../entities/L2User";
import EnterWorld from "../clientpackets/EnterWorld";
import RequestKeyMapping from "../clientpackets/RequestKeyMapping";
import RequestManorList from "../clientpackets/RequestManorList";
import GameClientPacket from "./GameClientPacket";

export default class CharSelected extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const user = new L2User();

    user.Name = this.readS();
    user.ObjectId = this.readD();
    user.Title = this.readS();
    const _sessionId = this.readD();
    const clanId = this.readD();
    const _unkn1 = this.readD(); // ??
    user.Sex = this.readD();
    user.Race = this.readD();
    user.ClassId = this.readD();
    const _active1 = this.readD();
    user.X = this.readD();
    user.Y = this.readD();
    user.Z = this.readD();

    user.Hp = this.readD();
    user.Mp = this.readD();

    this.Client.ActiveChar = user;
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
