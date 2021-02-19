import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../entities/L2PartyMember";

export default class PartyMatchList extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _playerCount = this.readD();

    for (let i = 0; i < _playerCount; i++) {
      const char = new L2PartyMember();

      char.ObjectId = this.readD();
      char.Name = this.readS();
      char.Level = this.readD();
      char.ClassId = this.readD();

      const _chaotic = this.readD() === 1;
      const _clanId = this.readD();
      const _affiliation = this.readD();
      const [_x, _y, _z] = this.readLoc();

     }

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
