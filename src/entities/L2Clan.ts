import L2Object from "@entities/L2Object";

export default class L2Clan extends L2Object {
  CrestId = 0;
  AllyId = 0;
  AllyCrestId = 0;
  AllyName = "";
  Level = 0;

  constructor(init?: Partial<L2Clan>) {
    super();
    if (init) {Object.assign(this, init);}
  }
}
