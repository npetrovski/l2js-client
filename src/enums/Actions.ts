export enum Actions {
  SIT_STAND = 0, // Sit/Stand

  WALK_RUN = 1, // Walk/Run

  PRIVATE_STORE_SELL = 10, // Private Store - Sell
  PRIVATE_STORE_BUY = 28, // Private Store - Buy
  PRIVATE_STORE_PACKAGE_SELL = 61, // Private Store Package Sell

  PET_CHANGE_MOVEMENT_MODE = 15, // Change Movement Mode (Pets)

  PET_ATTACK = 16, // Attack (Pets)

  PET_STOP = 17, // Stop (Pets)

  PET_UNSUMMON = 19, // Unsummon Pet

  SERVITOR_CHANGE_MOVEMENT_MODE = 21, // Change Movement Mode (Servitors)

  SERVITOR_ATTACK = 22, // Attack (Servitors)

  SERVITOR_SOP = 23, // Stop (Servitors)

  WILD_HOG_CANNON = 32, // Wild Hog Cannon - Wild Cannon

  SOULLESS_TOXIC_SMOKE = 36, // Soulless - Toxic Smoke

  DWARVEN_MANUFACTURE = 37, // Dwarven Manufacture

  MOUNT_DISMOUNT = 38, // Mount/Dismount

  SOULLESS_PARASITE_BURST = 39, // Soulless - Parasite Burst

  WILD_HOG_ATTACK = 41, // Wild Hog Cannon - Attack

  KAI_SELF_SHIELD = 42, // Kai the Cat - Self Damage Shield

  MERROW_HYDRO_SCREW = 43, // Merrow the Unicorn - Hydro Screw

  BIG_BOOM_ATTACK = 44, // Big Boom - Boom Attack

  BOXER_MASTER_RECHARGE = 45, // Boxer the Unicorn - Master Recharge

  MEW_MEGA_STORM_STRIKE = 46, // Mew the Cat - Mega Storm Strike

  SILHOUETTE_STEAL_BLOOD = 47, // Silhouette - Steal Blood

  GOLEM_MECH_CANNON = 48, // Mechanic Golem - Mech. Cannon

  GENERAL_MANUFACTURE = 51, // General Manufacture

  SERVITOR_UNSUMMON = 52, // Unsummon Servitor

  SERVITOR_MOVE_TO_TARGET = 53, // Move to target (Servitors)

  PET_MOVE_TO_TARGET = 54, // Move to target (Pets)

  BOT_REPORT = 65, // Bot Report Button

  STEER = 67, // Steer

  CANCEL_CONTROL = 68, // Cancel Control

  DESTINATION_MAP = 69, // Destination Map

  EXIT_AIRSHIP = 70, // Exit Airship

  COUPLE_SOCIAL_16 = 71, // Couple Social (16)
  COUPLE_SOCIAL_17 = 72, // Couple Social (17)
  COUPLE_SOCIAL_18 = 73, // Couple Social (18)

  SIEGE_GOLEM_HAMMER = 1000, // Siege Golem - Siege Hammer

  SIN_EATER_BUST = 1001, // Sin Eater - Ultimate Bombastic Buster

  STRIDER_WILD_STUN = 1003, // Wind Hatchling/Strider - Wild Stun

  STRIDER_WILD_DEFENSE = 1004, // Wind Hatchling/Strider - Wild Defense

  STRIDER_WILD_BRIGHT_BURST = 1005, // Star Hatchling/Strider - Bright Burst

  STRIDER_WILD_BRIGHT_HEAL = 1006, // Star Hatchling/Strider - Bright Heal

  FELINE_QUEEN_BLESS = 1007, // Feline Queen - Blessing of Queen

  FELINE_QUEEN_G = 1008, // Feline Queen - G

  FELINE_QUEEN_CURE = 1009, // Feline Queen - Cure of Queen

  SERAPHIM_BLESS = 1010, // Unicorn Seraphim - Blessing of Seraphim

  SERAPHIM_G = 1011, // Unicorn Seraphim - G

  SERAPHIM_CURE = 1012, // Unicorn Seraphim - Cure of Seraphim

  NIGHTSHADE_CURSE = 1013, // Nightshade - Curse of Shade

  NIGHTSHADE_MASS_CURSE = 1014, // Nightshade - Mass Curse of Shade

  NIGHTSHADE_SHADE_SACR = 1015, // Nightshade - Shade Sacr

  CURSED_MAN_BLOW = 1016, // Cursed Man - Cursed Blow

  CURSED_MAN_SRIKE = 1017, // Cursed Man - Cursed Strike

  FELINE_KING_SLASH = 1031, // Feline King - Slash

  FELINE_KING_SPINNING_SLASH = 1032, // Feline King - Spinning Slash

  FELINE_KING_HOLD = 1033, // Feline King - Hold of King

  MAGNUS_WHIPLASH = 1034, // Magnus the Unicorn - Whiplash

  MAGNUS_TRIDAL_WAVE = 1035, // Magnus the Unicorn - Tridal Wave

  SPECTRAL_LORD_CORPSE_KABOOM = 1036, // Spectral Lord - Corpse Kaboom

  SPECTRAL_LORD_DICING_DEATH = 1037, // Spectral Lord - Dicing Death

  SPECTRAL_LORD_DARK_CURSE = 1038, // Spectral Lord - Dark Curse

  SWOOP_CANNON_FODDER = 1039, // Swoop Cannon - Cannon Fodder

  SWOOP_CANNON_BIG_BANG = 1040, // Swoop Cannon - Big Bang

  GREAT_WOLF_BITE = 1041, // Great Wolf - Bite Attack

  GREAT_WOLF_MAUL = 1042, // Great Wolf - Maul

  GREAT_WOLF_CRY = 1043, // Great Wolf - Cry of the Wolf

  GREAT_WOLF_AWAKENING = 1044, // Great Wolf - Awakening

  GREAT_WOLF_HOWL = 1045, // Great Wolf - Howl

  STRIDER_ROAR = 1046, // Strider - Roar

  DIVINE_BEAST_BITE = 1047, // Divine Beast - Bite

  DIVINE_BEAST_STUN = 1048, // Divine Beast - Stun Attack

  DIVINE_BEAST_FIRE_BREATH = 1049, // Divine Beast - Fire Breath

  DIVINE_BEAST_ROAR = 1050, // Divine Beast - Roar

  FELINE_QUEEN_BLESS_BODY = 1051, // Feline Queen - Bless The Body

  FELINE_QUEEN_BLESS_SOUL = 1052, // Feline Queen - Bless The Soul

  FELINE_QUEEN_BLESS_HASTE = 1053, // Feline Queen - Haste

  SERAPHIM_ACUMEN = 1054, // Unicorn Seraphim - Acumen

  SERAPHIM_CLARITY = 1055, // Unicorn Seraphim - Clarity

  SERAPHIM_EMPOWER = 1056, // Unicorn Seraphim - Empower

  SERAPHIM_WILD_MAGIC = 1057, // Unicorn Seraphim - Wild Magic

  NIGHTSHADE_DEATH_WHISPER = 1058, // Nightshade - Death Whisper

  NIGHTSHADE_FOCUS = 1059, // Nightshade - Focus

  NIGHTSHADE_GUIDANCE = 1060, // Nightshade - Guidance

  WILD_BEAST_DEATH_BLOW = 1061, // Wild Beast Fighter, White Weasel - Death blow

  WILD_BEAST_DOUBLE_ATTACK = 1062, // Wild Beast Fighter - Double attack

  WILD_BEAST_SPIN_ATTACK = 1063, // Wild Beast Fighter - Spin attack

  WILD_BEAST_METEOR_SHOWER = 1064, // Wild Beast Fighter - Meteor Shower

  FOX_AWAKENING = 1065, // Fox Shaman, Wild Beast Fighter, White Weasel, Fairy Princess - Awakening

  FOX_THUNDER_BOLT = 1066, // Fox Shaman, Spirit Shaman - Thunder Bolt

  FOX_THUNDER_FLASH = 1067, // Fox Shaman, Spirit Shaman - Flash

  FOX_LIGHTNING_WAVE = 1068, // Fox Shaman, Spirit Shaman - Lightning Wave

  FOX_FLARE = 1069, // Fox Shaman, Fairy Princess - Flare

  FOX_BUFF_CONTROL = 1070, // White Weasel, Fairy Princess, Improved Baby Buffalo, Improved Baby Kookaburra, Improved Baby Cougar, Spirit Shaman, Toy Knight, Turtle Ascetic - Buff control

  TIGRESS_POWER_STRIKE = 1071, // Tigress - Power Strike

  TOY_KNIGHT_PIERCING_ATTACK = 1072, // Toy Knight - Piercing attack

  TOY_KNIGHT_WHIRLWIND = 1073, // Toy Knight - Whirlwind

  TOY_KNIGHT_LANCE_SMASH = 1074, // Toy Knight - Lance Smash

  TOY_KNIGHT_BATTLE_CRY = 1075, // Toy Knight - Battle Cry

  TURTLE_ASCETIC_POWER_SMASH = 1076, // Turtle Ascetic - Power Smash

  TURTLE_ASCETIC_ENERGY_BURST = 1077, // Turtle Ascetic - Energy Burst

  TURTLE_ASCETIC_SHOCKWAVE = 1078, // Turtle Ascetic - Shockwave

  TURTLE_ASCETIC_HOWL = 1079, // Turtle Ascetic - Howl

  PHOENIX_RUSH = 1080, // Phoenix Rush

  PHOENIX_CLEANSE = 1081, // Phoenix Cleanse

  PHOENIX_FLAME_FEATHER = 1082, // Phoenix Flame Feather

  PHOENIX_FLAME_BEAK = 1083, // Phoenix Flame Beak

  SWITCH_STATE = 1084, // Switch State

  PANTHER_CANCEL = 1086, // Panther Cancel

  PANTHER_DARK_CLAW = 1087, // Panther Dark Claw

  PANTHER_FATAL_CLAW = 1088, // Panther Fatal Claw

  DEINONYCHUS_TAIL_STRIKE = 1089, // Deinonychus - Tail Strike

  GUARDIAN_STRIDER_BITE = 1090, // Guardian's Strider - Strider Bite

  GUARDIAN_STRIDER_FEAR = 1091, // Guardian's Strider - Strider Fear

  GUARDIAN_STRIDER_DASH = 1092, // Guardian's Strider - Strider Dash

  MAGUEN_STRIKE = 1093, // Maguen - Maguen Strike

  MAGUEN_WIND_WALK = 1094, // Maguen - Maguen Wind Walk

  ELITE_MAGUEN_POWER_STRIKE = 1095, // Elite Maguen - Maguen Power Strike

  ELITE_MAGUEN_WIND_WALK = 1096, // Elite Maguen - Elite Maguen Wind Walk

  MAGUEN_RETURN = 1097, // Maguen - Maguen Return

  ELITE_MAGUEN_PARTY_RETURN = 1098, // Elite Maguen - Maguen Party Return

  BABY_RUDOLPH_REINDEER_SCRATCH = 5000, // Baby Rudolph - Reindeer Scratch

  DESELOPH_ROSY_SEDUCTION = 5001, // Deseloph, Hyum, Rekang, Lilias, Lapham, Mafum - Rosy Seduction

  DESELOPH_CRITICAL_SEDUCTION = 5002, // Deseloph, Hyum, Rekang, Lilias, Lapham, Mafum - Critical Seduction

  HYMN_THUNDER_BOLT = 5003, // Hyum, Lapham, Hyum, Lapham - Thunder Bolt

  HYMN_FLASH = 5004, // Hyum, Lapham, Hyum, Lapham - Flash

  HYMN_LIGHTNING_WAVE = 5005, // Hyum, Lapham, Hyum, Lapham - Lightning Wave

  DESELOPH_BUFF_CONTROL = 5006, // Deseloph, Hyum, Rekang, Lilias, Lapham, Mafum, Deseloph, Hyum, Rekang, Lilias, Lapham, Mafum - Buff Control

  DESELOPH_PIERCING_ATTACK = 5007, // Deseloph, Lilias, Deseloph, Lilias - Piercing Attack

  DESELOPH_SPIN_ATTACK = 5008, // Deseloph, Lilias, Deseloph, Lilias - Spin Attack

  DESELOPH_SMASH = 5009, // Deseloph, Lilias, Deseloph, Lilias - Smash

  DESELOPH_IGNITE = 5010, // Deseloph, Lilias, Deseloph, Lilias - Ignite

  REKANG_POWER_SMASH = 5011, // Rekang, Mafum, Rekang, Mafum - Power Smash

  REKANG_ENERGY_BURST = 5012, // Rekang, Mafum, Rekang, Mafum - Energy Burst

  REKANG_SHOCKWAVE = 5013, // Rekang, Mafum, Rekang, Mafum - Shockwave

  REKANG_IGNITE = 5014, // Rekang, Mafum, Rekang, Mafum - Ignite

  DESELOPH_SWITCH_STANCE = 5015, // Deseloph, Hyum, Rekang, Lilias, Lapham, Mafum, Deseloph, Hyum, Rekang, Lilias, Lapham, Mafum - Switch Stance

  // Social Packets
  SOCIAL_GREETING = 12, // Greeting

  SOCIAL_VICROTY = 13, // Victory

  SOCIAL_ADVANCE = 14, // Advance

  SOCIAL_YES = 24, // Yes

  SOCIAL_NO = 25, // No

  SOCIAL_BOW = 26, // Bow

  SOCIAL_UNWARE = 29, // Unaware

  SOCIAL_WAITING = 30, // Social Waiting

  SOCIAL_LAUGH = 31, // Laugh

  SOCIAL_APPLAUD = 33, // Applaud

  SOCIAL_DANCE = 34, // Dance

  SOCIAL_SORROW = 35, // Sorrow

  SOCIAL_CHARM = 62, // Charm

  SOCIAL_SHYNESS = 66, // Shyness
}
