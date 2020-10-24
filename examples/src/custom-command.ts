import l2 from "./login";

import AbstractGameCommand from "l2js-client/dist/commands/AbstractGameCommand";
import GameClient from "l2js-client/dist/network/GameClient";

l2.registerCommand("sayHello", {
  execute: function (): void {
    console.log("Hello. I am  " + this.Client.ActiveChar.Name);
  },
} as AbstractGameCommand<GameClient>);

l2.on("LoggedIn", () => {
  (l2 as any).sayHello();
});
