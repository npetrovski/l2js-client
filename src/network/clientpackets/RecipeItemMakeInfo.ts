import { GlobalEvents } from "../../mmocore/EventEmitter";
import GameClientPacket from "./GameClientPacket";

export default class RecipeItemMakeInfo extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _recId = this.readD();
    const _craftType = this.readD(); // 0 = Dwarven - 1 = Common
    const _playerCurrMp = this.readD();
    const _playerMaxMp = this.readD();
    const _success = this.readD() === 1;

    GlobalEvents.fire("CraftResult", {
      recipeId: _recId,
      success: _success,
    });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
