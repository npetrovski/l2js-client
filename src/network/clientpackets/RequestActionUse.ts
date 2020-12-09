import GameServerPacket from "./GameServerPacket";

export default class RequestActionUse extends GameServerPacket {
  constructor(public actionId: number, public ctrlPressed: boolean, public shiftPressed: boolean) {
    super();
  }

  write(): void {
    this.writeC(0x56);

    this.writeD(this.actionId);
    this.writeD(this.ctrlPressed ? 1 : 0);
    this.writeC(this.shiftPressed ? 1 : 0);
  }
}
