import GameServerPacket from "./GameServerPacket";

export default class RequestWithdrawalPledge extends GameServerPacket {
  write(): void {
    this.writeC(0x28);
  }
}
