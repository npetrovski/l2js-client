import Vector from "l2js-client/mmocore/Vector";
import l2 from "./login";

const FOLLOW_NAME = "Kz";
const FOLLOW_DIST = 150;

l2.on("LoggedIn", () => {
  setInterval(() => {
    if (!l2.Me.IsDead && l2.Me.IsReady) {
      const creature = l2.CreaturesList.getEntryByName(FOLLOW_NAME);
      if (creature && l2.Me.calculateDistance(creature) > FOLLOW_DIST) {
        const v1 = new Vector(creature.X - l2.Me.X, creature.Y - l2.Me.Y);
        v1.normalize();

        l2.moveTo(
          creature.X - v1.X * FOLLOW_DIST,
          creature.Y - v1.Y * FOLLOW_DIST,
          creature.Z
        );
      }
    }
  }, 500);
});
