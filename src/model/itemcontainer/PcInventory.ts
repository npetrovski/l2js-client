import Inventory from "./Inventory";
import L2PcInstance from "../actor/instance/L2PcInstance";
import L2ItemInstance from "../items/instance/L2ItemInstance";

export default class PcInventory extends Inventory {
  private _owner!: L2PcInstance;

  private _adena!: L2ItemInstance;

  private _ancientAdena!: L2ItemInstance;

  private _blockItems!: number[];

  private _questSlots!: number;

  public getOwner(): L2PcInstance {
    return this._owner;
  }

  public setOwner(value: L2PcInstance) {
    this._owner = value;
  }

  public getAncientAdena(): L2ItemInstance {
    return this._ancientAdena;
  }

  public setAncientAdena(value: L2ItemInstance) {
    this._ancientAdena = value;
  }

  public getAdena(): L2ItemInstance {
    return this._adena;
  }

  public setAdena(value: L2ItemInstance) {
    this._adena = value;
  }

  public getBlockItems(): number[] {
    return this._blockItems;
  }

  public getQuestSlots(): number {
    return this._questSlots;
  }

  public setBlockItems(value: number[]) {
    this._blockItems = value;
  }

  public setQuestSlots(value: number) {
    this._questSlots = value;
  }
}
