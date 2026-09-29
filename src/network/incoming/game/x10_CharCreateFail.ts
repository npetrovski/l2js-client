import { GamePacket } from "../../PacketRegistry";

import { CharCreateFailReason } from "../../../enums/CharCreateFailReason";
import GameClientPacket from "./GameClientPacket";

@GamePacket(0x10)
export default class x10_CharCreateFail extends GameClientPacket {
  FailReason!: CharCreateFailReason;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.FailReason = (CharCreateFailReason as any)[this.readD()];

    return true;
  }
}
