import Client from "l2js-client/Client";

// Debug
process.env.L2JSC_LOG_LEVEL = "8";

const l2 = new Client();
l2.enter({
  /* required */ Username: "admin",
  /* required */ Password: "admin",
  /* required */ Ip: "127.0.0.1",
  /* optional */ ServerId: 1, // Bartz
  /* optional */ CharSlotIndex: 0,
}).catch((e) => console.log(e));

process.on("beforeExit", (code) => {
  l2.logout();
});

export default l2;
