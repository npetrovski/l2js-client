import l2 from "./login";

l2.on("LoggedIn", () => {
  const x = 50 + Math.floor(Math.random() * 50) + l2.Me.X;
  const y = 50 + Math.floor(Math.random() * 50) + l2.Me.Y;
  const z = l2.Me.Z;
  l2.moveTo(x, y, z);
});
