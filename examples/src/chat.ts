import l2 from "./login";

l2.on("LoggedIn", () => {
  l2.say("Hello from " + l2.Me.Name);
  l2.shout("Hello world !!!");
  l2.tell("hi there", "myMainCharName");
  l2.sayToParty("Hello party");
  l2.sayToClan("Hello clan");
  l2.sayToTrade("Hello traders");
  l2.sayToAlly("Hello ppls");
});
