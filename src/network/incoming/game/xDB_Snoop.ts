import { GamePacket } from "@network/PacketRegistry";

import GameClientPacket from "@network/incoming/game/GameClientPacket";

@GamePacket(0xdb)
export default class xDB_Snoop extends GameClientPacket {
  private _convoId = 0;
  private _name = "";
  private _type = 0;
  private _speaker = "";
  private _msg = "";

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this._convoId = this.readD();
    this._name = this.readS();
    const _unkn1 = this.readD();

    this._type = this.readD();
    this._speaker = this.readS();
    this._msg = this.readS();

    return true;
  }
}
