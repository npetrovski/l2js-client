import l2 from "./login";

const client = l2.registerCommand("sayHello", {
  execute(text: string): void {
    console.log(this.GameClient.ActiveChar.Name + ": " + text);
  }
});

client.on("LoggedIn", () => {
  client.sayHello("Hello");
});
