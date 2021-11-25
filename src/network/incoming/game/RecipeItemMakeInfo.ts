import GameClientPacket from "./GameClientPacket";

export default class RecipeItemMakeInfo extends GameClientPacket {

  RecipeId: number = 0;
  CraftType: number = 0;
  PlayerCurrentMp: number = 0;
  PlayerMaxMp: number = 0;
  Success: boolean = false;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    this.RecipeId = this.readD();
    this.CraftType = this.readD(); // 0 = Dwarven - 1 = Common
    this.PlayerCurrentMp = this.readD();
    this.PlayerMaxMp = this.readD();
    this.Success = this.readD() === 1;

    return true;
  }
}
