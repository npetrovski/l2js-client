import IIdentifiable from "../interfaces/IIdentifiable";

export default class L2Item implements IIdentifiable {
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

  private _itemId!: number;

  getId(): number {
    return this._itemId;
  }
}
