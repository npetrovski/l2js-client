import GameServerPacket from "@network/outgoing/game/GameServerPacket";

export default class x12_CharacterSelect extends GameServerPacket {
  constructor(public slot: number) {
    super();
  }

  write(): void {
    this.writeC(0x12);
    this.writeD(this.slot);
    this.writeH(0);
    this.writeD(0);
    this.writeD(0);
    this.writeD(0);
  }
}
