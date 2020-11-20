import Client from "l2js-client/Client";

const l2 = new Client();
l2.enter({
  /* required */ Username: "unkbows",
  /* required */ Password: "senha01#",
  /* required */ Ip: "104.238.223.242",
  /* optional */ ServerId: 1, //Bartz 
  /* optional */ CharSlotIndex: 0,
});

export default l2;
