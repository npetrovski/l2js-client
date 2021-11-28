import L2User from "../../../entities/L2User";
import GameClientPacket from "./GameClientPacket";

export default class CharSelected extends GameClientPacket {
  User!: L2User;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const user = new L2User();

    user.Name = this.readS();
    user.ObjectId = this.readD();
    user.Title = this.readS();
    const _sessionId = this.readD();

    this.User = user;

    return true;
  }
}
