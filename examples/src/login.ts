import * as dotenv from 'dotenv';
dotenv.config();
import Client from "l2js-client/Client";

const l2 = new Client();
l2.enter({
  /* required */ Username: process.env.USERNAME,
  /* required */ Password: process.env.PASSWORD,
  /* required */ Ip: process.env.IP,
  /* optional */ ServerId: 1, //Bartz 
  /* optional */ CharSlotIndex: 0,
});

export default l2;
