import GameServerPacket from "./GameServerPacket";

export default class x28_RequestWithdrawalPledge extends GameServerPacket {
  write(): void {
    this.writeC(0x28);
  }
}
