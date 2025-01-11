export const Consumables = [
  {
    id: 1,
    name: "Low Grade Medical Supplies",
    rarity: "Common",
    description:
      "Low Grade Medical Supplies good for colds and sprains.\r\nThey don't heal Health when eaten, however.",
    image: require("../assets/images/consumables/low-grade-medical-supplies.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Herbs.webp",
    recipe: [
      {
        name: "Red Berries",
        quantity: 5,
        image: require("../assets/images/items/red-berries.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
      },
      {
        name: "Horn",
        quantity: 2,
        image: require("../assets/images/items/horn.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 1,
      "Gold Coin": 240,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Herbs",
      Nutrition: 1,
      SAN: 0,
      IconName: "Herbs",
      TypeA: "Consume",
      TypeB: "Medicine",
      SortID: 4100,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
  },
  {
    id: 2,
    name: "Medical Supplies",
    rarity: "Common",
    description:
      "Strange Medical Supplies that are effective at treating Ulcer and Fracture.\r\nUnfortunately, they have no healing effect.",
    image: require("../assets/images/consumables/medical-supplies.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Medicines.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 3,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Horn",
        quantity: 3,
        image: require("../assets/images/items/horn.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
      },
      {
        name: "Bone",
        quantity: 1,
        image: require("../assets/images/items/bone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 2,
      "Gold Coin": 800,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Medicines",
      Nutrition: 1,
      SAN: 0,
      IconName: "Medicines",
      TypeA: "Consume",
      TypeB: "Medicine",
      SortID: 4101,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
  },
  {
    id: 3,
    name: "High Grade Medical Supplies",
    rarity: "Common",
    description:
      "High Grade Medical Supplies that are effective at treating Weakened and Depressed.\r\nUnfortunately, they have no healing effect.",
    image: require("../assets/images/consumables/high-grade-medical-supplies.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_LuxuryMedicines.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 5,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Horn",
        quantity: 5,
        image: require("../assets/images/items/horn.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
      },
      {
        name: "Bone",
        quantity: 2,
        image: require("../assets/images/items/bone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 3,
      "Gold Coin": 3000,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "LuxuryMedicines",
      Nutrition: 1,
      SAN: 0,
      IconName: "LuxuryMedicines",
      TypeA: "Consume",
      TypeB: "Medicine",
      SortID: 4102,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
  },
  {
    id: 4,
    name: "Mind Control Meds",
    rarity: "Common",
    description:
      "Mind Control Meds that are extremely effective in controlling dissidents.\r\nUnfortunately, they have no healing effect.",
    image: require("../assets/images/consumables/mind-control-meds.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_MindControlDrug.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 10,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Horn",
        quantity: 10,
        image: require("../assets/images/items/horn.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
      },
      {
        name: "Bone",
        quantity: 5,
        image: require("../assets/images/items/bone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bone.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 3,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 10000,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "MindControlDrug",
      Nutrition: 1,
      SAN: 0,
      IconName: "MindControlDrug",
      TypeA: "Consume",
      TypeB: "Medicine",
      SortID: 4103,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
  },
  {
    id: 5,
    name: "Suspicious Juice",
    rarity: "Common",
    description:
      "Juice that improves mood when consumed.\r\nDrinking it increases work speed for a period of time,\r\nbut lowers SAN.",
    image: require("../assets/images/consumables/suspicious-juice.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Opium.webp",
    recipe: [
      {
        name: "Beautiful Flower",
        quantity: 3,
        image: require("../assets/images/items/beautiful-flower.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Poppy.webp",
      },
      {
        name: "Horn",
        quantity: 3,
        image: require("../assets/images/items/horn.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
      },
      {
        name: "Bone",
        quantity: 1,
        image: require("../assets/images/items/bone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bone.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 1,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 2,
      "Gold Coin": 10000,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Opium",
      Nutrition: 1,
      SAN: 30,
      IconName: "Opium",
      TypeA: "Consume",
      TypeB: "Drug",
      SortID: 4121,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    san: 30,
    stamina_work: 200,
    recovery_time: 10,
  },
  {
    id: 6,
    name: "Strange Juice",
    rarity: "Common",
    description:
      "Juice that greatly improves mood when consumed.\r\nDrinking it significantly increases work speed for a period of time,\r\nbut significantly lowers SAN.",
    image: require("../assets/images/consumables/strange-juice.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Narcotic.webp",
    recipe: [
      {
        name: "Beautiful Flower",
        quantity: 5,
        image: require("../assets/images/items/beautiful-flower.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Poppy.webp",
      },
      {
        name: "Horn",
        quantity: 5,
        image: require("../assets/images/items/horn.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
      },
      {
        name: "Bone",
        quantity: 2,
        image: require("../assets/images/items/bone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bone.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 2,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 3,
      "Gold Coin": 40000,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Narcotic",
      Nutrition: 1,
      SAN: 60,
      IconName: "Narcotic",
      TypeA: "Consume",
      TypeB: "Drug",
      SortID: 4122,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    san: 60,
    stamina_work: 400,
    recovery_time: 10,
  },
  {
    id: 7,
    name: "Memory Wiping Medicine",
    rarity: "Common",
    description:
      "A potion that allows the player to reset their status points when consumed.\r\nIt has no effect if consumed by a Pal.",
    image: require("../assets/images/consumables/memory-wiping-medicine.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_StatusPointResetSan.webp",
    recipe: [
      {
        name: "Beautiful Flower",
        quantity: 99,
        image: require("../assets/images/items/beautiful-flower.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Poppy.webp",
      },
      {
        name: "Horn",
        quantity: 50,
        image: require("../assets/images/items/horn.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
      },
      {
        name: "Bone",
        quantity: 50,
        image: require("../assets/images/items/bone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bone.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 50,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 10000,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "StatusPointResetSan",
      Nutrition: 1,
      SAN: 1,
      IconName: "StatusPointResetSan",
      TypeA: "Consume",
      TypeB: "Drug",
      SortID: 4124,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    san: 1,
  },
  {
    id: 8,
    name: "High Grade Technical Manual",
    rarity: "Uncommon",
    description:
      "A book that contains secrets of amazing technology.\r\nUse it to obtain a few Technology Points.",
    image: require("../assets/images/consumables/high-grade-technical-manual.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_TechnologyBook_G1.webp",
    recipe: [],
    stats: {
      Rarity: "Uncommon",
      Type: "Consumable",
      Rank: 5,
      "Gold Coin": 1,
      MaxStackCount: 9999,
      Code: "TechnologyBook_G1",
      IconName: "TechnologyBook_G1",
      TypeA: "Consume",
      TypeB: "ConsumeTechnologyBook",
      SortID: 6100,
      ItemStaticClass: "Consume_GrantTechnologyPoint",
      VisualBlueprintClassName: "BP_Item_Technicalbook",
      SneakAttackRate: 1,
      FloatValue1: 1,
    },
    technology_points: 1,
  },
  {
    id: 9,
    name: "Innovative Technical Manual",
    rarity: "Rare",
    description:
      "A book that contains secrets of cutting-edge technology.\r\nUse it to obtain Technology Points.",
    image: require("../assets/images/consumables/innovative-technical-manual.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_TechnologyBook_G2.webp",
    recipe: [],
    stats: {
      Rarity: "Rare",
      Type: "Consumable",
      Rank: 5,
      "Gold Coin": 1,
      MaxStackCount: 9999,
      Code: "TechnologyBook_G2",
      IconName: "TechnologyBook_G2",
      TypeA: "Consume",
      TypeB: "ConsumeTechnologyBook",
      SortID: 6101,
      ItemStaticClass: "Consume_GrantTechnologyPoint",
      VisualBlueprintClassName: "BP_Item_Technicalbook",
      SneakAttackRate: 1,
      FloatValue1: 2,
    },
    technology_points: 2,
  },
  {
    id: 10,
    name: "Future Technical Manual",
    rarity: "Epic",
    description:
      "A book that contains secrets of technology beyond current day comprehension.\r\nUse it to obtain lots of Technology Points.",
    image: require("../assets/images/consumables/future-technical-manual.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_TechnologyBook_G3.webp",
    recipe: [],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 5,
      "Gold Coin": 1,
      MaxStackCount: 9999,
      Code: "TechnologyBook_G3",
      IconName: "TechnologyBook_G3",
      TypeA: "Consume",
      TypeB: "ConsumeTechnologyBook",
      SortID: 6102,
      ItemStaticClass: "Consume_GrantTechnologyPoint",
      VisualBlueprintClassName: "BP_Item_Technicalbook",
      SneakAttackRate: 1,
      FloatValue1: 3,
    },
    technology_points: 3,
  },
  {
    id: 11,
    name: "Ancient Technical Manual",
    rarity: "Legendary",
    description:
      "A book that contains long-lost secrets of technology from a forgotten era.\r\nUse it to obtain Ancient Technology Points.",
    image: require("../assets/images/consumables/ancient-technical-manual.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_TechnologyBook_G4.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 5,
      "Gold Coin": 1,
      MaxStackCount: 9999,
      Code: "AncientTechnologyBook_G1",
      IconName: "TechnologyBook_G4",
      TypeA: "Consume",
      TypeB: "ConsumeAncientTechnologyBook",
      SortID: 6103,
      ItemStaticClass: "Consume_GrantTechnologyPoint",
      VisualBlueprintClassName: "BP_Item_Technicalbook",
      SneakAttackRate: 1,
      FloatValue1: 1,
    },
  },
  {
    id: 12,
    name: "Repair Kit",
    rarity: "Common",
    description:
      "Tools for repairing structures.\r\nUse it on destroyed structures to repair them.",
    image: require("../assets/images/consumables/repair-kit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/Survival_Icons_Pack/Textures/Tex_tools_10.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 5,
        image: require("../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 5,
        image: require("../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 1,
      "Gold Coin": 200,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "RepairKit",
      IconName: "RepairKit",
      TypeA: "Consume",
      TypeB: "ConsumeOther",
      SortID: 6300,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
      FloatValue1: 20,
    },
    technology: 3,
  },
  {
    id: 13,
    name: "Skill Fruit: Power Shot",
    rarity: "Uncommon",
    description: "Use on a Pal to teach \r\nPower Shot.",
    image: require("../assets/images/consumables/skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Neutral.webp",
    recipe: [],
  },
  {
    id: 14,
    name: "Skill Fruit: Power Bomb",
    rarity: "Rare",
    description: "Use on a Pal to teach \r\nPower Bomb.",
    image: require("../assets/images/consumables/skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Neutral.webp",
    recipe: [],
  },
  {
    id: 15,
    name: "Skill Fruit: Pal Blast",
    rarity: "Epic",
    description: "Use on a Pal to teach \r\nPal Blast.",
    image: require("../assets/images/consumables/skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Neutral.webp",
    recipe: [],
  },
  {
    id: 16,
    name: "Skill Fruit: Air Cannon",
    rarity: "Uncommon",
    description: "Use on a Pal to teach \r\nAir Cannon.",
    image: require("../assets/images/consumables/skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Neutral.webp",
    recipe: [],
  },
  {
    id: 17,
    name: "Skill Fruit: Implode",
    rarity: "Epic",
    description: "Use on a Pal to teach \r\nImplode.",
    image: require("../assets/images/consumables/skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Neutral.webp",
    recipe: [],
  },
  {
    id: 18,
    name: "Grass Skill Fruit: Wind Cutter",
    rarity: "Uncommon",
    description: "Use on a Pal to teach \r\nWind Cutter.",
    image: require("../assets/images/consumables/grass-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Grass.webp",
    recipe: [],
  },
  {
    id: 19,
    name: "Grass Skill Fruit: Grass Tornado",
    rarity: "Rare",
    description: "Use on a Pal to teach \r\nGrass Tornado.",
    image: require("../assets/images/consumables/grass-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Grass.webp",
    recipe: [],
  },
  {
    id: 20,
    name: "Grass Skill Fruit: Solar Blast",
    rarity: "Epic",
    description: "Use on a Pal to teach \r\nSolar Blast.",
    image: require("../assets/images/consumables/grass-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Grass.webp",
    recipe: [],
  },
  {
    id: 21,
    name: "Grass Skill Fruit: Seed Machine Gun",
    rarity: "Uncommon",
    description: "Use on a Pal to teach \r\nSeed Machine Gun.",
    image:
      require("../assets/images/consumables/grass-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Grass.webp",
    recipe: [],
  },
  {
    id: 22,
    name: "Grass Skill Fruit: Spine Vine",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nSpine Vine.",
    image: require("../assets/images/consumables/grass-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Grass.webp",
    recipe: [],
  },
  {
    id: 23,
    name: "Grass Skill Fruit: Seed Mine",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nSeed Mine.",
    image: require("../assets/images/consumables/grass-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Grass.webp",
    recipe: [],
  },
  {
    id: 24,
    name: "Water Skill Fruit: Aqua Gun",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nAqua Gun.",
    image: require("../assets/images/consumables/water-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Water.webp",
    recipe: [],
  },
  {
    id: 25,
    name: "Water Skill Fruit: Aqua Burst",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nAqua Burst.",
    image: require("../assets/images/consumables/water-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Water.webp",
    recipe: [],
  },
  {
    id: 26,
    name: "Water Skill Fruit: Hydro Laser",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nHydro Laser.",
    image: require("../assets/images/consumables/water-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Water.webp",
    recipe: [],
  },
  {
    id: 27,
    name: "Water Skill Fruit: Hydro Jet",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nHydro Jet.",
    image: require("../assets/images/consumables/water-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Water.webp",
    recipe: [],
  },
  {
    id: 28,
    name: "Water Skill Fruit: Bubble Blast",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nBubble Blast.",
    image: require("../assets/images/consumables/water-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Water.webp",
    recipe: [],
  },
  {
    id: 29,
    name: "Water Skill Fruit: Acid Rain",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nAcid Rain.",
    image: require("../assets/images/consumables/water-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Water.webp",
    recipe: [],
  },
  {
    id: 30,
    name: "Fire Skill Fruit: Ignis Blast",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nIgnis Blast.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 31,
    name: "Fire Skill Fruit: Ignis Breath",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nIgnis Breath.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 32,
    name: "Fire Skill Fruit: Fire Ball",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nFire Ball.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 33,
    name: "Fire Skill Fruit: Flare Arrow",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nFlare Arrow.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 34,
    name: "Fire Skill Fruit: Spirit Fire",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nSpirit Fire.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 35,
    name: "Fire Skill Fruit: Ignis Rage",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nIgnis Rage.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 36,
    name: "Fire Skill Fruit: Flare Storm",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nFlare Storm.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 37,
    name: "Electric Skill Fruit: Shockwave",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nShockwave.",
    image: require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 38,
    name: "Electric Skill Fruit: Lightning Bolt",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nLightning Bolt.",
    image:
      require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 39,
    name: "Electric Skill Fruit: Lightning Streak",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nLightning Streak.",
    image:
      require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 40,
    name: "Electric Skill Fruit: Plasma Funnel",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nPlasma Funnel.",
    image:
      require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 41,
    name: "Electric Skill Fruit: Spark Blast",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nSpark Blast.",
    image: require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 42,
    name: "Electric Skill Fruit: Lock-on Laser",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nLock-on Laser.",
    image:
      require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 43,
    name: "Electric Skill Fruit: Electric Ball",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nElectric Ball.",
    image:
      require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 44,
    name: "Electric Skill Fruit: Tri-Lightning",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nTri-Lightning.",
    image:
      require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 45,
    name: "Electric Skill Fruit: Lightning Strike",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nLightning Strike.",
    image:
      require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 46,
    name: "Earth Skill Fruit: Stone Cannon",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nStone Cannon.",
    image: require("../assets/images/consumables/earth-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Earth.webp",
    recipe: [],
  },
  {
    id: 47,
    name: "Earth Skill Fruit: Sand Tornado",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nSand Tornado.",
    image: require("../assets/images/consumables/earth-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Earth.webp",
    recipe: [],
  },
  {
    id: 48,
    name: "Earth Skill Fruit: Rock Lance",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nRock Lance.",
    image: require("../assets/images/consumables/earth-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Earth.webp",
    recipe: [],
  },
  {
    id: 49,
    name: "Earth Skill Fruit: Bog Blast",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nBog Blast.",
    image: require("../assets/images/consumables/earth-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Earth.webp",
    recipe: [],
  },
  {
    id: 50,
    name: "Earth Skill Fruit: Stone Blast",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nStone Blast.",
    image: require("../assets/images/consumables/earth-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Earth.webp",
    recipe: [],
  },
  {
    id: 51,
    name: "Ice Skill Fruit: Ice Missile",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nIce Missile.",
    image: require("../assets/images/consumables/ice-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Frost.webp",
    recipe: [],
  },
  {
    id: 52,
    name: "Ice Skill Fruit: Iceberg",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nIceberg.",
    image: require("../assets/images/consumables/ice-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Frost.webp",
    recipe: [],
  },
  {
    id: 53,
    name: "Ice Skill Fruit: Blizzard Spike",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nBlizzard Spike.",
    image: require("../assets/images/consumables/ice-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Frost.webp",
    recipe: [],
  },
  {
    id: 54,
    name: "Ice Skill Fruit: Icicle Cutter",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nIcicle Cutter.",
    image: require("../assets/images/consumables/ice-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Frost.webp",
    recipe: [],
  },
  {
    id: 55,
    name: "Ice Skill Fruit: Crystal Breath",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nCrystal Breath.",
    image: require("../assets/images/consumables/ice-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Frost.webp",
    recipe: [],
  },
  {
    id: 56,
    name: "Dark Skill Fruit: Shadow Burst",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nShadow Burst.",
    image: require("../assets/images/consumables/dark-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dark.webp",
    recipe: [],
  },
  {
    id: 57,
    name: "Dark Skill Fruit: Nightmare Ball",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nNightmare Ball.",
    image: require("../assets/images/consumables/dark-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dark.webp",
    recipe: [],
  },
  {
    id: 58,
    name: "Dark Skill Fruit: Poison Blast",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nPoison Blast.",
    image: require("../assets/images/consumables/dark-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dark.webp",
    recipe: [],
  },
  {
    id: 59,
    name: "Dark Skill Fruit: Spirit Flame",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nSpirit Flame.",
    image: require("../assets/images/consumables/dark-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dark.webp",
    recipe: [],
  },
  {
    id: 60,
    name: "Dark Skill Fruit: Dark Laser",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nDark Laser.",
    image: require("../assets/images/consumables/dark-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dark.webp",
    recipe: [],
  },
  {
    id: 61,
    name: "Dragon Skill Fruit: Draconic Breath",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nDraconic Breath.",
    image:
      require("../assets/images/consumables/dragon-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dragon.webp",
    recipe: [],
  },
  {
    id: 62,
    name: "Dragon Skill Fruit: Dragon Cannon",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nDragon Cannon.",
    image: require("../assets/images/consumables/dragon-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dragon.webp",
    recipe: [],
  },
  {
    id: 63,
    name: "Dragon Skill Fruit: Dragon Burst",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nDragon Burst.",
    image: require("../assets/images/consumables/dragon-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dragon.webp",
    recipe: [],
  },
  {
    id: 64,
    name: "Dragon Skill Fruit: Dragon Meteor",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nDragon Meteor.",
    image: require("../assets/images/consumables/dragon-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dragon.webp",
    recipe: [],
  },
  {
    id: 65,
    name: "Copper Key",
    rarity: "Uncommon",
    description: "A key that can be used to open locked treasure chests.",
    image: require("../assets/images/consumables/copper-key.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_TreasureBoxKey01.webp",
    recipe: [],
    stats: {
      Rarity: "Uncommon",
      Type: "Consumable",
      Rank: 1,
      "Gold Coin": 1,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "TreasureBoxKey01",
      IconName: "TreasureBoxKey01",
      TypeA: "Consume",
      TypeB: "ConsumeOther",
      SortID: 6200,
      VisualBlueprintClassName: "BP_Item_TreasureBoxKey_Blonze",
    },
  },
  {
    id: 66,
    name: "Silver Key",
    rarity: "Rare",
    description: "A key that can be used to open locked treasure chests.",
    image: require("../assets/images/consumables/silver-key.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_TreasureBoxKey02.webp",
    recipe: [],
    stats: {
      Rarity: "Rare",
      Type: "Consumable",
      Rank: 1,
      "Gold Coin": 1,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "TreasureBoxKey02",
      IconName: "TreasureBoxKey02",
      TypeA: "Consume",
      TypeB: "ConsumeOther",
      SortID: 6201,
      VisualBlueprintClassName: "BP_Item_TreasureBoxKey_Silver",
    },
  },
  {
    id: 67,
    name: "Gold Key",
    rarity: "Epic",
    description: "A key that can be used to open locked treasure chests.",
    image: require("../assets/images/consumables/gold-key.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_TreasureBoxKey03.webp",
    recipe: [],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 1,
      "Gold Coin": 1,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "TreasureBoxKey03",
      IconName: "TreasureBoxKey03",
      TypeA: "Consume",
      TypeB: "ConsumeOther",
      SortID: 6202,
      VisualBlueprintClassName: "BP_Item_TreasureBoxKey_Gold",
    },
  },
  {
    id: 68,
    name: "Bellanoir's Slab",
    rarity: "Rare",
    description:
      "Slab depicting Bellanoir.\r\nOffer to a Summoning Altar\r\nto summon a powerful Lv 30 Bellanoir.",
    image: require("../assets/images/consumables/bellanoir's-slab.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalSummon_NightLady.webp",
    recipe: [
      {
        name: "Bellanoir's Slab Fragment",
        quantity: 4,
        image: require("../assets/images/consumables/bellanoirs-slab-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Blueprint_PalSummon_NightLady_Parts.webp",
      },
    ],
  },
  {
    id: 69,
    name: "Bellanoir Libero's Slab",
    rarity: "Epic",
    description:
      "Slab depicting Bellanoir Libero.\r\nOffer to a Summoning Altar\r\nto summon an exceptionally powerful Lv 50 Bellanoir Libero.",
    image: require("../assets/images/consumables/bellanoir-libero's-slab.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalSummon_NightLady_Dark.webp",
    recipe: [
      {
        name: "Bellanoir Libero's Slab Fragment",
        quantity: 4,
        image: require("../assets/images/items/bellanoir-libero's-slab-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Blueprint_PalSummon_NightLady_Dark_Parts.webp",
      },
    ],
  },
  {
    id: 70,
    name: "Low Quality Recovery Meds",
    rarity: "Common",
    description:
      "Medicine that heals wounds over time.\r\nLow quality, but restores some Health.",
    image: require("../assets/images/consumables/low-quality-recovery-meds.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potion_Low.webp",
    recipe: [
      {
        name: "Cavern Mushroom",
        quantity: 3,
        image: require("../assets/images/items/cavern-mushroom.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_HealingMushroom.webp",
      },
      {
        name: "Red Berries",
        quantity: 5,
        image: require("../assets/images/items/red-berries.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 2,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 2,
      "Gold Coin": 240,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Potion_Low",
      Nutrition: 1,
      SAN: 0,
      IconName: "Potion_Low",
      TypeA: "Consume",
      TypeB: "Drug",
      SortID: 4110,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    recovery_time: 600,
  },
  {
    id: 71,
    name: "Recovery Meds",
    rarity: "Uncommon",
    description:
      "Medicine that heals wounds over time.\r\nRestores a decent amount of Health.",
    image: require("../assets/images/consumables/recovery-meds.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potion.webp",
    recipe: [
      {
        name: "Cavern Mushroom",
        quantity: 5,
        image: require("../assets/images/items/cavern-mushroom.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_HealingMushroom.webp",
      },
      {
        name: "Red Berries",
        quantity: 5,
        image: require("../assets/images/items/red-berries.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 5,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
      {
        name: "Cotton Candy",
        quantity: 3,
        image: require("../assets/images/items/cotton-candy.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Sweet.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Consumable",
      Rank: 3,
      "Gold Coin": 800,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Potion",
      Nutrition: 1,
      SAN: 0,
      IconName: "Potion",
      TypeA: "Consume",
      TypeB: "Drug",
      SortID: 4111,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    recovery_time: 600,
  },
  {
    id: 72,
    name: "High Quality Recovery Meds",
    rarity: "Rare",
    description:
      "Medicine that heals wounds over time.\r\nHigh quality; restores a lot of Health.",
    image: require("../assets/images/consumables/high-quality-recovery-meds.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potion_High.webp",
    recipe: [
      {
        name: "Cavern Mushroom",
        quantity: 10,
        image: require("../assets/images/items/cavern-mushroom.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_HealingMushroom.webp",
      },
      {
        name: "Red Berries",
        quantity: 20,
        image: require("../assets/images/items/red-berries.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 5,
        image: require("../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Cotton Candy",
        quantity: 5,
        image: require("../assets/images/items/cotton-candy.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Sweet.webp",
      },
      {
        name: "Sulfur",
        quantity: 5,
        image: require("../assets/images/items/sulfur.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Sulfur.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 3000,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Potion_High",
      Nutrition: 1,
      SAN: 0,
      IconName: "Potion_High",
      TypeA: "Consume",
      TypeB: "Drug",
      SortID: 4112,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    recovery_time: 600,
  },
  {
    id: 73,
    name: "Vital Remedy",
    rarity: "Epic",
    description:
      "Extremely valuable potion that permanently raises Health by a slight amount when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/vital-remedy.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_hp_01.webp",
    recipe: [
      {
        name: "Life Lotus (S)",
        quantity: 4,
        image: require("../assets/images/items/life-lotus-(s).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_hp_01.webp",
      },
      {
        name: "Raw Kelpsea",
        quantity: 3,
        image: require("../assets/images/items/raw-kelpsea.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Kelpie.webp",
      },
      {
        name: "Gumoss Leaf",
        quantity: 2,
        image: require("../assets/images/items/gumoss-leaf.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalItem_PlantSlime.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 2,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 3,
      "Gold Coin": 100000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_hp_01",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_hp_01",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4200,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    max_hp: 1,
  },
  {
    id: 74,
    name: "Stamina Remedy",
    rarity: "Epic",
    description:
      "Extremely valuable potion that permanently raises Stamina by a slight amount when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/stamina-remedy.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_stamina_01.webp",
    recipe: [
      {
        name: "Stamina Lotus (S)",
        quantity: 4,
        image: require("../assets/images/items/stamina-lotus-(s).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_stamina_01.webp",
      },
      {
        name: "Eikthyrdeer Venison",
        quantity: 3,
        image: require("../assets/images/items/eikthyrdeer-venison.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Deer.webp",
      },
      {
        name: "Honey",
        quantity: 2,
        image: require("../assets/images/items/honey.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Honey.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 2,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 3,
      "Gold Coin": 100000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_stamina_01",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_stamina_01",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4201,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    max_sp: 1,
  },
  {
    id: 75,
    name: "Might Remedy",
    rarity: "Epic",
    description:
      "Extremely valuable potion that permanently raises Attack by a slight amount when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/might-remedy.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_attack_01.webp",
    recipe: [
      {
        name: "Power Lotus (S)",
        quantity: 4,
        image: require("../assets/images/items/power-lotus-(s).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_attack_01.webp",
      },
      {
        name: "Rushoar Pork",
        quantity: 3,
        image: require("../assets/images/items/rushoar-pork.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Boar.webp",
      },
      {
        name: "Mozzarina Meat",
        quantity: 2,
        image: require("../assets/images/items/mozzarina-meat.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_CowPal.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 2,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 3,
      "Gold Coin": 100000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_attack_01",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_attack_01",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4202,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    power: 1,
  },
  {
    id: 76,
    name: "Speed Remedy",
    rarity: "Epic",
    description:
      "Extremely valuable potion that permanently raises Work Speed by a slight amount when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/speed-remedy.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_workspeed_01.webp",
    recipe: [
      {
        name: "Speed Lotus (S)",
        quantity: 4,
        image: require("../assets/images/items/speed-lotus-(s).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_workspeed_01.webp",
      },
      {
        name: "Ribbuny Ribbon",
        quantity: 3,
        image: require("../assets/images/items/ribbuny-ribbon.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalItem_PinkRabbit.webp",
      },
      {
        name: "Katress Hair",
        quantity: 2,
        image: require("../assets/images/items/katress-hair.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalItem_CatMage.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 2,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 3,
      "Gold Coin": 100000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_workspeed_01",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_workspeed_01",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4203,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
  },
  {
    id: 77,
    name: "Burden Remedy",
    rarity: "Epic",
    description:
      "Extremely valuable potion that permanently raises carrying capacity by a slight amount when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/burden-remedy.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_weight_01.webp",
    recipe: [
      {
        name: "Carrying Lotus (S)",
        quantity: 4,
        image: require("../assets/images/items/carrying-lotus-(s).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_weight_01.webp",
      },
      {
        name: "Swee Hair",
        quantity: 3,
        image: require("../assets/images/items/swee-hair.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalItem_MopBaby.webp",
      },
      {
        name: "Cotton Candy",
        quantity: 2,
        image: require("../assets/images/items/cotton-candy.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Sweet.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 2,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 3,
      "Gold Coin": 100000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_weight_01",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_weight_01",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4204,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    max_inventory_weight: 1,
  },
  {
    id: 78,
    name: "Vital Elixir",
    rarity: "Legendary",
    description:
      "Extremely valuable elixir that permanently raises Health when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/vital-elixir.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_hp_02.webp",
    recipe: [
      {
        name: "Life Lotus (L)",
        quantity: 6,
        image: require("../assets/images/items/life-lotus-(l).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_hp_02.webp",
      },
      {
        name: "Galeclaw Poultry",
        quantity: 3,
        image: require("../assets/images/items/galeclaw-poultry.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Eagle.webp",
      },
      {
        name: "Killamari Tentacle",
        quantity: 2,
        image: require("../assets/images/items/killamari-tentacle.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalItem_NegativeOctopus.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 2,
        image: require("../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 200000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_hp_02",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_hp_02",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4205,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    max_hp: 2,
  },
  {
    id: 79,
    name: "Stamina Elixir",
    rarity: "Legendary",
    description:
      "Extremely valuable elixir that permanently raises Stamina when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/stamina-elixir.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_stamina_02.webp",
    recipe: [
      {
        name: "Stamina Lotus (L)",
        quantity: 6,
        image: require("../assets/images/items/stamina-lotus-(l).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_stamina_02.webp",
      },
      {
        name: "Reindrix Venison",
        quantity: 3,
        image: require("../assets/images/items/reindrix-venison.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_IceDeer.webp",
      },
      {
        name: "Caprity Meat",
        quantity: 2,
        image: require("../assets/images/items/caprity-meat.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_BerryGoat.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 2,
        image: require("../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 200000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_stamina_02",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_stamina_02",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4206,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    max_sp: 2,
  },
  {
    id: 80,
    name: "Might Elixir",
    rarity: "Legendary",
    description:
      "Extremely valuable elixir that permanently raises Attack when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/might-elixir.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_attack_02.webp",
    recipe: [
      {
        name: "Power Lotus (L)",
        quantity: 6,
        image: require("../assets/images/items/power-lotus-(l).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_attack_02.webp",
      },
      {
        name: "Mammorest Meat",
        quantity: 3,
        image: require("../assets/images/items/mammorest-meat.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_GrassMammoth.webp",
      },
      {
        name: "Broncherry Meat",
        quantity: 2,
        image: require("../assets/images/items/broncherry-meat.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_SakuraSaurus.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 2,
        image: require("../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 200000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_attack_02",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_attack_02",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4207,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    power: 2,
  },
  {
    id: 81,
    name: "Speed Elixir",
    rarity: "Legendary",
    description:
      "Extremely valuable elixir that permanently raises Work Speed when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/speed-elixir.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_workspeed_02.webp",
    recipe: [
      {
        name: "Speed Lotus (L)",
        quantity: 6,
        image: require("../assets/images/items/speed-lotus-(l).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_workspeed_02.webp",
      },
      {
        name: "Dazzi Cloud",
        quantity: 3,
        image: require("../assets/images/items/dazzi-cloud.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalItem_RaijinDaughter.webp",
      },
      {
        name: "Tocotoco Feather",
        quantity: 2,
        image: require("../assets/images/items/tocotoco-feather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalItem_ColorfulBird.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 2,
        image: require("../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 200000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_workspeed_02",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_workspeed_02",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4208,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
  },
  {
    id: 82,
    name: "Burden Elixir",
    rarity: "Legendary",
    description:
      "Extremely valuable elixir that permanently raises carrying capacity when consumed.\r\nIneffective when used by Pals.",
    image: require("../assets/images/consumables/burden-elixir.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Elixir_weight_02.webp",
    recipe: [
      {
        name: "Carrying Lotus (L)",
        quantity: 6,
        image: require("../assets/images/items/carrying-lotus-(l).png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lotus_weight_02.webp",
      },
      {
        name: "Leezpunk Crest",
        quantity: 3,
        image: require("../assets/images/items/leezpunk-crest.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalItem_LizardMan.webp",
      },
      {
        name: "Raw Dumud",
        quantity: 2,
        image: require("../assets/images/items/raw-dumud.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_LazyCatfish.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 2,
        image: require("../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 200000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Elixir_weight_02",
      Nutrition: 1,
      SAN: 0,
      IconName: "Elixir_weight_02",
      TypeA: "Consume",
      TypeB: "ConsumeGainStatusPoints",
      SortID: 4209,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    max_inventory_weight: 2,
  },
  {
    id: 83,
    name: "Training Manual (S)",
    rarity: "Uncommon",
    description:
      "Training manual that grants a tiny amount\r\nof EXP when read by a Pal.",
    image: require("../assets/images/consumables/training-manual-(s).png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_ExpBoost_01.webp",
    recipe: [],
    exp: 200,
  },
  {
    id: 84,
    name: "Training Manual (M)",
    rarity: "Rare",
    description:
      "Training manual that grants a small amount\r\nof EXP when read by a Pal.",
    image: require("../assets/images/consumables/training-manual-(m).png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_ExpBoost_02.webp",
    recipe: [],
    exp: 1000,
  },
  {
    id: 85,
    name: "Training Manual (L)",
    rarity: "Epic",
    description:
      "Training manual that grants a large amount\r\nof EXP when read by a Pal.",
    image: require("../assets/images/consumables/training-manual-(l).png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_ExpBoost_03.webp",
    recipe: [],
    exp: 10000,
  },
  {
    id: 86,
    name: "Training Manual (XL)",
    rarity: "Legendary",
    description:
      "Training manual that grants a substantial amount\r\nof EXP when read by a Pal.",
    image: require("../assets/images/consumables/training-manual-(xl).png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_ExpBoost_04.webp",
    recipe: [],
    exp: 100000,
  },
  {
    id: 87,
    name: "Training Crystal",
    rarity: "Legendary",
    description:
      "Strange crystal that when given to a Pal\r\nraises its level by one.",
    image: require("../assets/images/consumables/training-crystal.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_LvUP_01.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 10,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "LvUP_01",
      IconName: "LvUP_01",
      TypeA: "Consume",
      TypeB: "ConsumePalLevelUp",
      SortID: 4704,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
      FloatValue1: 1,
    },
  },
  {
    id: 88,
    name: "Life Fruit",
    rarity: "Legendary",
    description:
      "Precious fruit that is extremely difficult to obtain.\r\nSlightly increases a Pal's Health.",
    image: require("../assets/images/consumables/life-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Fruit_hp_01.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 50000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Fruit_hp_01",
      Nutrition: 1,
      SAN: 0,
      IconName: "Fruit_hp_01",
      TypeA: "Consume",
      TypeB: "ConsumePalTalentUp",
      SortID: 4400,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Fruit_hp_01",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
  },
  {
    id: 89,
    name: "Power Fruit",
    rarity: "Legendary",
    description:
      "Precious fruit that is extremely difficult to obtain.\r\nSlightly increases a Pal's Attack.",
    image: require("../assets/images/consumables/power-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Fruit_attack_01.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 50000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Fruit_attack_01",
      Nutrition: 1,
      SAN: 0,
      IconName: "Fruit_attack_01",
      TypeA: "Consume",
      TypeB: "ConsumePalTalentUp",
      SortID: 4401,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Fruit_attack_01",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
  },
  {
    id: 90,
    name: "Stout Fruit",
    rarity: "Legendary",
    description:
      "Precious fruit that is extremely difficult to obtain.\r\nSlightly increases a Pal's Defense.",
    image: require("../assets/images/consumables/stout-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Fruit__defense_01.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 50000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Fruit__defense_01",
      Nutrition: 1,
      SAN: 0,
      IconName: "Fruit__defense_01",
      TypeA: "Consume",
      TypeB: "ConsumePalTalentUp",
      SortID: 4402,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Fruit_defense_01",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
  },
  {
    id: 91,
    name: "Homeward Thundercloud",
    rarity: "Uncommon",
    description:
      "Transports you to the nearest base.\r\nCannot be used in dungeons and other similar locations.",
    image: require("../assets/images/consumables/homeward-thundercloud.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_Homeward.webp",
    recipe: [
      {
        name: "Dazzi Cloud",
        quantity: 1,
        image: require("../assets/images/items/dazzi-cloud.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalItem_RaijinDaughter.webp",
      },
      {
        name: "Electric Organ",
        quantity: 5,
        image: require("../assets/images/items/electric-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Consumable",
      Rank: 2,
      "Gold Coin": 3000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Homeward",
      IconName: "Homeward",
      TypeA: "Consume",
      TypeB: "ReturnToBaseCamp",
      SortID: 4500,
      ItemStaticClass: "Consume_Homeward",
      SneakAttackRate: 1,
    },
    technology: 23,
  },
  {
    id: 92,
    name: "Concentrated All-Pupose Pal Extract",
    rarity: "Legendary",
    description:
      "A mysterious extract that can be injected into pals to unlock their potential.\r\nRaises Pal's rank by one.\r\nFor some reason, a resentful voice can be heard from within...",
    image:
      require("../assets/images/consumables/concentrated-all-pupose-pal-extract.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Rankup_Arbitrary.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 6,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Rankup_Arbitrary",
      IconName: "Rankup_Arbitrary",
      TypeA: "Consume",
      TypeB: "ConsumePalRankUp",
      SortID: 4604,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 93,
    name: "Bellanoir Libero (Ultra) Slab",
    rarity: "Legendary",
    description:
      "Slab overflowing with Bellanoir Libero's energy.\r\nOffer to a Summoning Altar\r\nto summon an inconceivably powerful (Lv ??) Bellanoir Libero.",
    image: require("../assets/images/consumables/bellanoir-libero-(ultra)-slab.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalSummon_NightLady_Dark_2.webp",
    recipe: [
      {
        name: "Bellanoir Libero (Ultra) Slab Fragment",
        quantity: 4,
        image:
          require("../assets/images/items/bellanoir-libero-(ultra)-slab-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Blueprint_PalSummon_NightLady_Dark_Parts_2.webp",
      },
    ],
  },
  {
    id: 94,
    name: "Blazamut Ryu Slab",
    rarity: "Epic",
    description:
      "Slab depicting Blazamut Ryu.\r\nOffer to a Summoning Altar\r\nto summon a very powerful Lv 55 Blazamut Ryu.",
    image: require("../assets/images/consumables/blazamut-ryu-slab.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalSummon_KingBahamut_Dragon.webp",
    recipe: [
      {
        name: "Blazamut Ryu Slab Fragment",
        quantity: 4,
        image: require("../assets/images/items/blazamut-ryu-slab-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Blueprint_PalSummon_KingBahamut_Dragon_Parts.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 1,
      "Gold Coin": 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "PalSummon_KingBahamut_Dragon",
      IconName: "PalSummon_KingBahamut_Dragon",
      TypeA: "Consume",
      TypeB: "ConsumeOther",
      SortID: 8102,
    },
  },
  {
    id: 95,
    name: "Blazamut Ryu (Ultra) Slab",
    rarity: "Legendary",
    description:
      "Slab overflowing with energy of Blazamut Ryu.\r\nOffer to a Summoning Altar\r\nto summon an inconceivably powerful (Lv ??) Blazamut Ryu.",
    image: require("../assets/images/consumables/blazamut-ryu-(ultra)-slab.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalSummon_KingBahamut_Dragon_2.webp",
    recipe: [
      {
        name: "Blazamut Ryu (Ultra) Slab Fragment",
        quantity: 4,
        image: require("../assets/images/items/blazamut-ryu-(ultra)-slab-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Blueprint_PalSummon_KingBahamut_Dragon_Parts_2.webp",
      },
    ],
  },
  {
    id: 96,
    name: "Skill Fruit: Air Blade",
    rarity: "Uncommon",
    description: "Use on a Pal to teach \r\nAir Blade.",
    image: require("../assets/images/consumables/skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Neutral.webp",
    recipe: [],
  },
  {
    id: 97,
    name: "Grass Skill Fruit: Circle Vine",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nCircle Vine.",
    image: require("../assets/images/consumables/grass-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Grass.webp",
    recipe: [],
  },
  {
    id: 98,
    name: "Grass Skill Fruit: Multicutter",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nMulticutter.",
    image: require("../assets/images/consumables/grass-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Grass.webp",
    recipe: [],
  },
  {
    id: 99,
    name: "Water Skill Fruit: Splash",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nSplash.",
    image: require("../assets/images/consumables/water-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Water.webp",
    recipe: [],
  },
  {
    id: 100,
    name: "Water Skill Fruit: Wall Splash",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nCurtain Splash.",
    image: require("../assets/images/consumables/water-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Water.webp",
    recipe: [],
  },
  {
    id: 101,
    name: "Fire Skill Fruit: Flame Wall",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nFlame Wall.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 102,
    name: "Fire Skill Fruit: Volcanic Rain",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nVolcanic Rain.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 103,
    name: "Electric Skill Fruit: TriSpark",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nTriSpark.",
    image: require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 104,
    name: "Electric Skill Fruit: Thunder Rain",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nThunder Rain.",
    image:
      require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 105,
    name: "Electric Skill Fruit: Thunderstorm",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nThunderstorm.",
    image:
      require("../assets/images/consumables/electric-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Electric.webp",
    recipe: [],
  },
  {
    id: 106,
    name: "Earth Skill Fruit: Rockburst",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nRockburst.",
    image: require("../assets/images/consumables/earth-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Earth.webp",
    recipe: [],
  },
  {
    id: 107,
    name: "Earth Skill Fruit: Sand Twister",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nSand Twister.",
    image: require("../assets/images/consumables/earth-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Earth.webp",
    recipe: [],
  },
  {
    id: 108,
    name: "Ice Skill Fruit: Icicle Line",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nIcicle Line.",
    image: require("../assets/images/consumables/ice-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Frost.webp",
    recipe: [],
  },
  {
    id: 109,
    name: "Ice Skill Fruit: Diamond Rain",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nDiamond Rain.",
    image: require("../assets/images/consumables/ice-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Frost.webp",
    recipe: [],
  },
  {
    id: 110,
    name: "Dark Skill Fruit: Dark Cannon",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nDark Cannon.",
    image: require("../assets/images/consumables/dark-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dark.webp",
    recipe: [],
  },
  {
    id: 111,
    name: "Dark Skill Fruit: Dark Arrow",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nDark Arrow.",
    image: require("../assets/images/consumables/dark-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dark.webp",
    recipe: [],
  },
  {
    id: 112,
    name: "Dark Skill Fruit: Umbral Surge",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nUmbral Surge.",
    image: require("../assets/images/consumables/dark-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dark.webp",
    recipe: [],
  },
  {
    id: 113,
    name: "Dark Skill Fruit: Apocalypse",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nApocalypse.",
    image: require("../assets/images/consumables/dark-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dark.webp",
    recipe: [],
  },
  {
    id: 114,
    name: "Dragon Skill Fruit: Beam Slicer",
    rarity: "Epic",
    description: "Use on a Pal to teach\r\nBeam Slicer.",
    image: require("../assets/images/consumables/dragon-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dragon.webp",
    recipe: [],
  },
  {
    id: 115,
    name: "Dragon Skill Fruit: Comet",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nComet Strike.",
    image: require("../assets/images/consumables/dragon-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dragon.webp",
    recipe: [],
  },
  {
    id: 116,
    name: "Dragon Skill Fruit: Blast Cannon",
    rarity: "Rare",
    description: "Use on a Pal to teach\r\nBlast Cannon.",
    image: require("../assets/images/consumables/dragon-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Dragon.webp",
    recipe: [],
  },
  {
    id: 117,
    name: "Mysterious Mushroom Juice",
    rarity: "Common",
    description:
      "Mushroom juice known for its incredibly uplifting effect.\r\nDrinking it greatly boosts work speed for a period of time, \r\nbut drastically decreases SAN value.",
    image: require("../assets/images/consumables/mysterious-mushroom-juice.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_MushroomJuice.webp",
    recipe: [
      {
        name: "Mysterious Mushroom",
        quantity: 20,
        image: require("../assets/images/items/mysterious-mushroom.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_PoisonMushroom.webp",
      },
      {
        name: "Beautiful Flower",
        quantity: 10,
        image: require("../assets/images/items/beautiful-flower.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Poppy.webp",
      },
      {
        name: "Horn",
        quantity: 10,
        image: require("../assets/images/items/horn.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
      },
      {
        name: "Bone",
        quantity: 5,
        image: require("../assets/images/items/bone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Bone.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 5,
        image: require("../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Consumable",
      Rank: 4,
      "Gold Coin": 40000,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "MushroomJuice",
      Nutrition: 1,
      SAN: 80,
      IconName: "MushroomJuice",
      TypeA: "Consume",
      TypeB: "Drug",
      SortID: 4123,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    san: 80,
    stamina_work: 600,
    recovery_time: 10,
  },
  {
    id: 118,
    name: "Skill Fruit: Holy Burst",
    rarity: "Uncommon",
    description: "Use on a Pal to teach \r\nHoly Burst.",
    image: require("../assets/images/consumables/skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Neutral.webp",
    recipe: [],
  },
  {
    id: 119,
    name: "Fire Skill Fruit: Flame Funnel",
    rarity: "Uncommon",
    description: "Use on a Pal to teach\r\nFlame Funnel.",
    image: require("../assets/images/consumables/fire-skill-fruit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_SkillCard_Flame.webp",
    recipe: [],
  },
  {
    id: 120,
    name: "Xenolord Slab",
    rarity: "Epic",
    description:
      "Slab depicting Xenolord.\r\nOffer to a Summoning Altar\r\nto summon an exceptionally powerful Lv 60 Xenolord.",
    image: require("../assets/images/consumables/xenolord-slab.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalSummon_DarkMechaDragon.webp",
    recipe: [
      {
        name: "Xenolord Slab Fragment",
        quantity: 4,
        image: require("../assets/images/items/xenolord-slab-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Blueprint_PalSummon_DarkMechaDragon_Parts.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 1,
      "Gold Coin": 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "PalSummon_DarkMechaDragon",
      IconName: "PalSummon_DarkMechaDragon",
      TypeA: "Consume",
      TypeB: "ConsumeOther",
      SortID: 8103,
    },
  },
  {
    id: 121,
    name: "Revival Potion",
    rarity: "Epic",
    description:
      "A potion that revives a Pal that has been injured and is unable to move.",
    image: require("../assets/images/consumables/revival-potion.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalRevive.webp",
    recipe: [
      {
        name: "Cavern Mushroom",
        quantity: 30,
        image: require("../assets/images/items/cavern-mushroom.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_HealingMushroom.webp",
      },
      {
        name: "Red Berries",
        quantity: 50,
        image: require("../assets/images/items/red-berries.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 20,
        image: require("../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Cotton Candy",
        quantity: 10,
        image: require("../assets/images/items/cotton-candy.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Sweet.webp",
      },
      {
        name: "Sulfur",
        quantity: 20,
        image: require("../assets/images/items/sulfur.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Sulfur.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 5,
      "Gold Coin": 20000,
      Weight: 1,
      MaxStackCount: 99,
      Code: "PalRevive",
      IconName: "PalRevive",
      TypeA: "Consume",
      TypeB: "ConsumePalRevive",
      SortID: 4114,
      ItemStaticClass: "CommonConsume",
    },
    technology: 59,
  },
  {
    id: 122,
    name: "Xenolord (Ultra) Slab",
    rarity: "Legendary",
    description:
      "Slab depicting Xenolord.\r\nOffer to a Summoning Altar\r\nto summon an exceptionally powerful Lv ?? Xenolord.",
    image: require("../assets/images/consumables/xenolord-(ultra)-slab.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalSummon_DarkMechaDragon_2.webp",
    recipe: [
      {
        name: "Xenolord (Ultra) Slab Fragment",
        quantity: 4,
        image: require("../assets/images/items/xenolord-(ultra)-slab-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Blueprint_PalSummon_DarkMechaDragon_Parts_2.webp",
      },
    ],
  },
  {
    id: 123,
    name: "Advanced Recovery Meds",
    rarity: "Epic",
    description:
      "Medicine that heals wounds over time.\r\nExtremely high quality, it rapidly restores HP before your eyes.",
    image: require("../assets/images/consumables/advanced-recovery-meds.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potion_Extreme.webp",
    recipe: [
      {
        name: "Cavern Mushroom",
        quantity: 15,
        image: require("../assets/images/items/cavern-mushroom.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_HealingMushroom.webp",
      },
      {
        name: "Red Berries",
        quantity: 30,
        image: require("../assets/images/items/red-berries.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 10,
        image: require("../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Cotton Candy",
        quantity: 7,
        image: require("../assets/images/items/cotton-candy.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Sweet.webp",
      },
      {
        name: "Sulfur",
        quantity: 10,
        image: require("../assets/images/items/sulfur.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Sulfur.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Consumable",
      Rank: 5,
      "Gold Coin": 3000,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Potion_Extreme",
      Nutrition: 1,
      SAN: 0,
      IconName: "Potion_Extreme",
      TypeA: "Consume",
      TypeB: "Drug",
      SortID: 4113,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    recovery_time: 600,
    technology: 59,
  },
  {
    id: 124,
    name: "Applied Fire Starting Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Kindling. \r\nAllowing a Pal to read it permanently increases their Kindling affinity by +1.",
    image:
      require("../assets/images/consumables/applied-fire-starting-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_00.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_EmitFlame",
      IconName: "WorkSuitability_AddTicket_EmitFlame",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4610,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 125,
    name: "Applied Watering Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Watering. \r\nAllowing a Pal to read it permanently increases their Watering affinity by +1.",
    image: require("../assets/images/consumables/applied-watering-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_01.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_Watering",
      IconName: "WorkSuitability_AddTicket_Watering",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4611,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 126,
    name: "Applied Seed Sowing Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Planting. \r\nAllowing a Pal to read it permanently increases their Planting affinity by +1.",
    image:
      require("../assets/images/consumables/applied-seed-sowing-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_02.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_Seeding",
      IconName: "WorkSuitability_AddTicket_Seeding",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4612,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 127,
    name: "Applied Power Generation Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Generating Electricity. \r\nAllowing a Pal to read it permanently increases their uiCommon id=|COMMON_WORK_SUITABILITY_GenerateElectricity|/> affinity by +1.",
    image:
      require("../assets/images/consumables/applied-power-generation-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_03.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_GenerateElectricity",
      IconName: "WorkSuitability_AddTicket_GenerateElectricity",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4613,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 128,
    name: "Applied Manual Labor Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Handiwork. \r\nAllowing a Pal to read it permanently increases their Handiwork affinity by +1.",
    image:
      require("../assets/images/consumables/applied-manual-labor-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_04.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_Handcraft",
      IconName: "WorkSuitability_AddTicket_Handcraft",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4614,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 129,
    name: "Applied Gathering Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Gathering. \r\nAllowing a Pal to read it permanently increases their Gathering affinity by +1.",
    image: require("../assets/images/consumables/applied-gathering-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_05.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_Collection",
      IconName: "WorkSuitability_AddTicket_Collection",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4615,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 130,
    name: "Applied Lumberjack Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Lumbering. \r\nAllowing a Pal to read it permanently increases their Lumbering affinity by +1.",
    image:
      require("../assets/images/consumables/applied-lumberjack-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_06.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_Deforest",
      IconName: "WorkSuitability_AddTicket_Deforest",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4616,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 131,
    name: "Applied Mining Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Mining. \r\nAllowing a Pal to read it permanently increases their Mining affinity by +1.",
    image: require("../assets/images/consumables/applied-mining-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_07.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_Mining",
      IconName: "WorkSuitability_AddTicket_Mining",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4617,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 132,
    name: "Applied Pharmacology Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Medicine Production. \r\nAllowing a Pal to read it permanently increases their Medicine Production affinity by +1.",
    image:
      require("../assets/images/consumables/applied-pharmacology-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_08.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_ProductMedicine",
      IconName: "WorkSuitability_AddTicket_ProductMedicine",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4619,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 133,
    name: "Applied Cooling Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Cooling. \r\nAllowing a Pal to read it permanently increases their Cooling  affinity by +1.",
    image: require("../assets/images/consumables/applied-cooling-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_10.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_Cool",
      IconName: "WorkSuitability_AddTicket_Cool",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4620,
      ItemStaticClass: "CommonConsume",
    },
  },
  {
    id: 134,
    name: "Applied Transportation Technique\u2160",
    rarity: "Legendary",
    description:
      "A rare book written about the secrets of Transporting. \r\nAllowing a Pal to read it permanently increases their Transporting affinity by +1.",
    image:
      require("../assets/images/consumables/applied-transportation-technique\u2170.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Consume_PalWorkLvUp_11.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Consumable",
      Rank: 1,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "WorkSuitability_AddTicket_Transport",
      IconName: "WorkSuitability_AddTicket_Transport",
      TypeA: "Consume",
      TypeB: "ConsumePalWorkSuitabilityUp",
      SortID: 4621,
      ItemStaticClass: "CommonConsume",
    },
  },
];
