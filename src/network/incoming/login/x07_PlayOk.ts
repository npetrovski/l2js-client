import { LoginPacket } from "../../PacketRegistry";

import LoginClientPacket from "./LoginClientPacket";

@LoginPacket(0x07)
export default class x07_PlayOk extends LoginClientPacket {
  PlayOk1!: number;
  PlayOk2!: number;

  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    this.PlayOk1 = this.readD();
    this.PlayOk2 = this.readD();

    return true;
  }
}
