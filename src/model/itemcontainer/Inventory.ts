import L2ItemInstance from "../items/instance/L2ItemInstance";
import ItemContainer from "./ItemContainer";

export default abstract class Inventory extends ItemContainer {
  static readonly ADENA_ID: number = 57;
  static readonly ANCIENT_ADENA_ID: number = 5575;

  static readonly PAPERDOLL_UNDER: number = 0;
  static readonly PAPERDOLL_HEAD: number = 1;
  static readonly PAPERDOLL_HAIR: number = 2;
  static readonly PAPERDOLL_HAIR2: number = 3;
  static readonly PAPERDOLL_NECK: number = 4;
  static readonly PAPERDOLL_RHAND: number = 5;
  static readonly PAPERDOLL_CHEST: number = 6;
  static readonly PAPERDOLL_LHAND: number = 7;
  static readonly PAPERDOLL_REAR: number = 8;
  static readonly PAPERDOLL_LEAR: number = 9;
  static readonly PAPERDOLL_GLOVES: number = 10;
  static readonly PAPERDOLL_LEGS: number = 11;
  static readonly PAPERDOLL_FEET: number = 12;
  static readonly PAPERDOLL_RFINGER: number = 13;
  static readonly PAPERDOLL_LFINGER: number = 14;
  static readonly PAPERDOLL_LBRACELET: number = 15;
  static readonly PAPERDOLL_RBRACELET: number = 16;
  static readonly PAPERDOLL_DECO1: number = 17;
  static readonly PAPERDOLL_DECO2: number = 18;
  static readonly PAPERDOLL_DECO3: number = 19;
  static readonly PAPERDOLL_DECO4: number = 20;
  static readonly PAPERDOLL_DECO5: number = 21;
  static readonly PAPERDOLL_DECO6: number = 22;
  static readonly PAPERDOLL_CLOAK: number = 23;
  static readonly PAPERDOLL_BELT: number = 24;
  static readonly PAPERDOLL_TOTALSLOTS: number = 25;

  private _paperdoll!: L2ItemInstance[];

  private _totalWeight!: number;

  private _wearedMask!: number;

  public getTotalWeight(): number {
    return this._totalWeight;
  }

  public getWearedMask(): number {
    return this._wearedMask;
  }

  public setTotalWeight(value: number) {
    this._totalWeight = value;
  }

  public setWearedMask(value: number) {
    this._wearedMask = value;
  }

  public getPaperdoll(): L2ItemInstance[] {
    return this._paperdoll;
  }

  public setPaperdoll(value: L2ItemInstance[]) {
    this._paperdoll = value;
  }
}
