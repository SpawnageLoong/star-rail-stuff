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

export interface pieceImg {
  name: string;
  img: string;
}
interface relicSetMeta {
  ornament: boolean;
  setName: string;
  pieces: pieceImg[];
  twoPieceEffect: string;
  fourPieceEffect: string;
};
export const setMetadata: relicSetMeta[] = [
  {
    ornament: false,
    setName: "Musketeer of Wild Wheat",
    pieces: [
      {
        name: "Musketeer's Wild Wheat Felt Hat",
        img: "/images/relics/atk_head.webp"
      }, {
        name: "Musketeer's Coarse Leather Gloves",
        img: "/images/relics/atk_hands.webp"
      }, {
        name: "Musketeer's Wind-Hunting Shawl",
        img: "/images/relics/atk_body.webp"
      }, {
        name: "Musketeer's Rivets Riding Boots",
        img: "/images/relics/atk_feet.webp"
      }
    ],
    twoPieceEffect: "ATK increases by 12%.",
    fourPieceEffect: "The wearer's SPD increases by 6% and Basic ATK DMG increases by 10%."
  }, {
    ornament: false,
    setName: "Thief of Shooting Meteor",
    pieces: [
      {
        name: "Thief's Myriad-Faced Mask",
        img: "/images/relics/break_head.webp"
      }, {
        name: "Thief's Gloves With Prints",
        img: "/images/relics/break_hands.webp"
      }, {
        name: "Thief's Steel Grappling Hook",
        img: "/images/relics/break_body.webp"
      }, {
        name: "Thief's Meteor Boots",
        img: "/images/relics/break_feet.webp"
      }
    ],
    twoPieceEffect: "Increases Break Effect by 16%",
    fourPieceEffect: "Increases the wearer's Break Effect by 16%. When the wearer inflicts Weakness Break on an enemy, regenerates 3 Energy."
  }, {
    ornament: false,
    setName: "Knight of Purity Palace",
    pieces: [
      {
        name: "Knight's Forgiving Casque",
        img: "/images/relics/def_head.webp"
      }, {
        name: "Knight's Silent Oath Ring",
        img: "/images/relics/def_hands.webp"
      }, {
        name: "Knight's Solemn Breastplate",
        img: "/images/relics/def_body.webp"
      }, {
        name: "Knight's Iron Boots of Order",
        img: "/images/relics/def_feet.webp"
      }
    ],
    twoPieceEffect: "Increases DEF by 15%.",
    fourPieceEffect: "Increases the max DMG that can be absorbed by the shield created by the wearer by 20%."
  }, {
    ornament: false,
    setName: "Guard of Wuthering Snow",
    pieces: [
      {
        name: "Guard's Cast Iron Helmet",
        img: "/images/relics/dmgreduct_head.webp"
      }, {
        name: "Guard's Shining Gauntlets",
        img: "/images/relics/dmgreduct_hands.webp"
      }, {
        name: "Guard's Uniform of Old",
        img: "/images/relics/dmgreduct_body.webp"
      }, {
        name: "Guard's Silver Greaves",
        img: "/images/relics/dmgreduct_feet.webp"
      }
    ],
    twoPieceEffect: "Reduces DMG taken by 8%.",
    fourPieceEffect: "At the beginning of the turn, if the wearer's HP is equal to or less than 50% of their Max HP, restores HP equal to 8% of their Max HP and regenerates 5 Energy."
  }, {
    ornament: false,
    setName: "Passerby of Wandering Cloud",
    pieces: [
      {
        name: "Passerby's Rejuvenated Wooden Hairstick",
        img: "/images/relics/heal_head.webp"
      }, {
        name: "Passerby's Roaming Dragon Bracer",
        img: "/images/relics/heal_hands.webp"
      }, {
        name: "Passerby's Ragged Embroided Coat",
        img: "/images/relics/heal_body.webp"
      }, {
        name: "Passerby's Stygian Hiking Boots",
        img: "/images/relics/heal_feet.webp"
      }
    ],
    twoPieceEffect: "Increases Outgoing Healing by 10%.",
    fourPieceEffect: "At the beginning of the battle, immediately recovers 1 Skill Point."
  }, {
    ornament: false,
    setName: "Champion of Streetwise Boxing",
    pieces: [
      {
        name: "Champion's Headgear",
        img: "/images/relics/phys_head.webp"
      }, {
        name: "Champion's Heavy Gloves",
        img: "/images/relics/phys_hands.webp"
      }, {
        name: "Champion's Chest Guard",
        img: "/images/relics/phys_body.webp"
      }, {
        name: "Champion's Fleetfoot Boots",
        img: "/images/relics/phys_feet.webp"
      }
    ],
    twoPieceEffect: "Increases Physical DMG by 10%.",
    fourPieceEffect: "After the wearer attacks or is hit, their ATK increases by 5% for the rest of the battle. This effect can stack up to 5 time(s)."
  }, {
    ornament: false,
    setName: "Firesmith of Lava-Forging",
    pieces: [
      {
        name: "Firesmith's Obsidian Goggles",
        img: "/images/relics/fire_head.webp"
      }, {
        name: "Firesmith's Ring of Flame-Mastery",
        img: "/images/relics/fire_hands.webp"
      }, {
        name: "Firesmith's Fireproof Apron",
        img: "/images/relics/fire_body.webp"
      }, {
        name: "Firesmith's Alloy Leg",
        img: "/images/relics/fire_feet.webp"
      }
    ],
    twoPieceEffect: "Increases Fire DMG by 10%.",
    fourPieceEffect: "Increases the wearer's Skill DMG by 12%. After unleashing Ultimate, increases the wearer's Fire DMG by 12% for next attack."
  }, {
    ornament: false,
    setName: "Hunter of Glacial Forest",
    pieces: [
      {
        name: "Hunter's Artaius Hood",
        img: "/images/relics/ice_head.webp"
      }, {
        name: "Hunter's Lizard Gloves",
        img: "/images/relics/ice_hands.webp"
      }, {
        name: "Hunter's Ice Dragon Cloak",
        img: "/images/relics/ice_body.webp"
      }, {
        name: "Hunter's Soft Elkskin Boots",
        img: "/images/relics/ice_feet.webp"
      }
    ],
    twoPieceEffect: "Increases Ice DMG by 10%.",
    fourPieceEffect: "After the wearer unleashes their Ultimate, their CRIT DMG increases by 25% for 2 turn(s)."
  }, {
    ornament: false,
    setName: "Band of Sizzling Thunder",
    pieces: [
      {
        name: "Band's Polarized Sunglasses",
        img: "/images/relics/lightning_head.webp"
      }, {
        name: "Band's Touring Bracelet",
        img: "/images/relics/lightning_hands.webp"
      }, {
        name: "Band's Leather Jacket With Studs",
        img: "/images/relics/lightning_body.webp"
      }, {
        name: "Band's Ankle Boots With Rivets",
        img: "/images/relics/lightning_feet.webp"
      }
    ],
    twoPieceEffect: "Increases Lightning DMG by 10%.",
    fourPieceEffect: "When the wearer uses Skill, increases the wearer's ATK by 20% for 1 turn(s)."
  }, {
    ornament: false,
    setName: "Eagle of Twilight Line",
    pieces: [
      {
        name: "Eagle's Beaked Helmet",
        img: "/images/relics/wind_head.webp"
      }, {
        name: "Eagle's Soaring Ring",
        img: "/images/relics/wind_hands.webp"
      }, {
        name: "Eagle's Winged Suit Harness",
        img: "/images/relics/wind_body.webp"
      }, {
        name: "Eagle's Quilted Puttees",
        img: "/images/relics/wind_feet.webp"
      }
    ],
    twoPieceEffect: "Increases Wind DMG by 10%. ",
    fourPieceEffect: "After the wearer uses Ultimate, their action is Advanced Forward by 25%."
  }, {
    ornament: false,
    setName: "Genius of Brilliant Stars",
    pieces: [
      {
        name: "Genius's Ultraremote Sensing Visor",
        img: "/images/relics/quantum_head.webp"
      }, {
        name: "Genius's Frequency Catcher",
        img: "/images/relics/quantum_hands.webp"
      }, {
        name: "Genius's Metafield Suit",
        img: "/images/relics/quantum_body.webp"
      }, {
        name: "Genius's Gravity Walker",
        img: "/images/relics/quantum_feet.webp"
      }
    ],
    twoPieceEffect: "Increases Quantum DMG by 10%",
    fourPieceEffect: "When the wearer deals DMG to the target enemy, ignores 10% DEF. If the target enemy has Quantum Weakness, the wearer additionally ignores 10% DEF."
  }, {
    ornament: false,
    setName: "Wastelander of Banditry Desert",
    pieces: [
      {
        name: "Wastelander's Breathing Mask",
        img: "/images/relics/imaginary_head.webp"
      }, {
        name: "Wastelander's Desert Terminal",
        img: "/images/relics/imaginary_hands.webp"
      }, {
        name: "Wastelander's Friar Robe",
        img: "/images/relics/imaginary_body.webp"
      }, {
        name: "Wastelander's Powered Greaves",
        img: "/images/relics/imaginary_feet.webp"
      }
    ],
    twoPieceEffect: "Increases Imaginary DMG by 10%.",
    fourPieceEffect: "When attacking debuffed enemies, the wearer's CRIT Rate increases by 10%, and their CRIT DMG increases by 20% against Imprisoned enemies."
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

export const mainStatIcons = [
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

export const substatIcons = [
  "",
  "/images/stat_icons/stat_hp.webp",
  "/images/stat_icons/stat_atk.webp",
  "/images/stat_icons/stat_def.webp",
  "/images/stat_icons/stat_hp.webp",
  "/images/stat_icons/stat_atk.webp",
  "/images/stat_icons/stat_def.webp",
  "/images/stat_icons/stat_critrate.webp",
  "/images/stat_icons/stat_critdmg.webp",
  "/images/stat_icons/stat_effecthit.webp",
  "/images/stat_icons/stat_effectres.webp",
  "/images/stat_icons/stat_break.webp",
  "/images/stat_icons/stat_speed.webp"
]

export const relicPieceNames = [
  "Head",
  "Hands",
  "Body",
  "Feet"
]

export const ornamentPieceNames = [
  "Planar Sphere",
  "Link Rope"
]