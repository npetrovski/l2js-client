import L2Object from "./L2Object";
import { Element } from "../enums/Element";
import { ItemType } from "../enums/ItemType";
import { ItemGrade } from "../enums/ItemGrade";
import L2ObjectCollection from "./L2ObjectCollection";

export default class L2Item extends L2Object {
  static readonly SLOT_NONE: number = 0x0000;
  static readonly SLOT_UNDERWEAR: number = 0x0001;
  static readonly SLOT_R_EAR: number = 0x0002;
  static readonly SLOT_L_EAR: number = 0x0004;
  static readonly SLOT_LR_EAR: number = 0x00006;
  static readonly SLOT_NECK: number = 0x0008;
  static readonly SLOT_R_FINGER: number = 0x0010;
  static readonly SLOT_L_FINGER: number = 0x0020;
  static readonly SLOT_LR_FINGER: number = 0x0030;
  static readonly SLOT_HEAD: number = 0x0040;
  static readonly SLOT_R_HAND: number = 0x0080;
  static readonly SLOT_L_HAND: number = 0x0100;
  static readonly SLOT_GLOVES: number = 0x0200;
  static readonly SLOT_CHEST: number = 0x0400;
  static readonly SLOT_LEGS: number = 0x0800;
  static readonly SLOT_FEET: number = 0x1000;
  static readonly SLOT_BACK: number = 0x2000;
  static readonly SLOT_LR_HAND: number = 0x4000;
  static readonly SLOT_FULL_ARMOR: number = 0x8000;
  static readonly SLOT_HAIR: number = 0x010000;
  static readonly SLOT_ALLDRESS: number = 0x020000;
  static readonly SLOT_HAIR2: number = 0x040000;
  static readonly SLOT_HAIRALL: number = 0x080000;
  static readonly SLOT_R_BRACELET: number = 0x100000;
  static readonly SLOT_L_BRACELET: number = 0x200000;
  static readonly SLOT_DECO: number = 0x400000;
  static readonly SLOT_BELT: number = 0x10000000;
  static readonly SLOT_WOLF: number = -100;
  static readonly SLOT_HATCHLING: number = -101;
  static readonly SLOT_STRIDER: number = -102;
  static readonly SLOT_BABYPET: number = -103;
  static readonly SLOT_GREATWOLF: number = -104;

  static readonly SLOT_MULTI_ALLWEAPON = L2Item.SLOT_LR_HAND | L2Item.SLOT_R_HAND;

  private _attackElementType!: Element;
  private _attackElementVal!: number;
  private _defAttFire!: number;
  private _defAttWater!: number;
  private _defAttWind!: number;
  private _defAttEarth!: number;
  private _defAttHolly!: number;
  private _defAttUnholly!: number;
  private _augmentBonus!: number;
  private _isEquipped!: boolean;
  private _isQuest!: boolean;
  private _isCrystalizable!: boolean;
  private _isStackable!: boolean;
  private _price!: number;
  private _type!: ItemType;
  private _grade!: ItemGrade;
  private _enchantLevel!: number;
  private _count!: number;
  private _ingredients: L2ObjectCollection<L2Item> = new L2ObjectCollection();

  public get AttackElementVal(): number {
    return this._attackElementVal;
  }

  public set AttackElementVal(value: number) {
    this._attackElementVal = value;
  }

  public get DefAttFire(): number {
    return this._defAttFire;
  }

  public set DefAttFire(value: number) {
    this._defAttFire = value;
  }

  public get DefAttWater(): number {
    return this._defAttWater;
  }

  public set DefAttWater(value: number) {
    this._defAttWater = value;
  }
  public get DefAttWind(): number {
    return this._defAttWind;
  }

  public set DefAttWind(value: number) {
    this._defAttWind = value;
  }
  public get DefAttEarth(): number {
    return this._defAttEarth;
  }

  public set DefAttEarth(value: number) {
    this._defAttEarth = value;
  }
  public get DefAttHolly(): number {
    return this._defAttHolly;
  }

  public set DefAttHolly(value: number) {
    this._defAttHolly = value;
  }
  public get DefAttUnholly(): number {
    return this._defAttUnholly;
  }

  public set DefAttUnholly(value: number) {
    this._defAttUnholly = value;
  }
  public get AugmentBonus(): number {
    return this._augmentBonus;
  }

  public set AugmentBonus(value: number) {
    this._augmentBonus = value;
  }
  public get IsEquipped(): boolean {
    return this._isEquipped;
  }

  public set IsEquipped(value: boolean) {
    this._isEquipped = value;
  }
  public get IsQuest(): boolean {
    return this._isQuest;
  }

  public set IsQuest(value: boolean) {
    this._isQuest = value;
  }
  public get IsCrystalizable(): boolean {
    return this._isCrystalizable;
  }

  public set IsCrystalizable(value: boolean) {
    this._isCrystalizable = value;
  }
  public get IsStackable(): boolean {
    return this._isStackable;
  }

  public set IsStackable(value: boolean) {
    this._isStackable = value;
  }
  public get Price(): number {
    return this._price;
  }

  public set Price(value: number) {
    this._price = value;
  }
  public get EnchantLevel(): number {
    return this._enchantLevel;
  }

  public set EnchantLevel(value: number) {
    this._enchantLevel = value;
  }
  public get Count(): number {
    return this._count;
  }

  public set Count(value: number) {
    this._count = value;
  }
}
