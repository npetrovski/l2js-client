import l2 from "./login";

import AbstractGameCommand from "l2js-client/commands/AbstractGameCommand";
import GameClient from "l2js-client/network/GameClient";

l2.registerCommand("sayHello", {
  execute(text: string): void {
    console.log(this.Client.ActiveChar.Name + ": " + text);
  }
} as AbstractGameCommand<GameClient>);

l2.on("LoggedIn", () => {
  (l2 as any).sayHello("Hello");
});
