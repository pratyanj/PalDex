export const Armors = [
  {
    ID: 1,
    name: "Cloth Outfit",
    rarity: "Common",
    defense: 15,
    health: 70,
    technology: 4,
    description:
      "Clothes made from Cloth.\r\nProtects against cold nights.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/cloth-outfit.png"),
    // image: require("../assets/images/items/cloth-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 2,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 320,
      Health: 70,
      Defense: 15,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 150,
      Code: "ClothArmor",
      IconName: "LeatherClothing",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1010,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 2,
    name: "Metal Armor",
    rarity: "Common",
    defense: 70,
    health: 250,
    technology: 23,
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 10,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 5,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4920,
      Health: 250,
      Defense: 70,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 700,
      Code: "CopperArmor",
      IconName: "CopperArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1040,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 3,
    name: "Metal Helm",
    rarity: "Common",
    defense: 50,
    health: 100,
    technology: 23,
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    effects: [],
    image: require("../assets/images/items/metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 20,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 10,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 2460,
      Health: 100,
      Defense: 50,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 700,
      Code: "CopperHelmet",
      IconName: "CopperHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1205,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 4,
    name: "Pelt Armor",
    rarity: "Common",
    defense: 35,
    health: 140,
    technology: 12,
    description:
      "Armor made from Leather.\r\nIts warmth and defense have been improved.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 10,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 360,
      Health: 140,
      Defense: 35,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 300,
      Code: "FurArmor",
      IconName: "FurArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1025,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 5,
    name: "Feathered Hair Band",
    rarity: "Common",
    defense: 15,
    health: 60,
    technology: 10,
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    effects: [],
    image: require("../assets/images/items/feathered-hair-band.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 5,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 180,
      Health: 60,
      Defense: 15,
      Weight: 5,
      MaxStackCount: 1,
      Durability: 200,
      Code: "FurHelmet",
      IconName: "FurHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1200,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 6,
    name: "Refined Metal Armor",
    rarity: "Common",
    defense: 150,
    health: 500,
    technology: 37,
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 30,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 15,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 2,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 9840,
      Health: 500,
      Defense: 150,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 1500,
      Code: "IronArmor",
      IconName: "IronArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1055,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 7,
    name: "Refined Metal Helm",
    rarity: "Common",
    defense: 100,
    health: 250,
    technology: 37,
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    effects: [],
    image: require("../assets/images/items/refined-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 20,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 5240,
      Health: 250,
      Defense: 100,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 1500,
      Code: "IronHelmet",
      IconName: "IronHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1210,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 8,
    name: "Pal Metal Armor",
    rarity: "Common",
    defense: 220,
    health: 750,
    technology: 46,
    description:
      "Armor made from Pal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 20,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 20,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 4,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 32300,
      Health: 750,
      Defense: 220,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "StealArmor",
      IconName: "StealArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1070,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 9,
    name: "Pal Metal Helm",
    rarity: "Common",
    defense: 150,
    health: 350,
    technology: 46,
    description:
      "A helm made from Pal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    effects: [],
    image: require("../assets/images/items/pal-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 20,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 20,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 16180,
      Health: 350,
      Defense: 150,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "StealHelmet",
      IconName: "StealHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1215,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 10,
    name: "Common Shield",
    rarity: "Common",
    technology: 4,
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.",
    effects: [],
    image: require("../assets/images/items/common-shield.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_01.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 10,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image: require("../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 20,
        image: require("../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 10,
        image: require("../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
    ],
  },
  {
    ID: 11,
    name: "Mega Shield",
    rarity: "Uncommon",
    technology: 16,
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.\r\nThe new model has been improved, enhancing its defense.",
    effects: [],
    image: require("../assets/images/items/mega-shield.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_02.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 30,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
    ],
  },
  {
    ID: 12,
    name: "Giga Shield",
    rarity: "Rare",
    technology: 28,
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.\r\nModifications have enhanced its effectiveness even further.",
    effects: [],
    image: require("../assets/images/items/giga-shield.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_03.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 50,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
    ],
  },
  {
    ID: 13,
    name: "Hyper Shield",
    rarity: "Epic",
    technology: 43,
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.\r\nThrough repeated testing, the highest quality has been achieved.",
    effects: [],
    image: require("../assets/images/items/hyper-shield.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_04.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 100,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
    ],
  },
  {
    ID: 14,
    name: "Cloth Outfit",
    rarity: "Uncommon",
    defense: 19,
    health: 91,
    description:
      "Clothes made from Cloth.\r\nProtects against cold nights.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/cloth-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 4,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 1,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 416,
      Health: 91,
      Defense: 19,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 400,
      Code: "ClothArmor_2",
      IconName: "LeatherClothing",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1011,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 15,
    name: "Cloth Outfit",
    rarity: "Rare",
    defense: 21,
    health: 98,
    description:
      "Clothes made from Cloth.\r\nProtects against cold nights.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/cloth-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 6,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
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
      Rarity: 2,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 480,
      Health: 98,
      Defense: 21,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 500,
      Code: "ClothArmor_3",
      IconName: "LeatherClothing",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1012,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 16,
    name: "Cloth Outfit",
    rarity: "Epic",
    defense: 22,
    health: 105,
    description:
      "Clothes made from Cloth.\r\nProtects against cold nights.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/cloth-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 9,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 544,
      Health: 105,
      Defense: 22,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 600,
      Code: "ClothArmor_4",
      IconName: "LeatherClothing",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1013,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 17,
    name: "Cloth Outfit",
    rarity: "Legendary",
    defense: 24,
    health: 112,
    description:
      "Clothes made from Cloth.\r\nProtects against cold nights.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/cloth-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 13,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 608,
      Health: 112,
      Defense: 24,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 700,
      Code: "ClothArmor_5",
      IconName: "LeatherClothing",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1014,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 18,
    name: "Pelt Armor",
    rarity: "Uncommon",
    defense: 45,
    health: 182,
    description:
      "Armor made from Leather.\r\nIts warmth and defense have been improved.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 20,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 468,
      Health: 182,
      Defense: 45,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 800,
      Code: "FurArmor_2",
      IconName: "FurArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1026,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 19,
    name: "Pelt Armor",
    rarity: "Rare",
    defense: 49,
    health: 196,
    description:
      "Armor made from Leather.\r\nIts warmth and defense have been improved.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 30,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 540,
      Health: 196,
      Defense: 49,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "FurArmor_3",
      IconName: "FurArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1027,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 20,
    name: "Pelt Armor",
    rarity: "Epic",
    defense: 52,
    health: 210,
    description:
      "Armor made from Leather.\r\nIts warmth and defense have been improved.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 45,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 612,
      Health: 210,
      Defense: 52,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "FurArmor_4",
      IconName: "FurArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1028,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 21,
    name: "Pelt Armor",
    rarity: "Legendary",
    defense: 56,
    health: 224,
    description:
      "Armor made from Leather.\r\nIts warmth and defense have been improved.Cold Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1"],
    image: require("../assets/images/items/pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 67,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 684,
      Health: 224,
      Defense: 56,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1400,
      Code: "FurArmor_5",
      IconName: "FurArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1029,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 22,
    name: "Metal Armor",
    rarity: "Uncommon",
    defense: 91,
    health: 325,
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 60,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 20,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 10,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 6396,
      Health: 325,
      Defense: 91,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1800,
      Code: "CopperArmor_2",
      IconName: "CopperArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1041,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 23,
    name: "Metal Armor",
    rarity: "Rare",
    defense: 98,
    health: 350,
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 90,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 30,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 15,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 7380,
      Health: 350,
      Defense: 98,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2200,
      Code: "CopperArmor_3",
      IconName: "CopperArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1042,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 24,
    name: "Metal Armor",
    rarity: "Epic",
    defense: 105,
    health: 375,
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 135,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 45,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 22,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 8364,
      Health: 375,
      Defense: 105,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2600,
      Code: "CopperArmor_4",
      IconName: "CopperArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1043,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 25,
    name: "Metal Armor",
    rarity: "Legendary",
    defense: 112,
    health: 400,
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 202,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 67,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 33,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 9348,
      Health: 400,
      Defense: 112,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "CopperArmor_5",
      IconName: "CopperArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1044,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 26,
    name: "Refined Metal Armor",
    rarity: "Uncommon",
    defense: 195,
    health: 650,
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 30,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 4,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 12792,
      Health: 650,
      Defense: 195,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 4000,
      Code: "IronArmor_2",
      IconName: "IronArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1056,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 27,
    name: "Refined Metal Armor",
    rarity: "Rare",
    defense: 210,
    health: 700,
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 45,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 14760,
      Health: 700,
      Defense: 210,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "IronArmor_3",
      IconName: "IronArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1057,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 28,
    name: "Refined Metal Armor",
    rarity: "Epic",
    defense: 225,
    health: 750,
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 67,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 9,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 16728,
      Health: 750,
      Defense: 225,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 6000,
      Code: "IronArmor_4",
      IconName: "IronArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1058,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 29,
    name: "Refined Metal Armor",
    rarity: "Legendary",
    defense: 240,
    health: 800,
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 202,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 100,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 13,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 18696,
      Health: 800,
      Defense: 240,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 7000,
      Code: "IronArmor_5",
      IconName: "IronArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1059,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 30,
    name: "Pal Metal Armor",
    rarity: "Uncommon",
    defense: 286,
    health: 975,
    description:
      "Armor made from Pal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 40,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 40,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 8,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 41990,
      Health: 975,
      Defense: 286,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 14000,
      Code: "StealArmor_2",
      IconName: "StealArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1071,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 31,
    name: "Pal Metal Armor",
    rarity: "Rare",
    defense: 308,
    health: 1050,
    description:
      "Armor made from Pal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 60,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 12,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 48450,
      Health: 1050,
      Defense: 308,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "StealArmor_3",
      IconName: "StealArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1072,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 32,
    name: "Pal Metal Armor",
    rarity: "Epic",
    defense: 330,
    health: 1125,
    description:
      "Armor made from Pal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 90,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 18,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 54910,
      Health: 1125,
      Defense: 330,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 22000,
      Code: "StealArmor_4",
      IconName: "StealArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1073,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 33,
    name: "Pal Metal Armor",
    rarity: "Legendary",
    defense: 352,
    health: 1200,
    description:
      "Armor made from Pal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 135,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 27,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 18,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 61370,
      Health: 1200,
      Defense: 352,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 26000,
      Code: "StealArmor_5",
      IconName: "StealArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1074,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 34,
    name: "Feathered Hair Band",
    rarity: "Uncommon",
    defense: 19,
    health: 78,
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    effects: [],
    image: require("../assets/images/items/feathered-hair-band.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 20,
        image: require("../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 10,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 234,
      Health: 78,
      Defense: 19,
      Weight: 5,
      MaxStackCount: 1,
      Durability: 520,
      Code: "FurHelmet_2",
      IconName: "FurHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1201,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 35,
    name: "Feathered Hair Band",
    rarity: "Rare",
    defense: 21,
    health: 84,
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    effects: [],
    image: require("../assets/images/items/feathered-hair-band.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 30,
        image: require("../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 270,
      Health: 84,
      Defense: 21,
      Weight: 5,
      MaxStackCount: 1,
      Durability: 600,
      Code: "FurHelmet_3",
      IconName: "FurHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1202,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 36,
    name: "Feathered Hair Band",
    rarity: "Epic",
    defense: 22,
    health: 90,
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    effects: [],
    image: require("../assets/images/items/feathered-hair-band.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 45,
        image: require("../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 22,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 306,
      Health: 90,
      Defense: 22,
      Weight: 5,
      MaxStackCount: 1,
      Durability: 680,
      Code: "FurHelmet_4",
      IconName: "FurHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1203,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 37,
    name: "Feathered Hair Band",
    rarity: "Legendary",
    defense: 24,
    health: 96,
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    effects: [],
    image: require("../assets/images/items/feathered-hair-band.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 67,
        image: require("../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 33,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 342,
      Health: 96,
      Defense: 24,
      Weight: 5,
      MaxStackCount: 1,
      Durability: 760,
      Code: "FurHelmet_5",
      IconName: "FurHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1204,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 38,
    name: "Metal Helm",
    rarity: "Uncommon",
    defense: 65,
    health: 130,
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    effects: [],
    image: require("../assets/images/items/metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 40,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 20,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 3198,
      Health: 130,
      Defense: 65,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1820,
      Code: "CopperHelmet_2",
      IconName: "CopperHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1206,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 39,
    name: "Metal Helm",
    rarity: "Rare",
    defense: 70,
    health: 140,
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    effects: [],
    image: require("../assets/images/items/metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 60,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 30,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 3690,
      Health: 140,
      Defense: 70,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 2100,
      Code: "CopperHelmet_3",
      IconName: "CopperHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1207,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 40,
    name: "Metal Helm",
    rarity: "Epic",
    defense: 75,
    health: 150,
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    effects: [],
    image: require("../assets/images/items/metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 90,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 45,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4182,
      Health: 150,
      Defense: 75,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 2380,
      Code: "CopperHelmet_4",
      IconName: "CopperHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1208,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 41,
    name: "Metal Helm",
    rarity: "Legendary",
    defense: 80,
    health: 160,
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    effects: [],
    image: require("../assets/images/items/metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 135,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 67,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4674,
      Health: 160,
      Defense: 80,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 2660,
      Code: "CopperHelmet_5",
      IconName: "CopperHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1209,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 42,
    name: "Refined Metal Helm",
    rarity: "Uncommon",
    defense: 130,
    health: 325,
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    effects: [],
    image: require("../assets/images/items/refined-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 30,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 6812,
      Health: 325,
      Defense: 130,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 3900,
      Code: "IronHelmet_2",
      IconName: "IronHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1211,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 43,
    name: "Refined Metal Helm",
    rarity: "Rare",
    defense: 140,
    health: 350,
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    effects: [],
    image: require("../assets/images/items/refined-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 45,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 7860,
      Health: 350,
      Defense: 140,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 4500,
      Code: "IronHelmet_3",
      IconName: "IronHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1212,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 44,
    name: "Refined Metal Helm",
    rarity: "Epic",
    defense: 150,
    health: 375,
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    effects: [],
    image: require("../assets/images/items/refined-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 67,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 8908,
      Health: 375,
      Defense: 150,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 5100,
      Code: "IronHelmet_4",
      IconName: "IronHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1213,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 45,
    name: "Refined Metal Helm",
    rarity: "Legendary",
    defense: 160,
    health: 400,
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    effects: [],
    image: require("../assets/images/items/refined-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 100,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 9956,
      Health: 400,
      Defense: 160,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 5700,
      Code: "IronHelmet_5",
      IconName: "IronHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1214,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 46,
    name: "Pal Metal Helm",
    rarity: "Uncommon",
    defense: 195,
    health: 455,
    description:
      "A helm made from Pal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    effects: [],
    image: require("../assets/images/items/pal-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 40,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 40,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 21034,
      Health: 455,
      Defense: 195,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 13000,
      Code: "StealHelmet_2",
      IconName: "StealHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1216,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 47,
    name: "Pal Metal Helm",
    rarity: "Rare",
    defense: 210,
    health: 490,
    description:
      "A helm made from Pal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    effects: [],
    image: require("../assets/images/items/pal-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 60,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 24270,
      Health: 490,
      Defense: 210,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 15000,
      Code: "StealHelmet_3",
      IconName: "StealHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1217,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 48,
    name: "Pal Metal Helm",
    rarity: "Epic",
    defense: 225,
    health: 525,
    description:
      "A helm made from Pal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    effects: [],
    image: require("../assets/images/items/pal-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 90,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 27506,
      Health: 525,
      Defense: 225,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 17000,
      Code: "StealHelmet_4",
      IconName: "StealHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1218,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 49,
    name: "Pal Metal Helm",
    rarity: "Legendary",
    defense: 240,
    health: 560,
    description:
      "A helm made from Pal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    effects: [],
    image: require("../assets/images/items/pal-metal-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 135,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 30742,
      Health: 560,
      Defense: 240,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 19000,
      Code: "StealHelmet_5",
      IconName: "StealHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1219,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 50,
    name: "Tropical Outfit",
    rarity: "Common",
    defense: 25,
    health: 70,
    technology: 9,
    description:
      "A Cloth Outfit produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/tropical-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 3,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 2,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 320,
      Health: 70,
      Defense: 25,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 300,
      Code: "ClothArmorHeat",
      IconName: "ClothArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1015,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 51,
    name: "Tropical Outfit",
    rarity: "Uncommon",
    defense: 32,
    health: 91,
    description:
      "A Cloth Outfit produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/tropical-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 6,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 4,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
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
      Rarity: 1,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 384,
      Health: 91,
      Defense: 32,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 360,
      Code: "ClothArmorHeat_2",
      IconName: "ClothArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1016,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 52,
    name: "Tropical Outfit",
    rarity: "Rare",
    defense: 35,
    health: 98,
    description:
      "A Cloth Outfit produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/tropical-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 9,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 6,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 480,
      Health: 98,
      Defense: 35,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 450,
      Code: "ClothArmorHeat_3",
      IconName: "ClothArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1017,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 53,
    name: "Tropical Outfit",
    rarity: "Epic",
    defense: 37,
    health: 105,
    description:
      "A Cloth Outfit produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/tropical-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 13,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 9,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 576,
      Health: 105,
      Defense: 37,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 540,
      Code: "ClothArmorHeat_4",
      IconName: "ClothArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1018,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 54,
    name: "Tropical Outfit",
    rarity: "Legendary",
    defense: 40,
    health: 112,
    description:
      "A Cloth Outfit produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/tropical-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 19,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 13,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 704,
      Health: 112,
      Defense: 40,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 660,
      Code: "ClothArmorHeat_5",
      IconName: "ClothArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1019,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 55,
    name: "Tundra Outfit",
    rarity: "Common",
    defense: 25,
    health: 70,
    technology: 9,
    description:
      "A Cloth Outfit produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/tundra-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 3,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 2,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 320,
      Health: 70,
      Defense: 25,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 300,
      Code: "ClothArmorCold",
      IconName: "ClothArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1020,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 56,
    name: "Tundra Outfit",
    rarity: "Uncommon",
    defense: 32,
    health: 91,
    description:
      "A Cloth Outfit produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/tundra-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 6,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 4,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
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
      Rarity: 1,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 384,
      Health: 91,
      Defense: 32,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 360,
      Code: "ClothArmorCold_2",
      IconName: "ClothArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1021,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 57,
    name: "Tundra Outfit",
    rarity: "Rare",
    defense: 35,
    health: 98,
    description:
      "A Cloth Outfit produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/tundra-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 9,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 6,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 480,
      Health: 98,
      Defense: 35,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 450,
      Code: "ClothArmorCold_3",
      IconName: "ClothArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1022,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 58,
    name: "Tundra Outfit",
    rarity: "Epic",
    defense: 37,
    health: 105,
    description:
      "A Cloth Outfit produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/tundra-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 13,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 9,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 576,
      Health: 105,
      Defense: 37,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 540,
      Code: "ClothArmorCold_4",
      IconName: "ClothArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1023,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 59,
    name: "Tundra Outfit",
    rarity: "Legendary",
    defense: 40,
    health: 112,
    description:
      "A Cloth Outfit produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/tundra-outfit.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 19,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 13,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 704,
      Health: 112,
      Defense: 40,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 660,
      Code: "ClothArmorCold_5",
      IconName: "ClothArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1024,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "ClothArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 60,
    name: "Heat Resistant Pelt Armor",
    rarity: "Common",
    defense: 45,
    health: 140,
    technology: 16,
    description:
      "A Pelt Armor produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 15,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Flame Organ",
        quantity: 4,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 3000,
      Health: 140,
      Defense: 45,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 600,
      Code: "FurArmorHeat",
      IconName: "FurArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1030,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 61,
    name: "Heat Resistant Pelt Armor",
    rarity: "Uncommon",
    defense: 58,
    health: 182,
    description:
      "A Pelt Armor produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 30,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Flame Organ",
        quantity: 8,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 3600,
      Health: 182,
      Defense: 58,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 720,
      Code: "FurArmorHeat_2",
      IconName: "FurArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1031,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 62,
    name: "Heat Resistant Pelt Armor",
    rarity: "Rare",
    defense: 63,
    health: 196,
    description:
      "A Pelt Armor produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 45,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Flame Organ",
        quantity: 12,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4500,
      Health: 196,
      Defense: 63,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 900,
      Code: "FurArmorHeat_3",
      IconName: "FurArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1032,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 63,
    name: "Heat Resistant Pelt Armor",
    rarity: "Epic",
    defense: 67,
    health: 210,
    description:
      "A Pelt Armor produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 67,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Flame Organ",
        quantity: 18,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 5400,
      Health: 210,
      Defense: 67,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1080,
      Code: "FurArmorHeat_4",
      IconName: "FurArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1033,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 64,
    name: "Heat Resistant Pelt Armor",
    rarity: "Legendary",
    defense: 72,
    health: 224,
    description:
      "A Pelt Armor produced in hot regions.\r\nBoasts high heat resistance.Heat Resistant Lv. 2",
    effects: ["Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 100,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Flame Organ",
        quantity: 27,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 6600,
      Health: 224,
      Defense: 72,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1320,
      Code: "FurArmorHeat_5",
      IconName: "FurArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1034,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 65,
    name: "Cold Resistant Pelt Armor",
    rarity: "Common",
    defense: 45,
    health: 140,
    technology: 18,
    description:
      "A Pelt Armor produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/cold-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 15,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Ice Organ",
        quantity: 4,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 3000,
      Health: 140,
      Defense: 45,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 600,
      Code: "FurArmorCold",
      IconName: "FurArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1035,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 66,
    name: "Cold Resistant Pelt Armor",
    rarity: "Uncommon",
    defense: 58,
    health: 182,
    description:
      "A Pelt Armor produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/cold-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 30,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Ice Organ",
        quantity: 8,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 3600,
      Health: 182,
      Defense: 58,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 720,
      Code: "FurArmorCold_2",
      IconName: "FurArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1036,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 67,
    name: "Cold Resistant Pelt Armor",
    rarity: "Rare",
    defense: 63,
    health: 196,
    description:
      "A Pelt Armor produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/cold-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 45,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Ice Organ",
        quantity: 12,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4500,
      Health: 196,
      Defense: 63,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 900,
      Code: "FurArmorCold_3",
      IconName: "FurArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1037,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 68,
    name: "Cold Resistant Pelt Armor",
    rarity: "Epic",
    defense: 67,
    health: 210,
    description:
      "A Pelt Armor produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/cold-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 67,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Ice Organ",
        quantity: 18,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 5400,
      Health: 210,
      Defense: 67,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1080,
      Code: "FurArmorCold_4",
      IconName: "FurArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1038,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 69,
    name: "Cold Resistant Pelt Armor",
    rarity: "Legendary",
    defense: 72,
    health: 224,
    description:
      "A Pelt Armor produced in cold regions.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 2"],
    image: require("../assets/images/items/cold-resistant-pelt-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 100,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Ice Organ",
        quantity: 27,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 6600,
      Health: 224,
      Defense: 72,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1320,
      Code: "FurArmorCold_5",
      IconName: "FurArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1039,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "FurArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
    },
  },
  {
    ID: 70,
    name: "Heat Resistant Metal Armor",
    rarity: "Common",
    defense: 105,
    health: 250,
    technology: 25,
    description:
      "Improved Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 40,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 13,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 8,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 8,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4920,
      Health: 250,
      Defense: 105,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1400,
      Code: "CopperArmorHeat",
      IconName: "CopperArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1045,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 71,
    name: "Heat Resistant Metal Armor",
    rarity: "Uncommon",
    defense: 136,
    health: 325,
    description:
      "Improved Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 80,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 26,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 16,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 16,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 5904,
      Health: 325,
      Defense: 136,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1680,
      Code: "CopperArmorHeat_2",
      IconName: "CopperArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1046,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 72,
    name: "Heat Resistant Metal Armor",
    rarity: "Rare",
    defense: 147,
    health: 350,
    description:
      "Improved Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 39,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 24,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 24,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 7380,
      Health: 350,
      Defense: 147,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2100,
      Code: "CopperArmorHeat_3",
      IconName: "CopperArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1047,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 73,
    name: "Heat Resistant Metal Armor",
    rarity: "Epic",
    defense: 157,
    health: 375,
    description:
      "Improved Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 180,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 58,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 36,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 36,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 8856,
      Health: 375,
      Defense: 157,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2520,
      Code: "CopperArmorHeat_4",
      IconName: "CopperArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1048,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 74,
    name: "Heat Resistant Metal Armor",
    rarity: "Legendary",
    defense: 168,
    health: 400,
    description:
      "Improved Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 270,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 87,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 54,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 54,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 10824,
      Health: 400,
      Defense: 168,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 3080,
      Code: "CopperArmorHeat_5",
      IconName: "CopperArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1049,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 75,
    name: "Cold Resistant Metal Armor",
    rarity: "Common",
    defense: 105,
    health: 250,
    technology: 27,
    description:
      "Improved Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 40,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 13,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 8,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 8,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4920,
      Health: 250,
      Defense: 105,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1400,
      Code: "CopperArmorCold",
      IconName: "CopperArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1050,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 76,
    name: "Cold Resistant Metal Armor",
    rarity: "Uncommon",
    defense: 136,
    health: 325,
    description:
      "Improved Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 80,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 26,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 16,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 16,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 5904,
      Health: 325,
      Defense: 136,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1680,
      Code: "CopperArmorCold_2",
      IconName: "CopperArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1051,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 77,
    name: "Cold Resistant Metal Armor",
    rarity: "Rare",
    defense: 147,
    health: 350,
    description:
      "Improved Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 39,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 24,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 24,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 7380,
      Health: 350,
      Defense: 147,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2100,
      Code: "CopperArmorCold_3",
      IconName: "CopperArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1052,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 78,
    name: "Cold Resistant Metal Armor",
    rarity: "Epic",
    defense: 157,
    health: 375,
    description:
      "Improved Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 180,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 58,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 36,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 36,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 8856,
      Health: 375,
      Defense: 157,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2520,
      Code: "CopperArmorCold_4",
      IconName: "CopperArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1053,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 79,
    name: "Cold Resistant Metal Armor",
    rarity: "Legendary",
    defense: 168,
    health: 400,
    description:
      "Improved Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 270,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Leather",
        quantity: 87,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "Cloth",
        quantity: 54,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 54,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 10824,
      Health: 400,
      Defense: 168,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 3080,
      Code: "CopperArmorCold_5",
      IconName: "CopperArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1054,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "CopperArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 80,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Common",
    defense: 180,
    health: 500,
    technology: 40,
    description:
      "Improved Refined Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 20,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 3,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 12,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 9840,
      Health: 500,
      Defense: 180,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "IronArmorHeat",
      IconName: "IronArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1060,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 81,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Uncommon",
    defense: 234,
    health: 650,
    description:
      "Improved Refined Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 80,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 40,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 24,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 11808,
      Health: 650,
      Defense: 234,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 3600,
      Code: "IronArmorHeat_2",
      IconName: "IronArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1061,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 82,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Rare",
    defense: 252,
    health: 700,
    description:
      "Improved Refined Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 120,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 60,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 9,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 36,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 14760,
      Health: 700,
      Defense: 252,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 4500,
      Code: "IronArmorHeat_3",
      IconName: "IronArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1062,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 83,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Epic",
    defense: 270,
    health: 750,
    description:
      "Improved Refined Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 180,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 90,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 13,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 54,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 17712,
      Health: 750,
      Defense: 270,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 5400,
      Code: "IronArmorHeat_4",
      IconName: "IronArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1063,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 84,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Legendary",
    defense: 288,
    health: 800,
    description:
      "Improved Refined Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 270,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 135,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 19,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 81,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 21648,
      Health: 800,
      Defense: 288,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 6600,
      Code: "IronArmorHeat_5",
      IconName: "IronArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1064,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 85,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Common",
    defense: 180,
    health: 500,
    technology: 41,
    description:
      "Improved Refined Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 20,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 3,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 12,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 9840,
      Health: 500,
      Defense: 180,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "IronArmorCold",
      IconName: "IronArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1065,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 86,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Uncommon",
    defense: 234,
    health: 650,
    description:
      "Improved Refined Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 80,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 40,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 24,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 11808,
      Health: 650,
      Defense: 234,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 3600,
      Code: "IronArmorCold_2",
      IconName: "IronArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1066,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 87,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Rare",
    defense: 252,
    health: 700,
    description:
      "Improved Refined Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 120,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 60,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 9,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 36,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 14760,
      Health: 700,
      Defense: 252,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 4500,
      Code: "IronArmorCold_3",
      IconName: "IronArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1067,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 88,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Epic",
    defense: 270,
    health: 750,
    description:
      "Improved Refined Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 180,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 90,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 13,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 54,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 17712,
      Health: 750,
      Defense: 270,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 5400,
      Code: "IronArmorCold_4",
      IconName: "IronArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1068,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 89,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Legendary",
    defense: 288,
    health: 800,
    description:
      "Improved Refined Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-refined-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 270,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Leather",
        quantity: 135,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 19,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 81,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 21648,
      Health: 800,
      Defense: 288,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 6600,
      Code: "IronArmorCold_5",
      IconName: "IronArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1069,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "IronArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 90,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Common",
    defense: 250,
    health: 750,
    technology: 48,
    description:
      "Improved Pal Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 30,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 16,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 32300,
      Health: 750,
      Defense: 250,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 10000,
      Code: "StealArmorHeat",
      IconName: "StealArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1075,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 91,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Uncommon",
    defense: 325,
    health: 975,
    description:
      "Improved Pal Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 60,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 12,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 32,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 38760,
      Health: 975,
      Defense: 325,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 12000,
      Code: "StealArmorHeat_2",
      IconName: "StealArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1076,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 92,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Rare",
    defense: 350,
    health: 1050,
    description:
      "Improved Pal Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 90,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 18,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 48,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 48450,
      Health: 1050,
      Defense: 350,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 15000,
      Code: "StealArmorHeat_3",
      IconName: "StealArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1077,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 93,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Epic",
    defense: 375,
    health: 1125,
    description:
      "Improved Pal Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 135,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 27,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 72,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 58140,
      Health: 1125,
      Defense: 375,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "StealArmorHeat_4",
      IconName: "StealArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1078,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 94,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Legendary",
    defense: 400,
    health: 1200,
    description:
      "Improved Pal Metal Armor.\r\nBoasts high heat resistance.Heat Resistant Lv. 2 Cold Resistant Lv. 1",
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
    image: require("../assets/images/items/heat-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 202,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 108,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 71060,
      Health: 1200,
      Defense: 400,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 22000,
      Code: "StealArmorHeat_5",
      IconName: "StealArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1079,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Heat2",
      PassiveSkillName2: "TemperatureResist_Cold1",
    },
  },
  {
    ID: 95,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Common",
    defense: 250,
    health: 750,
    technology: 50,
    description:
      "Improved Pal Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 30,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 16,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 32300,
      Health: 750,
      Defense: 250,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 10000,
      Code: "StealArmorCold",
      IconName: "StealArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1080,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 96,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Uncommon",
    defense: 325,
    health: 975,
    description:
      "Improved Pal Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 60,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 12,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 32,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 38760,
      Health: 975,
      Defense: 325,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 12000,
      Code: "StealArmorCold_2",
      IconName: "StealArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1081,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 97,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Rare",
    defense: 350,
    health: 1050,
    description:
      "Improved Pal Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 90,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 18,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 48,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 48450,
      Health: 1050,
      Defense: 350,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 15000,
      Code: "StealArmorCold_3",
      IconName: "StealArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1082,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 98,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Epic",
    defense: 375,
    health: 1125,
    description:
      "Improved Pal Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 135,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 27,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 72,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 58140,
      Health: 1125,
      Defense: 375,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "StealArmorCold_4",
      IconName: "StealArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1083,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 99,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Legendary",
    defense: 400,
    health: 1200,
    description:
      "Improved Pal Metal Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-pal-metal-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Leather",
        quantity: 202,
        image: require("../assets/images/items/leather.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 108,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 71060,
      Health: 1200,
      Defense: 400,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 22000,
      Code: "StealArmorCold_5",
      IconName: "StealArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1084,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "StealArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 100,
    name: "Lyleen Floral Cap",
    rarity: "Common",
    defense: 20,
    health: 60,
    description: "Floral cap shaped like a Lyleen.Grass Damage Reduction Lv. 1",
    effects: ["Grass Damage Reduction Lv. 1"],
    image: require("../assets/images/items/lyleen-floral-cap.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip023.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 101,
    name: "Sibelyx Hat",
    rarity: "Common",
    defense: 20,
    health: 60,
    description: "Hat shaped like a Sibelyx.Ice Damage Reduction Lv. 1",
    effects: ["Ice Damage Reduction Lv. 1"],
    image: require("../assets/images/items/sibelyx-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip024.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 102,
    name: "Cawgnito Hat",
    rarity: "Common",
    defense: 20,
    health: 60,
    description: "Hat shaped like a Cawgnito.Dark Damage Reduction Lv. 1",
    effects: ["Dark Damage Reduction Lv. 1"],
    image: require("../assets/images/items/cawgnito-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip027.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 103,
    name: "Lamball Helm",
    rarity: "Common",
    defense: 20,
    health: 60,
    description: "Helm shaped like a Lamball.Neutral Damage Reduction Lv. 1",
    effects: ["Neutral Damage Reduction Lv. 1"],
    image: require("../assets/images/items/lamball-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip029.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 104,
    name: "Dumud Helm",
    rarity: "Common",
    defense: 20,
    health: 60,
    description: "Helm shaped like a Dumud.Earth Damage Reduction Lv. 1",
    effects: ["Earth Damage Reduction Lv. 1"],
    image: require("../assets/images/items/dumud-helm.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip030.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 105,
    name: "Cattiva Hat",
    rarity: "Common",
    defense: 20,
    health: 60,
    description: "Hat shaped like a Cattiva.Neutral Damage Reduction Lv. 1",
    effects: ["Neutral Damage Reduction Lv. 1"],
    image: require("../assets/images/items/cattiva-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip033.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 106,
    name: "Plasteel Armor",
    rarity: "Common",
    defense: 385,
    health: 1300,
    technology: 50,
    description:
      "Armor made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 50,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 10,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1300,
      Defense: 385,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "PlasticArmor",
      IconName: "PlasticArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1085,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 107,
    name: "Plasteel Helmet",
    rarity: "Common",
    defense: 260,
    health: 600,
    technology: 51,
    description:
      "Helmet made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    effects: [],
    image: require("../assets/images/items/plasteel-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 40,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 25,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 18000,
      Health: 600,
      Defense: 260,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "PlasticHelmet",
      IconName: "PlasticHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1220,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 108,
    name: "Ultra Shield",
    rarity: "Legendary",
    technology: 55,
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.\r\nAs a result of further experiments, ultimate quality has been achieved.",
    effects: [],
    image: require("../assets/images/items/ultra-shield.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_05.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 50,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 150,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Plasteel",
        quantity: 50,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Ancient Civilization Core",
        quantity: 30,
        image: require("../assets/images/items/ancient-civilization-core.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
      },
    ],
  },
  {
    ID: 109,
    name: "Witch's Crown (Ultra)",
    rarity: "Legendary",
    defense: 30,
    health: 80,
    description:
      "Imbued with the ominous power of Bellanoir Libero (Ultra).\r\nExtremely difficult to obtain.Dragon Damage Reduction Lv. 1",
    effects: ["Dragon Damage Reduction Lv. 1"],
    image: require("../assets/images/items/witchs-crown.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Head001_purple.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 1,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
    ],
  },
  {
    ID: 110,
    name: "Zoe Hat",
    rarity: "Legendary",
    defense: 20,
    health: 60,
    description: "Dress up like Zoe using this special headpiece!",
    effects: [],
    image: require("../assets/images/items/zoe-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Grass.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 111,
    name: "Axel Hat",
    rarity: "Legendary",
    defense: 20,
    health: 60,
    description: "Dress up like Axel using this special headpiece!",
    effects: [],
    image: require("../assets/images/items/axel-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Electric.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 112,
    name: "Lily Hat",
    rarity: "Legendary",
    defense: 20,
    health: 60,
    description: "Dress up like Lily using this special headpiece!",
    effects: [],
    image: require("../assets/images/items/lily-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Forest.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 113,
    name: "Victor Hat",
    rarity: "Legendary",
    defense: 20,
    health: 60,
    description: "Dress up like Victor using this special headpiece!",
    effects: [],
    image: require("../assets/images/items/victor-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Snow.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 114,
    name: "Marcus Hat",
    rarity: "Legendary",
    defense: 20,
    health: 60,
    description: "Dress up like Marcus using this special headpiece!",
    effects: [],
    image: require("../assets/images/items/marcus-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Desert.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 115,
    name: "Horns of Supremacy",
    rarity: "Legendary",
    defense: 30,
    health: 80,
    description:
      "Bursts with the ominous power of Blazamut Ryu (Ultra).\r\nTo possess this is exceedingly rare.Water Damage Reduction Lv. 1",
    effects: ["Water Damage Reduction Lv. 1"],
    image: require("../assets/images/items/horns-of-supremacy.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip041.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 1,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
    ],
  },
  {
    ID: 116,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Common",
    defense: 400,
    health: 1300,
    technology: 53,
    description:
      "Improved Plasteel Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 50,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 10,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 20,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1300,
      Defense: 400,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "PlasticArmorHeat",
      IconName: "PlasticArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1086,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 117,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Common",
    defense: 400,
    health: 1300,
    technology: 54,
    description:
      "Improved Plasteel Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 50,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 10,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 20,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1300,
      Defense: 400,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "PlasticArmorCold",
      IconName: "PlasticArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1087,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 118,
    name: "Lightweight Plasteel Armor",
    rarity: "Common",
    defense: 400,
    health: 1300,
    technology: 55,
    description:
      "Improved Plasteel Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 100,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 10,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1300,
      Defense: 400,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "PlasticArmorWeight",
      IconName: "PlasticArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1088,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 119,
    name: "Saya Hat",
    rarity: "Legendary",
    defense: 20,
    health: 60,
    description: "Dress up like Saya using this special headpiece!",
    effects: [],
    image: require("../assets/images/items/saya-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Sakurajima.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 120,
    name: "Plasteel Armor",
    rarity: "Uncommon",
    defense: 500,
    health: 1560,
    description:
      "Armor made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 100,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1560,
      Defense: 500,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 21600,
      Code: "PlasticArmor_2",
      IconName: "PlasticArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1089,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 121,
    name: "Plasteel Armor",
    rarity: "Rare",
    defense: 539,
    health: 1690,
    description:
      "Armor made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 150,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 30,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1690,
      Defense: 539,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 23400,
      Code: "PlasticArmor_3",
      IconName: "PlasticArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1090,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 122,
    name: "Plasteel Armor",
    rarity: "Epic",
    defense: 577,
    health: 1820,
    description:
      "Armor made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 225,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 45,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1820,
      Defense: 577,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 25200,
      Code: "PlasticArmor_4",
      IconName: "PlasticArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1091,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 123,
    name: "Plasteel Armor",
    rarity: "Legendary",
    defense: 616,
    health: 1950,
    description:
      "Armor made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 337,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 67,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1950,
      Defense: 616,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 36000,
      Code: "PlasticArmor_5",
      IconName: "PlasticArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1092,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 124,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Uncommon",
    defense: 520,
    health: 1560,
    description:
      "Improved Plasteel Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 100,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 40,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1560,
      Defense: 520,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 21600,
      Code: "PlasticArmorHeat_2",
      IconName: "PlasticArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1093,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 125,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Rare",
    defense: 560,
    health: 1690,
    description:
      "Improved Plasteel Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 150,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 30,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 60,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1690,
      Defense: 560,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 23400,
      Code: "PlasticArmorHeat_3",
      IconName: "PlasticArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1094,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 126,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Epic",
    defense: 600,
    health: 1820,
    description:
      "Improved Plasteel Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 225,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 45,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 90,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1820,
      Defense: 600,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 25200,
      Code: "PlasticArmorHeat_4",
      IconName: "PlasticArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1095,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 127,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Legendary",
    defense: 640,
    health: 1950,
    description:
      "Improved Plasteel Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 337,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 67,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 135,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1950,
      Defense: 640,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 36000,
      Code: "PlasticArmorHeat_5",
      IconName: "PlasticArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1096,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 128,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Uncommon",
    defense: 520,
    health: 1560,
    description:
      "Improved Plasteel Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 100,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 40,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1560,
      Defense: 520,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 21600,
      Code: "PlasticArmorCold_2",
      IconName: "PlasticArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1097,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 129,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Rare",
    defense: 560,
    health: 1690,
    description:
      "Improved Plasteel Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 150,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 30,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 60,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1690,
      Defense: 560,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 23400,
      Code: "PlasticArmorCold_3",
      IconName: "PlasticArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1098,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 130,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Epic",
    defense: 600,
    health: 1820,
    description:
      "Improved Plasteel Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 225,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 45,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 90,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1820,
      Defense: 600,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 25200,
      Code: "PlasticArmorCold_4",
      IconName: "PlasticArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1099,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 131,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Legendary",
    defense: 640,
    health: 1950,
    description:
      "Improved Plasteel Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 337,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 67,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 135,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1950,
      Defense: 640,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 36000,
      Code: "PlasticArmorCold_5",
      IconName: "PlasticArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1100,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 132,
    name: "Lightweight Plasteel Armor",
    rarity: "Uncommon",
    defense: 520,
    health: 1560,
    description:
      "Improved Plasteel Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 200,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1560,
      Defense: 520,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 21600,
      Code: "PlasticArmorWeight_2",
      IconName: "PlasticArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1101,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 133,
    name: "Lightweight Plasteel Armor",
    rarity: "Rare",
    defense: 560,
    health: 1690,
    description:
      "Improved Plasteel Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 300,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 30,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1690,
      Defense: 560,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 23400,
      Code: "PlasticArmorWeight_3",
      IconName: "PlasticArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1102,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 134,
    name: "Lightweight Plasteel Armor",
    rarity: "Epic",
    defense: 600,
    health: 1820,
    description:
      "Improved Plasteel Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 450,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 45,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1820,
      Defense: 600,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 25200,
      Code: "PlasticArmorWeight_4",
      IconName: "PlasticArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1103,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 135,
    name: "Lightweight Plasteel Armor",
    rarity: "Legendary",
    defense: 640,
    health: 1950,
    description:
      "Improved Plasteel Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-plasteel-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 675,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 67,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1950,
      Defense: 640,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 36000,
      Code: "PlasticArmorWeight_5",
      IconName: "PlasticArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1104,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 136,
    name: "Plasteel Helmet",
    rarity: "Uncommon",
    defense: 312,
    health: 720,
    description:
      "Helmet made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    effects: [],
    image: require("../assets/images/items/plasteel-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 80,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 50,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 18000,
      Health: 720,
      Defense: 312,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 21600,
      Code: "PlasticHelmet_2",
      IconName: "PlasticHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1221,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 137,
    name: "Plasteel Helmet",
    rarity: "Rare",
    defense: 338,
    health: 780,
    description:
      "Helmet made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    effects: [],
    image: require("../assets/images/items/plasteel-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 120,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 75,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 18000,
      Health: 780,
      Defense: 338,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 23400,
      Code: "PlasticHelmet_3",
      IconName: "PlasticHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1222,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 138,
    name: "Plasteel Helmet",
    rarity: "Epic",
    defense: 364,
    health: 840,
    description:
      "Helmet made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    effects: [],
    image: require("../assets/images/items/plasteel-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 180,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 112,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 18000,
      Health: 840,
      Defense: 364,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 25200,
      Code: "PlasticHelmet_4",
      IconName: "PlasticHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1223,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 139,
    name: "Plasteel Helmet",
    rarity: "Legendary",
    defense: 390,
    health: 900,
    description:
      "Helmet made of Plasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    effects: [],
    image: require("../assets/images/items/plasteel-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 270,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 168,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 18000,
      Health: 900,
      Defense: 390,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 36000,
      Code: "PlasticHelmet_5",
      IconName: "PlasticHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1225,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "PlasticHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 140,
    name: "Hexolite Armor",
    rarity: "Common",
    defense: 580,
    health: 1750,
    technology: 57,
    description:
      "Armor made of Hexolite.\r\nPossesses overwhelming durability and defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 50,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 30,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 1750,
      Defense: 580,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 20000,
      Code: "SFArmor",
      IconName: "SFArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1105,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 141,
    name: "Xenolord's head",
    rarity: "Legendary",
    defense: 30,
    health: 80,
    description:
      "A headgear designed to resemble a Xenolord.Ice Damage Reduction Lv. 1",
    effects: ["Ice Damage Reduction Lv. 1"],
    image: require("../assets/images/items/xenolord's-head.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip044.webp",
    recipe: [],
  },
  {
    ID: 142,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Common",
    defense: 600,
    health: 1750,
    technology: 59,
    description:
      "Improved Hexolite Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 50,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 30,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 30,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1750,
      Defense: 600,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "SFArmorHeat",
      IconName: "SFArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1110,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 143,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Common",
    defense: 600,
    health: 1750,
    technology: 59,
    description:
      "Improved Hexolite Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 50,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 30,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 30,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1750,
      Defense: 600,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "SFArmorCold",
      IconName: "SFArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1115,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 144,
    name: "Lightweight Hexolite Armor",
    rarity: "Common",
    defense: 600,
    health: 1750,
    technology: 60,
    description:
      "Improved Hexolite Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 100,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 30,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1750,
      Defense: 600,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "SFArmorWeight",
      IconName: "SFArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1120,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 145,
    name: "Hexolite Helmet",
    rarity: "Common",
    defense: 350,
    health: 800,
    technology: 58,
    description:
      "Helmet made of Hexolite.\r\nCombines incredible strength and lightness.",
    effects: [],
    image: require("../assets/images/items/hexolite-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 40,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 25,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 20000,
      Health: 800,
      Defense: 350,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 20000,
      Code: "SFHelmet",
      IconName: "SFHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1224,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 146,
    name: "Bjorn Hat",
    rarity: "Legendary",
    defense: 20,
    health: 60,
    description: "Dress up like Bjorm using this special headpiece!",
    effects: [],
    image: require("../assets/images/items/bjorn-hat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Viking.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image: require("../assets/images/items/cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
    ],
  },
  {
    ID: 147,
    name: "Hexolite Helmet",
    rarity: "Uncommon",
    defense: 385,
    health: 880,
    description:
      "Helmet made of Hexolite.\r\nCombines incredible strength and lightness.",
    effects: [],
    image: require("../assets/images/items/hexolite-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 80,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 50,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 20000,
      Health: 880,
      Defense: 385,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 24000,
      Code: "SFHelmet_2",
      IconName: "SFHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1226,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 148,
    name: "Hexolite Helmet",
    rarity: "Rare",
    defense: 402,
    health: 920,
    description:
      "Helmet made of Hexolite.\r\nCombines incredible strength and lightness.",
    effects: [],
    image: require("../assets/images/items/hexolite-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 120,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 75,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 20000,
      Health: 920,
      Defense: 402,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 26000,
      Code: "SFHelmet_3",
      IconName: "SFHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1227,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 149,
    name: "Hexolite Helmet",
    rarity: "Epic",
    defense: 420,
    health: 960,
    description:
      "Helmet made of Hexolite.\r\nCombines incredible strength and lightness.",
    effects: [],
    image: require("../assets/images/items/hexolite-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 180,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 112,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 20000,
      Health: 960,
      Defense: 420,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 28000,
      Code: "SFHelmet_4",
      IconName: "SFHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1228,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 150,
    name: "Hexolite Helmet",
    rarity: "Legendary",
    defense: 455,
    health: 1040,
    description:
      "Helmet made of Hexolite.\r\nCombines incredible strength and lightness.",
    effects: [],
    image: require("../assets/images/items/hexolite-helmet.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 270,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 168,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 20000,
      Health: 1040,
      Defense: 455,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 40000,
      Code: "SFHelmet_5",
      IconName: "SFHelmet",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1229,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFHelmet",
      SneakAttackRate: 1,
    },
  },
  {
    ID: 151,
    name: "Hexolite Armor",
    rarity: "Uncommon",
    defense: 638,
    health: 1925,
    description:
      "Armor made of Hexolite.\r\nPossesses overwhelming durability and defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 100,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 1925,
      Defense: 638,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 24000,
      Code: "SFArmor_2",
      IconName: "SFArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1106,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 152,
    name: "Hexolite Armor",
    rarity: "Rare",
    defense: 667,
    health: 2012,
    description:
      "Armor made of Hexolite.\r\nPossesses overwhelming durability and defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 150,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 90,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 60,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2012,
      Defense: 667,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 26000,
      Code: "SFArmor_3",
      IconName: "SFArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1107,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 153,
    name: "Hexolite Armor",
    rarity: "Epic",
    defense: 696,
    health: 2100,
    description:
      "Armor made of Hexolite.\r\nPossesses overwhelming durability and defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 225,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 135,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 90,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2100,
      Defense: 696,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 28000,
      Code: "SFArmor_4",
      IconName: "SFArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1108,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 154,
    name: "Hexolite Armor",
    rarity: "Legendary",
    defense: 754,
    health: 2275,
    description:
      "Armor made of Hexolite.\r\nPossesses overwhelming durability and defense.Cold Resistant Lv. 1 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 337,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 202,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 135,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2275,
      Defense: 754,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 40000,
      Code: "SFArmor_5",
      IconName: "SFArmor",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1109,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 155,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Uncommon",
    defense: 660,
    health: 1925,
    description:
      "Improved Hexolite Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 100,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 60,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 1925,
      Defense: 660,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 21600,
      Code: "SFArmorHeat_2",
      IconName: "SFArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1111,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 156,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Rare",
    defense: 690,
    health: 2012,
    description:
      "Improved Hexolite Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 150,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 90,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 60,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 90,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2012,
      Defense: 690,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 23400,
      Code: "SFArmorHeat_3",
      IconName: "SFArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1112,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 157,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Epic",
    defense: 720,
    health: 2100,
    description:
      "Improved Hexolite Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 225,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 135,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 90,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 135,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2100,
      Defense: 720,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 25200,
      Code: "SFArmorHeat_4",
      IconName: "SFArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1113,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 158,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Legendary",
    defense: 780,
    health: 2275,
    description:
      "Improved Hexolite Armor.\r\nBoasts high heat resistance.Cold Resistant Lv. 1 Heat Resistant Lv. 2",
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
    image: require("../assets/images/items/heat-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 337,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 202,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 135,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Flame Organ",
        quantity: 202,
        image: require("../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2275,
      Defense: 780,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 36000,
      Code: "SFArmorHeat_5",
      IconName: "SFArmorHeat",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1114,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorHeat",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat2",
    },
  },
  {
    ID: 159,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Uncommon",
    defense: 660,
    health: 1925,
    description:
      "Improved Hexolite Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 100,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 60,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 1925,
      Defense: 660,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 21600,
      Code: "SFArmorCold_2",
      IconName: "SFArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1116,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 160,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Rare",
    defense: 690,
    health: 2012,
    description:
      "Improved Hexolite Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 150,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 90,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 60,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 90,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2012,
      Defense: 690,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 23400,
      Code: "SFArmorCold_3",
      IconName: "SFArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1117,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 161,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Epic",
    defense: 720,
    health: 2100,
    description:
      "Improved Hexolite Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 225,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 135,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 90,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 135,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2100,
      Defense: 720,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 25200,
      Code: "SFArmorCold_4",
      IconName: "SFArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1118,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 162,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Legendary",
    defense: 780,
    health: 2275,
    description:
      "Improved Hexolite Armor.\r\nUseful for surviving in cold climates.Cold Resistant Lv. 2 Heat Resistant Lv. 1",
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
    image: require("../assets/images/items/cold-resistant-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 337,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 202,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 135,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ice Organ",
        quantity: 202,
        image: require("../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2275,
      Defense: 780,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 36000,
      Code: "SFArmorCold_5",
      IconName: "SFArmorCold",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1119,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorCold",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold2",
      PassiveSkillName2: "TemperatureResist_Heat1",
    },
  },
  {
    ID: 163,
    name: "Lightweight Hexolite Armor",
    rarity: "Uncommon",
    defense: 660,
    health: 1925,
    description:
      "Improved Hexolite Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 200,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 1,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 1925,
      Defense: 660,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 21600,
      Code: "SFArmorWeight_2",
      IconName: "SFArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1121,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 164,
    name: "Lightweight Hexolite Armor",
    rarity: "Rare",
    defense: 690,
    health: 2012,
    description:
      "Improved Hexolite Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 300,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 90,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 60,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 2,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2012,
      Defense: 690,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 23400,
      Code: "SFArmorWeight_3",
      IconName: "SFArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1122,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 165,
    name: "Lightweight Hexolite Armor",
    rarity: "Epic",
    defense: 720,
    health: 2100,
    description:
      "Improved Hexolite Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 450,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 135,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 90,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 3,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2100,
      Defense: 720,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 25200,
      Code: "SFArmorWeight_4",
      IconName: "SFArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1123,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 166,
    name: "Lightweight Hexolite Armor",
    rarity: "Legendary",
    defense: 780,
    health: 2275,
    description:
      "Improved Hexolite Armor.\r\nIncreases carrying capacity.Cold Resistant Lv. 1 Heat Resistant Lv. 1 Max Carrying Capacity Lv. 2",
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
    image: require("../assets/images/items/lightweight-hexolite-armor.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 675,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Plasteel",
        quantity: 202,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 135,
        image: require("../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: 4,
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2275,
      Defense: 780,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 36000,
      Code: "SFArmorWeight_5",
      IconName: "SFArmorWeight",
      TypeA: "Armor",
      TypeB: "ArmorBody",
      SortID: 1124,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "SFArmorWeight",
      SneakAttackRate: 1,
      PassiveSkillName: "TemperatureResist_Cold1",
      PassiveSkillName2: "TemperatureResist_Heat1",
      PassiveSkillName3: "MaxInventoryWeight_up_Equip_2",
    },
  },
  {
    ID: 167,
    name: "Advanced Shield",
    rarity: "Legendary",
    technology: 60,
    description:
      "Strange shield made with advanced technology.\r\nIt automatically repair itself after not taking damage for a while.",
    effects: [],
    image: require("../assets/images/items/advanced-shield.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_06.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 80,
        image: require("../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 200,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Hexolite",
        quantity: 50,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Ancient Civilization Core",
        quantity: 30,
        image: require("../assets/images/items/ancient-civilization-core.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
      },
    ],
  },
];
