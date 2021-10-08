import GameClientPacket from "./GameClientPacket";

export default class ExFishingHpRegen extends GameClientPacket {
  ObjectId!: number;
  HpMode!: number;
  Deceptive!: number;

  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _sub = this.readH();

    this.ObjectId = this.readD();
    const _time = this.readD();
    const _fishHp = this.readD();
    this.HpMode = this.readC(); // 0 = HP stop, 1 = HP raise
    const _goodUse = this.readC(); // 0 = none, 1 = success, 2 = failed
    const _anim = this.readC(); // Anim: 0 = none, 1 = reeling, 2 = pumping
    const _penalty = this.readD();
    this.Deceptive = this.readC(); // 0 = normal hp bar, 1 = purple hp bar

    return true;
  }
}
