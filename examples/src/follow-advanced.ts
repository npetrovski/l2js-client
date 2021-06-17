import l2 from "./login";

const FOLLOW_NAME = "Adm";
const FOLLOW_DIST = 100;

l2.on("LoggedIn", () => {
  const followLoop = setInterval(() => {
    if (!l2.Me.IsDead && l2.Me.IsReady) {
      const creature = l2.CreaturesList.getEntryByName(FOLLOW_NAME);
      if (creature) {
        if (l2.Me.calculateDistance(creature) > FOLLOW_DIST + 1) {
          const x2 = creature.X;
          const y2 = creature.Y;
          const dx =
            x2 -
            (FOLLOW_DIST * (x2 - l2.Me.X)) /
              Math.sqrt(
                (x2 - l2.Me.X) * (x2 - l2.Me.X) +
                  (y2 - l2.Me.Y) * (y2 - l2.Me.Y)
              );
          const dy =
            y2 -
            (FOLLOW_DIST * (y2 - l2.Me.Y)) /
              Math.sqrt(
                (x2 - l2.Me.X) * (x2 - l2.Me.X) +
                  (y2 - l2.Me.Y) * (y2 - l2.Me.Y)
              );
          l2.moveTo(dx, dy, creature.Z);
        }
      }
    }
  }, 500);
});
