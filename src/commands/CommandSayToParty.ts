import AbstractGameCommand from "./AbstractGameCommand";
import { ChatType } from "../enums/ChatType";

export default class CommandSayToParty extends AbstractGameCommand {
  execute(text: string): void {
    this.GameClient.sendPacket("Say2", {
      message: text,
      chat_type: ChatType.PARTY,
    });
  }
}
