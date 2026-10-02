import L2Creature from "@entities/L2Creature";
import L2Object from "@entities/L2Object";
import { StoreType } from "@enums/StoreType";

export default class L2Store extends L2Object {
  Owner?: L2Creature;
  Message = "";
  Type = StoreType.Sell;
  IsPackage = false;
}
