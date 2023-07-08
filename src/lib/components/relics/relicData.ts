interface mainStatMeta {
  name: string,
  min: number,
  max: number,
  float: boolean,
};
export const mainStatMetadata: mainStatMeta[] = [
  {
    name: "HP",
    min: 112,
    max: 705,
    float: false,
  }, {
    name: "ATK",
    min: 56,
    max: 352,
    float: false,
  }, {
    name: "HP%",
    min: 6.9,
    max: 43.2,
    float: true,
  }, {
    name: "ATK%",
    min: 6.9,
    max: 43.2,
    float: true,
  }, {
    name: "DEF%",
    min: 8.6,
    max: 54,
    float: true,
  }, {
    name: "CRIT Rate",
    min: 5.1,
    max: 32.4,
    float: true,
  }, {
    name: "CRIT DMG",
    min: 10.3,
    max: 64.8,
    float: true,
  }, {
    name: "Outgoing Healing",
    min: 5.5,
    max: 34.5,
    float: true,
  }, {
    name: "Effect Hit Rate",
    min: 6.9,
    max: 43.2,
    float: true,
  }, {
    name: "Speed",
    min: 1,
    max: 25,
    float: false,
  }, {
    name: "Physical DMG",
    min: 6.2,
    max: 38.8,
    float: true,
  }, {
    name: "Fire DMG",
    min: 6.2,
    max: 38.8,
    float: true,
  }, {
    name: "Ice DMG",
    min: 6.2,
    max: 38.8,
    float: true,
  }, {
    name: "Lightning DMG",
    min: 6.2,
    max: 38.8,
    float: true,
  }, {
    name: "Wind DMG",
    min: 6.2,
    max: 38.8,
    float: true,
  }, {
    name: "Quantum DMG",
    min: 6.2,
    max: 38.8,
    float: true,
  }, {
    name: "Imaginary DMG",
    min: 6.2,
    max: 38.8,
    float: true,
  }, {
    name: "Break Effect",
    min: 10.3,
    max: 64.8,
    float: true,
  }, {
    name: "Energy Regen Rate",
    min: 3.1,
    max: 19.4,
    float: true,
  }
];

interface substatMeta {
  name: string;
  min: number;
  max: number;
  float: boolean;
};
export const substatMetadata: substatMeta[] = [
  {
    name: "None",
    min: 0,
    max: 0,
    float: false
  }, {
    name: "HP",
    min: 33,
    max: 42,
    float: false
  }, {
    name: "ATK",
    min: 16,
    max: 21,
    float: false
  }, {
    name: "DEF",
    min: 16,
    max: 21,
    float: false
  }, {
    name: "HP%",
    min: 3.4,
    max: 4.4,
    float: true
  }, {
    name: "ATK%",
    min: 3.4,
    max: 4.4,
    float: true
  }, {
    name: "DEF%",
    min: 4.3,
    max: 5.4,
    float: true
  }, {
    name: "CRIT Rate",
    min: 2.5,
    max: 3.4,
    float: true
  }, {
    name: "CRIT DMG",
    min: 5.1,
    max: 6.5,
    float: true
  }, {
    name: "Effect HIT Rate",
    min: 3.4,
    max: 4.4,
    float: true
  }, {
    name: "Effect RES",
    min: 3.4,
    max: 4.4,
    float: true
  }, {
    name: "Break Effect",
    min: 5.1,
    max: 6.5,
    float: true
  }, {
    name: "Speed",
    min: 2,
    max: 3,
    float: false
  }
];

interface relicMeta {
  name: string;
  img: string;
  relicSet: number;
  piece: number;
}
export const relicMetadata: relicMeta[] = [
  {
    name: "Genius's Ultraremote Sensing Visor",
    img: "/images/relics/quantum_head.webp",
    relicSet: 0,
    piece: 0
  }, {
    name: "Genius's Frequency Catcher",
    img: "/images/relics/quantum_hands.webp",
    relicSet: 0,
    piece: 1
  }, {
    name: "Genius's Metafield Suit",
    img: "/images/relics/quantum_body.webp",
    relicSet: 0,
    piece: 2
  }, {
    name: "Genius's Gravity Walker",
    img: "/images/relics/quantum_feet.webp",
    relicSet: 0,
    piece: 3
  }
];

interface ornamentMeta {
  name: string;
  img: string;
  ornamentSet: number;
  piece: number;
}
export const ornamentMetadata: ornamentMeta[] = [
  {
    name: "Hertha's Space Station",
    img: "/images/relics/atk_orb.webp",
    ornamentSet: 0,
    piece: 4
  }, {
    name: "Hertha's Wandering Trek",
    img: "/images/relics/atk_rope.webp",
    ornamentSet: 0,
    piece: 5
  }
];

interface ornamentEffects {
  setName: string;
  statEffect: number[];
  bonusEffect: number[];
  bonusCondition: number[];
};
export const ornamentEffects: ornamentEffects[] = [
  {
    setName: "Space Sealing Station",
    statEffect: [3, 12],
    bonusEffect: [3, 12],
    bonusCondition: [9, 120]
  }
];

export interface relicData {
  id: string;
  nickname: string;
  level: number;
  mainStat: number;
  piece: number;
  set: number;
  substatIDs: number[];
  substatValues: number[]
}

export const substatIcons = [
  "",
  "/images/stat_icons/stat_hp.webp",
  "/images/stat_icons/stat_atk.webp",
  "/images/stat_icons/stat_hp.webp",
  "/images/stat_icons/stat_atk.webp",
  "/images/stat_icons/stat_def.webp",
  "/images/stat_icons/stat_critrate.webp",
  "/images/stat_icons/stat_critdmg.webp",
  "/images/stat_icons/stat_healing.webp",
  "/images/stat_icons/stat_effecthit.webp",
  "/images/stat_icons/stat_speed.webp",
  "/images/stat_icons/stat_phydmg.webp",
  "/images/stat_icons/stat_firedmg.webp",
  "/images/stat_icons/stat_icedmg.webp",
  "/images/stat_icons/stat_lightningdmg.webp",
  "/images/stat_icons/stat_winddmg.webp",
  "/images/stat_icons/stat_quantumdmg.webp",
  "/images/stat_icons/stat_imaginarydmg.webp",
  "/images/stat_icons/stat_break.webp",
  "/images/stat_icons/stat_energy.webp"
]
  