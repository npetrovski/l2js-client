import L2MacroCommand from "@entities/L2MacroCommand";
import L2Object from "@entities/L2Object";

export default class L2Macro extends L2Object {
  static readonly ServerCommandLimit = 12;

  Icon = 1;
  Description = "";
  Acronym = "";
  Commands: L2MacroCommand[] = [];
}
