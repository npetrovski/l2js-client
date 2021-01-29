import l2 from "./login";

import AbstractGameCommand from "l2js-client/commands/AbstractGameCommand";
import GameClient from "l2js-client/network/GameClient";

l2.registerCommand("sayHello", {
  execute (): void {
    console.log("Hello. I am  " + this.Client.ActiveChar.Name);
  },
} as AbstractGameCommand<GameClient>);

l2.on("LoggedIn", () => {
  (l2 as any).sayHello();
});
