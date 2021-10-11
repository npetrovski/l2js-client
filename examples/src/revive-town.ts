import l2 from "./login";
import { EDie } from "l2js-client/events/EventTypes";
import { RestartPoint } from "l2js-client/enums/RestartPoint";

l2.on("Die", (e: EDie) => {
  if (e.data.creature.ObjectId === l2.Me.ObjectId) {
    l2.revive(RestartPoint.TOWN);
  }
});
