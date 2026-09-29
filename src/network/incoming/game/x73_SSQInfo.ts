import { GamePacket } from "../../PacketRegistry";

import GameClientPacket from "./GameClientPacket";

@GamePacket(0x73)
export default class x73_SSQInfo extends GameClientPacket {
  private _skyState!: number;
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this._skyState = this.readH() - 256; // Sky color state

    return true;
  }
}
