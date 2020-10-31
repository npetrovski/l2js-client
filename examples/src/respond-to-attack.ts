import l2 from "./login";
import { EAttacked } from "l2js-client/events/EventTypes";

l2.on("Attacked", (e: EAttacked) => {
  if (Array.from(e.data.subjects).indexOf(l2.Me.ObjectId) !== -1) {
    l2.hit(e.data.object);
    l2.hit(e.data.object);
  }
});
