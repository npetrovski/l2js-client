import LoginClientPacket from "./LoginClientPacket";
import LoginClient from "../LoginClient";
import SendablePacket from "../../mmocore/SendablePacket";
import RequestCharacters from "../serverpackets/RequestCharacters";
import { PlayFailReason } from "../../enums/PlayFailReason";

export default class PlayFail extends LoginClientPacket {
  //@Override
  readImpl(): boolean {
    let _id: number = this.readC();
    let _reason = this.readC();

    throw Error("Play fail. Reason: " + PlayFailReason[_reason]);
    return true;
  }

  //@Override
  run(): void {}
}
