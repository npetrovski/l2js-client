import CommandCast from "./CommandCast";

export default class CommandDwarvenCraftRecipes extends CommandCast {
  execute(): void {
    super.execute(0x529, false, false);
  }
}
