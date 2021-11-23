import AbstractGameCommand from "./AbstractGameCommand";
import { ChatType } from "../enums/ChatType";

export default class CommandTell extends AbstractGameCommand {
  execute(text: string, target: string): void {
    this.GameClient.sendPacket("Say2", {
      message: text,
      chat_type: ChatType.TELL,
      recipient: target,
    });
  }
}
