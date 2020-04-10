import GameClientPacket from "./GameClientPacket";

export default class EtcStatusUpdate extends GameClientPacket {
  //@Override
  readImpl(): boolean {
    let _id = this.readC();
    let _charges = this.readD(); // 1-7 increase force, lvl
    let _weightPenalty = this.readD(); // 1-4 weight penalty, lvl (1=50%, 2=66.6%, 3=80%, 4=100%)
    let _messageRefusal = this.readD(); // 1 = block all chat
    let _isInsideDangerZone = this.readD() == 1;
    let _expertiseWeaponPenalty = this.readD(); // Weapon Grade Penalty [1-4]
    let _expertiseArmorPenalty = this.readD(); // Armor Grade Penalty [1-4]
    let _hasCharmOfCourage = this.readD() == 1; // 1 = charm of courage (allows resurrection on the same spot upon death on the siege battlefield)
    let _deathPenaltyBuffLevel = this.readD(); // 1-15 death penalty, lvl (combat ability decreased due to death)
    let _chargedSouls = this.readD();

    return true;
  }

  //@Override
  run(): void {}
}
