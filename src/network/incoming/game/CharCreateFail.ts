import { CharCreateFailReason } from "../../../enums/CharCreateFailReason";
import GameClientPacket from "./GameClientPacket";

export default class CharCreateFail extends GameClientPacket {
  FailReason!: CharCreateFailReason;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.FailReason = (CharCreateFailReason as any)[this.readD()];

    return true;
  }
}
