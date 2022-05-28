import Client from "l2js-client/Client";

// Debug
process.env.L2JSC_LOG_LEVEL = "8";

const l2 = new Client();

const newCharData = {
  name: "younickname",
  race: 0,
  sex: 0,
  classId: 0,
  int: 0,
  str: 0,
  con: 0,
  men: 0,
  dex: 0,
  wit: 0,
  hairStyle: 0,
  hairColor: 0,
  face: 0
};

l2.enter(
  {
  /* required */ Username: "admin",
  /* required */ Password: "admin",
  /* required */ Ip: "127.0.0.1",
  /* optional */ ServerId: 1, // Bartz
  /* optional */ CharSlotIndex: 0,
  },
  /* optional */ newCharData
).catch((e) => console.log(e));

process.on("beforeExit", (code) => {
  l2.logout();
});


export default l2;
