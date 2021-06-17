# Examples

## Logging in

```ts
import Client from "l2js-client/Client";

const l2 = new Client();
l2.enter({
  /* required */ Username: "admin",
  /* required */ Password: "admin",
  /* required */ Ip: "127.0.0.1",
  /* optional */ ServerId: 1, //Bartz
  /* optional */ CharSlotIndex: 0
}); // return a Promise, so you can use .then() after "enter()"
```

## Chat

```ts
l2.on("LoggedIn", () => {
  l2.say("Hello from " + l2.Me.Name);
  l2.shout("Hello world !!!");
  l2.tell("hi there", "myMainCharName");
  l2.sayToParty("Hello party");
  l2.sayToClan("Hello clan");
  l2.sayToTrade("Hello traders");
  l2.sayToAlly("Hello ally");
});
```

## Move to location

```ts
l2.on("LoggedIn", () => {
  let x = 50 + Math.floor(Math.random() * 50) + l2.Me.X;
  let y = 50 + Math.floor(Math.random() * 50) + l2.Me.Y;
  let z = l2.Me.Z;
  l2.moveTo(x, y, z);
});
```

## Revive

```ts
import { EDie } from "l2js-client/events/EventTypes";
import { RestartPoint } from "l2js-client/enums/RestartPoint";

l2.on("Die", (e: EDie) => {
  if (e.data.creature.ObjectId === l2.Me.ObjectId) {
    l2.revive(RestartPoint.TOWN);
  }
});
```

## Fight back

```ts
import { EAttacked } from "l2js-client/events/EventTypes";

l2.on("Attacked", (e: EAttacked) => {
  if (Array.from(e.data.subjects).indexOf(l2.Me.ObjectId) !== -1) {
    l2.hit(e.data.object);
    l2.hit(e.data.object);
  }
});
```

## Follow a character

```ts
import { EStartMoving } from "l2js-client/events/EventTypes";

l2.on("StartMoving", (e: EStartMoving) => {
  if (e.data.creature.Name === "Adm") {
    l2.moveTo(e.data.creature.Dx, e.data.creature.Dy, e.data.creature.Dz);
  }
});
```

## Follow a character (Advanced)

```ts
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
```

## Simple bot (auto-target and auto-close-combat-hit)

```ts
import L2Creature from "l2js-client/entities/L2Creature";
import { ShotsType } from "l2js-client/enums/ShotsType";
import {
  EDie,
  EMyTargetSelected,
  EPartyRequest,
  EAttacked
} from "l2js-client/events/EventTypes";

l2.on("LoggedIn", () => {
  l2.cancelTarget();
  l2.validatePosition();
  l2.moveTo(l2.Me.X + 1, l2.Me.Y + 1, l2.Me.Z);
  l2.autoShots(ShotsType.SSS, true); // enable SSS

  setInterval(() => {
    if (l2.DroppedItems.size > 0) {
      l2.hit(Array.from(l2.DroppedItems)[0]);
    } else if (!l2.Me.Target || l2.Me.Target.ObjectId === l2.Me.ObjectId) {
      let creature: L2Creature | undefined = l2.nextTarget();
      if (creature instanceof L2Creature) {
        l2.hit(creature);
      }
    }
  }, 500);
})
  .on("MyTargetSelected", (e: EMyTargetSelected) => {
    if (l2.Me.Target) {
      l2.hit(l2.Me.Target);
      l2.attack(l2.Me.Target);
    }
  })
  .on("Die", (e: EDie) => {
    if (l2.Me.Target && e.data.creature.ObjectId === l2.Me.Target.ObjectId) {
      l2.cancelTarget();
      l2.CreaturesList.forEach(c => {
        c.calculateDistance(l2.Me);
      });
    }
  })
  .on("PartyRequest", (e: EPartyRequest) => {
    l2.acceptJoinParty();
  })
  .on("Attacked", (e: EAttacked) => {
    if (Array.from(e.data.subjects).indexOf(l2.Me.ObjectId) !== -1) {
      l2.hit(e.data.object);
      l2.hit(e.data.object);
    }
  });
```

## Add a custom command

```ts
import AbstractGameCommand from "l2js-client/commands/AbstractGameCommand";
import GameClient from "l2js-client/network/GameClient";

l2.registerCommand("sayHello", {
  execute: function(): void {
    console.log("Hello. I am  " + this.Client.ActiveChar.Name);
  }
} as AbstractGameCommand<GameClient>);

l2.on("LoggedIn", () => {
  (l2 as any).sayHello();
});
```

## Simple craft (Soulshot S-Grade)

```ts
import { ERecipeBook, ECraftResult } from "l2js-client/events/EventTypes";
import L2Recipe from "l2js-client/entities/L2Recipe";

const RECIPE_SSS = 0x18;
var craftIntervalId: ReturnType<typeof setInterval>;

l2.on("LoggedIn", () => {
  l2.dwarvenCraftRecipes();
})
  .on("RecipeBook", (e: ERecipeBook) => {
    if (e.data.isDwarven) {
      let recipeSSS = Array.from(l2.DwarfRecipeBook).find(
        (r: L2Recipe) => r.Id === RECIPE_SSS
      );
      if (recipeSSS) {
        clearInterval(craftIntervalId);

        craftIntervalId = setInterval(() => {
          l2.craft(RECIPE_SSS);
        }, 500);
      }
    }
  })
  .on("CraftResult", (e: ECraftResult) => {
    if (!e.data.success) {
      clearInterval(craftIntervalId);
    }
  });
```
