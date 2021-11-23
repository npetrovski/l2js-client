import { ChatType } from "../enums/ChatType";
import AbstractGameCommand from "./AbstractGameCommand";

export default class CommandSay extends AbstractGameCommand {
  execute(text: string): void {
    this.GameClient.sendPacket("Say2", {
      message: text,
      chat_type: ChatType.ALL,
    });
  }
}
