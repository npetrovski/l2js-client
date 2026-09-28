import Client from "l2js-client/Client";

process.env.L2JSC_LOG_LEVEL = "8";

const configuration = {
  Ip: "127.0.0.1",
  ServerId: 1,
};

const accounts = [
  { Username: "test1", Password: "12345", CharSlotIndex: 0 },
  { Username: "test2", Password: "12345", CharSlotIndex: 0 },
];

accounts.forEach((acc) => {
  const cfg = { ...configuration, ...acc };

  const l2 = new Client();

  l2.enter(cfg).then(() => {
    l2.say("Hello from " + l2.Me.Name);
    l2.on("StartMoving", () => {
      console.log(`Client ${acc.Username} move`);
    });
    const x = 50 + Math.floor(Math.random() * 50) + l2.Me.X;
    const y = 50 + Math.floor(Math.random() * 50) + l2.Me.Y;
    const z = l2.Me.Z;
    l2.moveTo(x, y, z);
  });
});
