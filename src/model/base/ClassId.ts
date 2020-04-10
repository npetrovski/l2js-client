import { Race } from "../../enums/Race";

export default class ClassId {
  /** The Identifier of the Class */
  private _id!: number;

  /** True if the class is a mage class */
  private _isMage!: boolean;

  /** True if the class is a summoner class */
  private _isSummoner!: boolean;

  /** The Race object of the class */
  private _race!: Race;

  /** The parent ClassId or null if this class is a root */
  private _parent!: ClassId;

  //   constructor(pId: number, pIsMage?: boolean, pIsSummoner?: boolean, race?: Race, pParent?: ClassId) {
  //     this._id = pId;
  //     this._isMage = pIsMage;
  //     this._isSummoner = pIsSummoner;
  //     this._race = race;
  //     this._parent = pParent;
  //   }
}
