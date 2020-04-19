import GameClientPacket from "./GameClientPacket";
import SendablePacket from "../../mmocore/SendablePacket";
import GameClient from "../GameClient";
import RequestManorList from "../serverpackets/RequestManorList";
import RequestKeyMapping from "../serverpackets/RequestKeyMapping";
import EnterWorld from "../serverpackets/EnterWorld";
import L2User from "../../entities/L2User";

export default class CharSelected extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const user = new L2User();

    user.Name = this.readS();
    user.ObjectId = this.readD();
    const title = this.readS();
    const _sessionId = this.readD();
    const clanId = this.readD();
    const _unkn1 = this.readD(); // ??
    const sex = 1 === this.readD();
    const _race = this.readD();
    const _classId = this.readD();
    const _active1 = this.readD();
    user.X = this.readD();
    user.Y = this.readD();
    user.Z = this.readD();

    user.Hp = this.readD();
    user.Mp = this.readD();

    // console.log("CharSelected: Not yet fully implemented.");
    this.Client.ActiveChar = user;
    return true;
  }

  // @Override
  run(): void {
    const spk1: SendablePacket<GameClient> = new RequestManorList();
    this.Client.sendPacket(spk1);

    const spk2: SendablePacket<GameClient> = new RequestKeyMapping();
    this.Client.sendPacket(spk2);

    const spk3: SendablePacket<GameClient> = new EnterWorld();
    this.Client.sendPacket(spk3);
  }
}
