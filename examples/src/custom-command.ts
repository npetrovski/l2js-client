import l2 from "./login";

import AbstractGameCommand from "l2js-client/commands/AbstractGameCommand";

l2.registerCommand("sayHello", {
  execute(text: string): void {
    console.log(this.GameClient.ActiveChar.Name + ": " + text);
  }
} as AbstractGameCommand);

l2.on("LoggedIn", () => {
  (l2 as any).sayHello("Hello");
});
