import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x28_RequestWithdrawalPledge extends GameServerPacket {
  write(): void {
    this.writeC(0x28);
  }
}
