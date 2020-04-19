import GameClientPacket from "./GameClientPacket";

export default class EtcStatusUpdate extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _charges = this.readD(); // 1-7 increase force, lvl
    const _weightPenalty = this.readD(); // 1-4 weight penalty, lvl (1=50%, 2=66.6%, 3=80%, 4=100%)
    const _messageRefusal = this.readD(); // 1 = block all chat
    const _isInsideDangerZone = this.readD() === 1;
    const _expertiseWeaponPenalty = this.readD(); // Weapon Grade Penalty [1-4]
    const _expertiseArmorPenalty = this.readD(); // Armor Grade Penalty [1-4]
    const _hasCharmOfCourage = this.readD() === 1; // 1 = charm of courage (allows resurrection on the same spot upon death on the siege battlefield)
    const _deathPenaltyBuffLevel = this.readD(); // 1-15 death penalty, lvl (combat ability decreased due to death)
    const _chargedSouls = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
