import L2Object from "./L2Object";
import { CraftType } from "../enums/CraftType";
import L2Item from "./L2Item";
import L2ObjectCollection from "./L2ObjectCollection";

export default class L2Recipe extends L2Object {
  private _craftLevel!: number;

  private _successRate!: number;

  private _craftType!: CraftType;

  private _item!: L2Item;

  private _itemCount!: number;

  private _ingredients: L2ObjectCollection<L2Item> = new L2ObjectCollection<L2Item>();

  private _mpCost!: number;

  public get Ingredients(): L2ObjectCollection<L2Item> {
    return this._ingredients;
  }

  public get CraftLevel(): number {
    return this._craftLevel;
  }

  public set CraftLevel(value: number) {
    this._craftLevel = value;
  }
  public get SuccessRate(): number {
    return this._successRate;
  }

  public set SuccessRate(value: number) {
    this._successRate = value;
  }
  public get CraftType(): CraftType {
    return this._craftType;
  }

  public set CraftType(value: CraftType) {
    this._craftType = value;
  }

  public get Item(): L2Item {
    return this._item;
  }

  public set Item(value: L2Item) {
    this._item = value;
  }
  public get ItemCount(): number {
    return this._itemCount;
  }

  public set ItemCount(value: number) {
    this._itemCount = value;
  }

  public get MpCost(): number {
    return this._mpCost;
  }

  public set MpCost(value: number) {
    this._mpCost = value;
  }
}
