export enum SkillOperateType {
  /**
   * Active Skill with "Instant Effect" (for example damage skills heal/pdam/mdam/cpdam skills).
   */
  A1,

  /**
   * Active Skill with "Continuous effect + Instant effect" (for example buff/debuff or damage/heal over time skills).
   */
  A2,

  /**
   * Active Skill with "Instant effect + Continuous effect"
   */
  A3,

  /**
   * Active Skill with "Instant effect + ?" used for special event herb.
   */
  A4,

  /**
   * Continuous Active Skill with "instant effect" (instant effect casted by ticks).
   */
  CA1,

  /**
   * Continuous Active Skill with "continuous effect" (continuous effect casted by ticks).
   */
  CA5,

  /**
   * Directional Active Skill with "Charge/Rush instant effect".
   */
  DA1,

  /**
   * Directional Active Skill with "Charge/Rush Continuous effect".
   */
  DA2,

  /**
   * Passive Skill.
   */
  P,

  /**
   * Toggle Skill.
   */
  T,
}
