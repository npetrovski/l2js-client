import GameClientPacket from "./GameClientPacket";
import L2PartyMember from "../../entities/L2PartyMember";

export default class PartyMatchDetail extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objId = this.readD();

    const _showLevel = this.readD() === 1;
    const _showOccupation = this.readD() === 1;

    const _memo = this.readS();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
