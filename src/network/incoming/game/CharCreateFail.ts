import { CreateFail } from "../../../enums/CreateFail";
import GameClientPacket from "./GameClientPacket";

export default class CharCreateFail extends GameClientPacket {
  result!: CreateFail;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    this.result = this.readD();
    
    return true;
  }
}
