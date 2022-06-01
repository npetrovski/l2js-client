import Client from "l2js-client/Client";
import L2Character from "l2js-client/entities/L2Character";
import { ClassId } from "l2js-client/enums/ClassId";
import { Race } from "l2js-client/enums/Race";
import { Sex } from "l2js-client/enums/Sex";
import { HairStyle } from "l2js-client/enums/HairStyle";
import { HairColor } from "l2js-client/enums/HairColor";
import { Face } from "l2js-client/enums/Face";

// Debug
process.env.L2JSC_LOG_LEVEL = "8";

const l2 = new Client();

const newCharData = new L2Character({
  Name: "younickname",
  Race: Race.HUMAN,
  Sex: Sex.MALE,
  ClassId: ClassId.Fighter,
  HairColor: HairColor.A,
  HairStyle: HairStyle.B,
  Face: Face.A,
} as L2Character);

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
