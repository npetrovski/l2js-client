import L2User from "../../entities/L2User";
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

    user.Hp = this.readQ();
    user.Mp = this.readQ();

    this.Client.ActiveChar = user;

    this.logger.debug("Char selected", user.Name);
    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
