import l2 from "./login";
import { ERecipeBook, ECraftResult } from "l2js-client/events/EventTypes";
import L2Recipe from "l2js-client/entities/L2Recipe";

const RECIPE_SSS = 0x18;
let craftIntervalId: ReturnType<typeof setInterval>;

l2.on("LoggedIn", () => {
  l2.dwarvenCraftRecipes();
})
  .on("RecipeBook", (e: ERecipeBook) => {
    if (e.data.isDwarven) {
      const recipeSSS = Array.from(l2.DwarfRecipeBook).find((r: L2Recipe) => r.Id === RECIPE_SSS);
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
