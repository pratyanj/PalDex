export const Armors = [
  {
    id: 1,
    name: "Cloth Outfit",
    rarity: "Common",
    description: "Clothes made fromCloth.\r\nProtects against cold nights.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
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
    defense: 15,
    health: 70,
    technology: 4,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 2,
    name: "Metal Armor",
    rarity: "Common",
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
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
    defense: 70,
    health: 250,
    technology: 23,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 3,
    name: "Metal Helm",
    rarity: "Common",
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
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
    defense: 50,
    health: 100,
    technology: 23,
    effects: [],
  },
  {
    id: 4,
    name: "Pelt Armor",
    rarity: "Common",
    description:
      "Armor made fromLeather.\r\nIts warmth and defense have been improved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
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
    defense: 35,
    health: 140,
    technology: 12,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 5,
    name: "Feathered Hair Band",
    rarity: "Common",
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/fiber.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
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
    defense: 15,
    health: 60,
    technology: 10,
    effects: [],
  },
  {
    id: 6,
    name: "Refined Metal Armor",
    rarity: "Common",
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
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
    defense: 150,
    health: 500,
    technology: 37,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 7,
    name: "Refined Metal Helm",
    rarity: "Common",
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
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
    defense: 100,
    health: 250,
    technology: 37,
    effects: [],
  },
  {
    id: 8,
    name: "Pal Metal Armor",
    rarity: "Common",
    description:
      "Armor made fromPal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
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
    defense: 220,
    health: 750,
    technology: 46,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 9,
    name: "Pal Metal Helm",
    rarity: "Common",
    description:
      "A helm made fromPal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
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
    defense: 150,
    health: 350,
    technology: 46,
    effects: [],
  },
  {
    id: 10,
    name: "Common Shield",
    rarity: "Common",
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_01.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_Shield_01.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Wood",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
      {
        name: "Stone",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
      },
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/fiber.png",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 800,
      Weight: 5,
      Shield: 100,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "Shield_01",
      IconName: "Shield_01",
      TypeA: "Armor",
      TypeB: "Shield",
      SortID: 1000,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
    },
    technology: 4,
    shield: 100,
    effects: [],
  },
  {
    id: 11,
    name: "Mega Shield",
    rarity: "Uncommon",
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.\r\nThe new model has been improved, enhancing its defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_02.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_Shield_02.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 31200,
      Weight: 5,
      Shield: 260,
      MaxStackCount: 1,
      Durability: 1500,
      Code: "Shield_02",
      IconName: "Shield_02",
      TypeA: "Armor",
      TypeB: "Shield",
      SortID: 1001,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
    },
    technology: 16,
    shield: 260,
    effects: [],
  },
  {
    id: 12,
    name: "Giga Shield",
    rarity: "Rare",
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.\r\nModifications have enhanced its effectiveness even further.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_03.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_Shield_03.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 62000,
      Weight: 5,
      Shield: 540,
      MaxStackCount: 1,
      Durability: 2250,
      Code: "Shield_03",
      IconName: "Shield_03",
      TypeA: "Armor",
      TypeB: "Shield",
      SortID: 1002,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
    },
    technology: 28,
    shield: 540,
    effects: [],
  },
  {
    id: 13,
    name: "Hyper Shield",
    rarity: "Epic",
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.\r\nThrough repeated testing, the highest quality has been achieved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_04.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_Shield_04.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 104000,
      Weight: 5,
      Shield: 1045,
      MaxStackCount: 1,
      Durability: 3500,
      Code: "Shield_04",
      IconName: "Shield_04",
      TypeA: "Armor",
      TypeB: "Shield",
      SortID: 1003,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
    },
    technology: 43,
    shield: 1045,
    effects: [],
  },
  {
    id: 14,
    name: "Cloth Outfit",
    rarity: "Uncommon",
    description: "Clothes made fromCloth.\r\nProtects against cold nights.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
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
    defense: 19,
    health: 91,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 15,
    name: "Cloth Outfit",
    rarity: "Rare",
    description: "Clothes made fromCloth.\r\nProtects against cold nights.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
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
    defense: 21,
    health: 98,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 16,
    name: "Cloth Outfit",
    rarity: "Epic",
    description: "Clothes made fromCloth.\r\nProtects against cold nights.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
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
    defense: 22,
    health: 105,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 17,
    name: "Cloth Outfit",
    rarity: "Legendary",
    description: "Clothes made fromCloth.\r\nProtects against cold nights.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmor.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
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
    defense: 24,
    health: 112,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 18,
    name: "Pelt Armor",
    rarity: "Uncommon",
    description:
      "Armor made fromLeather.\r\nIts warmth and defense have been improved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
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
    defense: 45,
    health: 182,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 19,
    name: "Pelt Armor",
    rarity: "Rare",
    description:
      "Armor made fromLeather.\r\nIts warmth and defense have been improved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
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
    defense: 49,
    health: 196,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 20,
    name: "Pelt Armor",
    rarity: "Epic",
    description:
      "Armor made fromLeather.\r\nIts warmth and defense have been improved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
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
    defense: 52,
    health: 210,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 21,
    name: "Pelt Armor",
    rarity: "Legendary",
    description:
      "Armor made fromLeather.\r\nIts warmth and defense have been improved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmor.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
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
    defense: 56,
    health: 224,
    effects: ["Cold Resistant Lv. 1"],
  },
  {
    id: 22,
    name: "Metal Armor",
    rarity: "Uncommon",
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
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
    defense: 91,
    health: 325,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 23,
    name: "Metal Armor",
    rarity: "Rare",
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
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
    defense: 98,
    health: 350,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 24,
    name: "Metal Armor",
    rarity: "Epic",
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
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
    defense: 105,
    health: 375,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 25,
    name: "Metal Armor",
    rarity: "Legendary",
    description:
      "Armor made of metal.\r\nSomewhat heavy, but provides good defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmor.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 33,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
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
    defense: 112,
    health: 400,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 26,
    name: "Refined Metal Armor",
    rarity: "Uncommon",
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
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
    defense: 195,
    health: 650,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 27,
    name: "Refined Metal Armor",
    rarity: "Rare",
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
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
    defense: 210,
    health: 700,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 28,
    name: "Refined Metal Armor",
    rarity: "Epic",
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
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
    defense: 225,
    health: 750,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 29,
    name: "Refined Metal Armor",
    rarity: "Legendary",
    description:
      "Armor made from high quality metal.\r\nQuite heavy, but provides excellent defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmor.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
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
    defense: 240,
    health: 800,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 30,
    name: "Pal Metal Armor",
    rarity: "Uncommon",
    description:
      "Armor made fromPal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
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
    defense: 286,
    health: 975,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 31,
    name: "Pal Metal Armor",
    rarity: "Rare",
    description:
      "Armor made fromPal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
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
    defense: 308,
    health: 1050,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 32,
    name: "Pal Metal Armor",
    rarity: "Epic",
    description:
      "Armor made fromPal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 18,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
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
    defense: 330,
    health: 1125,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 33,
    name: "Pal Metal Armor",
    rarity: "Legendary",
    description:
      "Armor made fromPal Metal Ingot.\r\nHigh defense, but extremely heavy.\r\nEquipment for a hero, it exudes bravery.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmor.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 27,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 18,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
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
    defense: 352,
    health: 1200,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 34,
    name: "Feathered Hair Band",
    rarity: "Uncommon",
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/fiber.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
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
    defense: 19,
    health: 78,
    effects: [],
  },
  {
    id: 35,
    name: "Feathered Hair Band",
    rarity: "Rare",
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/fiber.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
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
    defense: 21,
    health: 84,
    effects: [],
  },
  {
    id: 36,
    name: "Feathered Hair Band",
    rarity: "Epic",
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/fiber.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
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
    defense: 22,
    health: 90,
    effects: [],
  },
  {
    id: 37,
    name: "Feathered Hair Band",
    rarity: "Legendary",
    description:
      "A beautiful feathered headband.\r\nThough improbable, it somehow seems to protect its wearer from lethal head injuries.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurHelmet.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/fiber.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 33,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 342,
      Health: 96,
      Defense: 24,
      Weight: 5,
      MaxStackCount: 1,
      Durability: 800,
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
    defense: 24,
    health: 96,
    effects: [],
  },
  {
    id: 38,
    name: "Metal Helm",
    rarity: "Uncommon",
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
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
    defense: 65,
    health: 130,
    effects: [],
  },
  {
    id: 39,
    name: "Metal Helm",
    rarity: "Rare",
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
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
    defense: 70,
    health: 140,
    effects: [],
  },
  {
    id: 40,
    name: "Metal Helm",
    rarity: "Epic",
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
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
    defense: 75,
    health: 150,
    effects: [],
  },
  {
    id: 41,
    name: "Metal Helm",
    rarity: "Legendary",
    description:
      "A helm made of metal.\r\nA reliable piece of armor that protects your head, and all the thoughts within.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperHelmet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4674,
      Health: 160,
      Defense: 80,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 2800,
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
    defense: 80,
    health: 160,
    effects: [],
  },
  {
    id: 42,
    name: "Refined Metal Helm",
    rarity: "Uncommon",
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
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
    defense: 130,
    health: 325,
    effects: [],
  },
  {
    id: 43,
    name: "Refined Metal Helm",
    rarity: "Rare",
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
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
    defense: 140,
    health: 350,
    effects: [],
  },
  {
    id: 44,
    name: "Refined Metal Helm",
    rarity: "Epic",
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
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
    defense: 150,
    health: 375,
    effects: [],
  },
  {
    id: 45,
    name: "Refined Metal Helm",
    rarity: "Legendary",
    description:
      "A helm made from high quality metal.\r\nThe luster from the polished metal gives the wearer that added boost of confidence.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronHelmet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 9956,
      Health: 400,
      Defense: 160,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 6000,
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
    defense: 160,
    health: 400,
    effects: [],
  },
  {
    id: 46,
    name: "Pal Metal Helm",
    rarity: "Uncommon",
    description:
      "A helm made fromPal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
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
    defense: 195,
    health: 455,
    effects: [],
  },
  {
    id: 47,
    name: "Pal Metal Helm",
    rarity: "Rare",
    description:
      "A helm made fromPal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
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
    defense: 210,
    health: 490,
    effects: [],
  },
  {
    id: 48,
    name: "Pal Metal Helm",
    rarity: "Epic",
    description:
      "A helm made fromPal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
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
    defense: 225,
    health: 525,
    effects: [],
  },
  {
    id: 49,
    name: "Pal Metal Helm",
    rarity: "Legendary",
    description:
      "A helm made fromPal Metal Ingot.\r\nEnvied for its immaculate quality, it is proof of a chosen warrior.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealHelmet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 30742,
      Health: 560,
      Defense: 240,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 20000,
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
    defense: 240,
    health: 560,
    effects: [],
  },
  {
    id: 50,
    name: "Tropical Outfit",
    rarity: "Common",
    description:
      "ACloth Outfitproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
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
    defense: 25,
    health: 70,
    technology: 9,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 51,
    name: "Tropical Outfit",
    rarity: "Uncommon",
    description:
      "ACloth Outfitproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 384,
      Health: 91,
      Defense: 32,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 450,
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
    defense: 32,
    health: 91,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 52,
    name: "Tropical Outfit",
    rarity: "Rare",
    description:
      "ACloth Outfitproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 480,
      Health: 98,
      Defense: 35,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 600,
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
    defense: 35,
    health: 98,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 53,
    name: "Tropical Outfit",
    rarity: "Epic",
    description:
      "ACloth Outfitproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 576,
      Health: 105,
      Defense: 37,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 900,
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
    defense: 37,
    health: 105,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 54,
    name: "Tropical Outfit",
    rarity: "Legendary",
    description:
      "ACloth Outfitproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorHeat.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 704,
      Health: 112,
      Defense: 40,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 1200,
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
    defense: 40,
    health: 112,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 55,
    name: "Tundra Outfit",
    rarity: "Common",
    description:
      "ACloth Outfitproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
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
    defense: 25,
    health: 70,
    technology: 9,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 56,
    name: "Tundra Outfit",
    rarity: "Uncommon",
    description:
      "ACloth Outfitproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 384,
      Health: 91,
      Defense: 32,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 450,
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
    defense: 32,
    health: 91,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 57,
    name: "Tundra Outfit",
    rarity: "Rare",
    description:
      "ACloth Outfitproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 480,
      Health: 98,
      Defense: 35,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 600,
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
    defense: 35,
    health: 98,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 58,
    name: "Tundra Outfit",
    rarity: "Epic",
    description:
      "ACloth Outfitproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 576,
      Health: 105,
      Defense: 37,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 900,
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
    defense: 37,
    health: 105,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 59,
    name: "Tundra Outfit",
    rarity: "Legendary",
    description:
      "ACloth Outfitproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_ClothArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_ClothArmorCold.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 1,
      "Gold Coin": 704,
      Health: 112,
      Defense: 40,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 1200,
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
    defense: 40,
    health: 112,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 60,
    name: "Heat Resistant Pelt Armor",
    rarity: "Common",
    description:
      "APelt Armorproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Flame Organ",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
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
    defense: 45,
    health: 140,
    technology: 16,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 61,
    name: "Heat Resistant Pelt Armor",
    rarity: "Uncommon",
    description:
      "APelt Armorproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Flame Organ",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 3600,
      Health: 182,
      Defense: 58,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 900,
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
    defense: 58,
    health: 182,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 62,
    name: "Heat Resistant Pelt Armor",
    rarity: "Rare",
    description:
      "APelt Armorproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Flame Organ",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4500,
      Health: 196,
      Defense: 63,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1200,
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
    defense: 63,
    health: 196,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 63,
    name: "Heat Resistant Pelt Armor",
    rarity: "Epic",
    description:
      "APelt Armorproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Flame Organ",
        quantity: 18,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 5400,
      Health: 210,
      Defense: 67,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1800,
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
    defense: 67,
    health: 210,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 64,
    name: "Heat Resistant Pelt Armor",
    rarity: "Legendary",
    description:
      "APelt Armorproduced in hot regions.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorHeat.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Flame Organ",
        quantity: 27,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 6600,
      Health: 224,
      Defense: 72,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 2400,
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
    defense: 72,
    health: 224,
    effects: ["Heat Resistant Lv. 2"],
  },
  {
    id: 65,
    name: "Cold Resistant Pelt Armor",
    rarity: "Common",
    description:
      "APelt Armorproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Ice Organ",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
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
    defense: 45,
    health: 140,
    technology: 18,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 66,
    name: "Cold Resistant Pelt Armor",
    rarity: "Uncommon",
    description:
      "APelt Armorproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Ice Organ",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 3600,
      Health: 182,
      Defense: 58,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 900,
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
    defense: 58,
    health: 182,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 67,
    name: "Cold Resistant Pelt Armor",
    rarity: "Rare",
    description:
      "APelt Armorproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Ice Organ",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 4500,
      Health: 196,
      Defense: 63,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1200,
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
    defense: 63,
    health: 196,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 68,
    name: "Cold Resistant Pelt Armor",
    rarity: "Epic",
    description:
      "APelt Armorproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Ice Organ",
        quantity: 18,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 5400,
      Health: 210,
      Defense: 67,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1800,
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
    defense: 67,
    health: 210,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 69,
    name: "Cold Resistant Pelt Armor",
    rarity: "Legendary",
    description:
      "APelt Armorproduced in cold regions.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_FurArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_FurArmorCold.webp",
    recipe: [
      {
        name: "Leather",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Ice Organ",
        quantity: 27,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 6600,
      Health: 224,
      Defense: 72,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 2400,
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
    defense: 72,
    health: 224,
    effects: ["Cold Resistant Lv. 2"],
  },
  {
    id: 70,
    name: "Heat Resistant Metal Armor",
    rarity: "Common",
    description: "ImprovedMetal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
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
    defense: 105,
    health: 250,
    technology: 25,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 71,
    name: "Heat Resistant Metal Armor",
    rarity: "Uncommon",
    description: "ImprovedMetal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 26,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 5904,
      Health: 325,
      Defense: 136,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2100,
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
    defense: 136,
    health: 325,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 72,
    name: "Heat Resistant Metal Armor",
    rarity: "Rare",
    description: "ImprovedMetal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 39,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 24,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 24,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 7380,
      Health: 350,
      Defense: 147,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2800,
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
    defense: 147,
    health: 350,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 73,
    name: "Heat Resistant Metal Armor",
    rarity: "Epic",
    description: "ImprovedMetal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 58,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 36,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 36,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 8856,
      Health: 375,
      Defense: 157,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 4200,
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
    defense: 157,
    health: 375,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 74,
    name: "Heat Resistant Metal Armor",
    rarity: "Legendary",
    description: "ImprovedMetal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorHeat.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 87,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 54,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 54,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 10824,
      Health: 400,
      Defense: 168,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 5600,
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
    defense: 168,
    health: 400,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 75,
    name: "Cold Resistant Metal Armor",
    rarity: "Common",
    description:
      "ImprovedMetal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
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
    defense: 105,
    health: 250,
    technology: 27,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 76,
    name: "Cold Resistant Metal Armor",
    rarity: "Uncommon",
    description:
      "ImprovedMetal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 26,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 5904,
      Health: 325,
      Defense: 136,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2100,
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
    defense: 136,
    health: 325,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 77,
    name: "Cold Resistant Metal Armor",
    rarity: "Rare",
    description:
      "ImprovedMetal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 39,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 24,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 24,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 7380,
      Health: 350,
      Defense: 147,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2800,
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
    defense: 147,
    health: 350,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 78,
    name: "Cold Resistant Metal Armor",
    rarity: "Epic",
    description:
      "ImprovedMetal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 58,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 36,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 36,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 8856,
      Health: 375,
      Defense: 157,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 4200,
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
    defense: 157,
    health: 375,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 79,
    name: "Cold Resistant Metal Armor",
    rarity: "Legendary",
    description:
      "ImprovedMetal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_CopperArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_CopperArmorCold.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Leather",
        quantity: 87,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "Cloth",
        quantity: 54,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 54,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 2,
      "Gold Coin": 10824,
      Health: 400,
      Defense: 168,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 5600,
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
    defense: 168,
    health: 400,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 80,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Common",
    description: "ImprovedRefined Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
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
    defense: 180,
    health: 500,
    technology: 40,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 81,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Uncommon",
    description: "ImprovedRefined Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 24,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 11808,
      Health: 650,
      Defense: 234,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 4500,
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
    defense: 234,
    health: 650,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 82,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Rare",
    description: "ImprovedRefined Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 36,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 14760,
      Health: 700,
      Defense: 252,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 6000,
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
    defense: 252,
    health: 700,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 83,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Epic",
    description: "ImprovedRefined Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 54,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 17712,
      Health: 750,
      Defense: 270,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 9000,
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
    defense: 270,
    health: 750,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 84,
    name: "Heat Resistant Refined Metal Armor",
    rarity: "Legendary",
    description: "ImprovedRefined Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorHeat.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 81,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 21648,
      Health: 800,
      Defense: 288,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 12000,
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
    defense: 288,
    health: 800,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 85,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Common",
    description:
      "ImprovedRefined Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
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
    defense: 180,
    health: 500,
    technology: 41,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 86,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Uncommon",
    description:
      "ImprovedRefined Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 24,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 11808,
      Health: 650,
      Defense: 234,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 4500,
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
    defense: 234,
    health: 650,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 87,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Rare",
    description:
      "ImprovedRefined Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 36,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 14760,
      Health: 700,
      Defense: 252,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 6000,
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
    defense: 252,
    health: 700,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 88,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Epic",
    description:
      "ImprovedRefined Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 54,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 17712,
      Health: 750,
      Defense: 270,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 9000,
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
    defense: 270,
    health: 750,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 89,
    name: "Cold Resistant Refined Metal Armor",
    rarity: "Legendary",
    description:
      "ImprovedRefined Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_IronArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_IronArmorCold.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Leather",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 81,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 3,
      "Gold Coin": 21648,
      Health: 800,
      Defense: 288,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 12000,
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
    defense: 288,
    health: 800,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 90,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Common",
    description: "ImprovedPal Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
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
    defense: 250,
    health: 750,
    technology: 48,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 91,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Uncommon",
    description: "ImprovedPal Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 32,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 38760,
      Health: 975,
      Defense: 325,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 15000,
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
    defense: 325,
    health: 975,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 92,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Rare",
    description: "ImprovedPal Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 18,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 48,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 48450,
      Health: 1050,
      Defense: 350,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 20000,
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
    defense: 350,
    health: 1050,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 93,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Epic",
    description: "ImprovedPal Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 27,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 72,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 58140,
      Health: 1125,
      Defense: 375,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 30000,
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
    defense: 375,
    health: 1125,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 94,
    name: "Heat Resistant Pal Metal Armor",
    rarity: "Legendary",
    description: "ImprovedPal Metal Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorHeat.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 108,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 71060,
      Health: 1200,
      Defense: 400,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 40000,
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
    defense: 400,
    health: 1200,
    effects: ["Heat Resistant Lv. 2", "Cold Resistant Lv. 1"],
  },
  {
    id: 95,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Common",
    description:
      "ImprovedPal Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
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
    defense: 250,
    health: 750,
    technology: 50,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 96,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Uncommon",
    description:
      "ImprovedPal Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 32,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 9,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 38760,
      Health: 975,
      Defense: 325,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 15000,
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
    defense: 325,
    health: 975,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 97,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Rare",
    description:
      "ImprovedPal Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 18,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 48,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 11,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 48450,
      Health: 1050,
      Defense: 350,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 20000,
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
    defense: 350,
    health: 1050,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 98,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Epic",
    description:
      "ImprovedPal Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 27,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 72,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 13,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 58140,
      Health: 1125,
      Defense: 375,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 30000,
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
    defense: 375,
    health: 1125,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 99,
    name: "Cold Resistant Pal Metal Armor",
    rarity: "Legendary",
    description:
      "ImprovedPal Metal Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_StealArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_StealArmorCold.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Leather",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Leather.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/leather.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 108,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 71060,
      Health: 1200,
      Defense: 400,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 40000,
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
    defense: 400,
    health: 1200,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 100,
    name: "Lyleen Floral Cap",
    rarity: "Common",
    description: "Floral cap shaped like aLyleen.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip023.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_HeadEquip023.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 300,
      Code: "HeadEquip023",
      IconName: "HeadEquip023",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1385,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "HeadEquip023",
      SneakAttackRate: 1,
      PassiveSkillName: "ElementResist_Leaf_1",
    },
    defense: 20,
    health: 60,
    effects: ["Grass Damage Reduction Lv. 1"],
  },
  {
    id: 101,
    name: "Sibelyx Hat",
    rarity: "Common",
    description: "Hat shaped like aSibelyx.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip024.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_HeadEquip024.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 300,
      Code: "HeadEquip024",
      IconName: "HeadEquip024",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1386,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "HeadEquip024",
      SneakAttackRate: 1,
      PassiveSkillName: "ElementResist_Ice_1",
    },
    defense: 20,
    health: 60,
    effects: ["Ice Damage Reduction Lv. 1"],
  },
  {
    id: 102,
    name: "Cawgnito Hat",
    rarity: "Common",
    description: "Hat shaped like aCawgnito.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip027.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_HeadEquip027.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 300,
      Code: "HeadEquip027",
      IconName: "HeadEquip027",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1397,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "HeadEquip027",
      SneakAttackRate: 1,
      PassiveSkillName: "ElementResist_Dark_1",
    },
    defense: 20,
    health: 60,
    effects: ["Dark Damage Reduction Lv. 1"],
  },
  {
    id: 103,
    name: "Lamball Helm",
    rarity: "Common",
    description: "Helm shaped like aLamball.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip029.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_HeadEquip029.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 300,
      Code: "HeadEquip029",
      IconName: "HeadEquip029",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1403,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "HeadEquip029",
      SneakAttackRate: 1,
      PassiveSkillName: "ElementResist_Normal_1",
    },
    defense: 20,
    health: 60,
    effects: ["Neutral Damage Reduction Lv. 1"],
  },
  {
    id: 104,
    name: "Dumud Helm",
    rarity: "Common",
    description: "Helm shaped like aDumud.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip030.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_HeadEquip030.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 300,
      Code: "HeadEquip030",
      IconName: "HeadEquip030",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1404,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "HeadEquip030",
      SneakAttackRate: 1,
      PassiveSkillName: "ElementResist_Earth_1",
    },
    defense: 20,
    health: 60,
    effects: ["Earth Damage Reduction Lv. 1"],
  },
  {
    id: 105,
    name: "Cattiva Hat",
    rarity: "Common",
    description: "Hat shaped like aCattiva.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip033.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_HeadEquip033.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 4,
      MaxStackCount: 1,
      Durability: 300,
      Code: "HeadEquip033",
      IconName: "HeadEquip033",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1415,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "HeadEquip033",
      SneakAttackRate: 1,
      PassiveSkillName: "ElementResist_Normal_1",
    },
    defense: 20,
    health: 60,
    effects: ["Neutral Damage Reduction Lv. 1"],
  },
  {
    id: 106,
    name: "Plasteel Armor",
    rarity: "Common",
    description:
      "Armor made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
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
    defense: 385,
    health: 1300,
    technology: 50,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 107,
    name: "Plasteel Helmet",
    rarity: "Common",
    description:
      "Helmet made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
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
    defense: 260,
    health: 600,
    technology: 51,
    effects: [],
  },
  {
    id: 108,
    name: "Ultra Shield",
    rarity: "Legendary",
    description:
      "Strange shield made with Paldium technology.\r\nIt automatically repair itself after not taking damage for a while.\r\nAs a result of further experiments, ultimate quality has been achieved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_05.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_Shield_05.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Plasteel",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Ancient Civilization Core",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-core.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 100000,
      Weight: 5,
      Shield: 1520,
      MaxStackCount: 1,
      Durability: 20000,
      Code: "Shield_Ultra",
      IconName: "Shield_05",
      TypeA: "Armor",
      TypeB: "Shield",
      SortID: 1004,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
    },
    technology: 55,
    shield: 1520,
    effects: [],
  },
  {
    id: 109,
    name: "Witch's Crown (Ultra)",
    rarity: "Legendary",
    description:
      "Imbued with the ominous power of Bellanoir Libero (Ultra).\r\nExtremely difficult to obtain.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Head001_purple.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_Head001_purple.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 80,
      Defense: 30,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "HeadEquip001_purple",
      IconName: "HeadEquip001_purple",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1500,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "HeadEquip001_purple",
      SneakAttackRate: 1,
      PassiveSkillName: "ElementResist_Dragon_1",
    },
    defense: 30,
    health: 80,
    effects: ["Dragon Damage Reduction Lv. 1"],
  },
  {
    id: 110,
    name: "Zoe Hat",
    rarity: "Legendary",
    description: "Dress up like Zoe using this special headpiece!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Grass.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_GYM_Head_Grass.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "GYM_Head_Grass",
      IconName: "GYM_Head_Grass",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1600,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "GYM_Head_Grass",
      SneakAttackRate: 1,
    },
    defense: 20,
    health: 60,
    effects: [],
  },
  {
    id: 111,
    name: "Axel Hat",
    rarity: "Legendary",
    description: "Dress up like Axel using this special headpiece!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Electric.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_GYM_Head_Electric.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "GYM_Head_Electric",
      IconName: "GYM_Head_Electric",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1602,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "GYM_Head_Electric",
      SneakAttackRate: 1,
    },
    defense: 20,
    health: 60,
    effects: [],
  },
  {
    id: 112,
    name: "Lily Hat",
    rarity: "Legendary",
    description: "Dress up like Lily using this special headpiece!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Forest.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_GYM_Head_Forest.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "GYM_Head_Forest",
      IconName: "GYM_Head_Forest",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1601,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "GYM_Head_Forest",
      SneakAttackRate: 1,
    },
    defense: 20,
    health: 60,
    effects: [],
  },
  {
    id: 113,
    name: "Victor Hat",
    rarity: "Legendary",
    description: "Dress up like Victor using this special headpiece!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Snow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_GYM_Head_Snow.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "GYM_Head_Snow",
      IconName: "GYM_Head_Snow",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1604,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "GYM_Head_Snow",
      SneakAttackRate: 1,
    },
    defense: 20,
    health: 60,
    effects: [],
  },
  {
    id: 114,
    name: "Marcus Hat",
    rarity: "Legendary",
    description: "Dress up like Marcus using this special headpiece!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Desert.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_GYM_Head_Desert.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "GYM_Head_Desert",
      IconName: "GYM_Head_Desert",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1603,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "GYM_Head_Desert",
      SneakAttackRate: 1,
    },
    defense: 20,
    health: 60,
    effects: [],
  },
  {
    id: 115,
    name: "Horns of Supremacy",
    rarity: "Legendary",
    description:
      "Bursts with the ominous power of Blazamut Ryu (Ultra).\r\nTo possess this is exceedingly rare.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip041.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_HeadEquip041.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 80,
      Defense: 30,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "HeadEquip041",
      IconName: "HeadEquip041",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1501,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "HeadEquip041",
      SneakAttackRate: 1,
      PassiveSkillName: "ElementResist_Aqua_1",
    },
    defense: 30,
    health: 80,
    effects: ["Water Damage Reduction Lv. 1"],
  },
  {
    id: 116,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Common",
    description: "ImprovedPlasteel Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
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
    defense: 400,
    health: 1300,
    technology: 53,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 117,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Common",
    description:
      "ImprovedPlasteel Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
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
    defense: 400,
    health: 1300,
    technology: 54,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 118,
    name: "Lightweight Plasteel Armor",
    rarity: "Common",
    description: "ImprovedPlasteel Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
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
    defense: 400,
    health: 1300,
    technology: 55,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 119,
    name: "Saya Hat",
    rarity: "Legendary",
    description: "Dress up like Saya using this special headpiece!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Sakurajima.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_GYM_Head_Sakurajima.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "GYM_Head_Sakurajima",
      IconName: "GYM_Head_Sakurajima",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1605,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "GYM_Head_Sakurajima",
      SneakAttackRate: 1,
    },
    defense: 20,
    health: 60,
    effects: [],
  },
  {
    id: 120,
    name: "Plasteel Armor",
    rarity: "Uncommon",
    description:
      "Armor made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1560,
      Defense: 500,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 27000,
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
    defense: 500,
    health: 1560,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 121,
    name: "Plasteel Armor",
    rarity: "Rare",
    description:
      "Armor made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1690,
      Defense: 539,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 36000,
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
    defense: 539,
    health: 1690,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 122,
    name: "Plasteel Armor",
    rarity: "Epic",
    description:
      "Armor made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1820,
      Defense: 577,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 54000,
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
    defense: 577,
    health: 1820,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 123,
    name: "Plasteel Armor",
    rarity: "Legendary",
    description:
      "Armor made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmor.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1950,
      Defense: 616,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 72000,
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
    defense: 616,
    health: 1950,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 124,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Uncommon",
    description: "ImprovedPlasteel Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1560,
      Defense: 520,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 27000,
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
    defense: 520,
    health: 1560,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 125,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Rare",
    description: "ImprovedPlasteel Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1690,
      Defense: 560,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 36000,
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
    defense: 560,
    health: 1690,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 126,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Epic",
    description: "ImprovedPlasteel Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1820,
      Defense: 600,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 54000,
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
    defense: 600,
    health: 1820,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 127,
    name: "Heat Resistant Plasteel Armor",
    rarity: "Legendary",
    description: "ImprovedPlasteel Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorHeat.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1950,
      Defense: 640,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 72000,
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
    defense: 640,
    health: 1950,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 128,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Uncommon",
    description:
      "ImprovedPlasteel Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1560,
      Defense: 520,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 27000,
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
    defense: 520,
    health: 1560,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 129,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Rare",
    description:
      "ImprovedPlasteel Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1690,
      Defense: 560,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 36000,
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
    defense: 560,
    health: 1690,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 130,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Epic",
    description:
      "ImprovedPlasteel Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1820,
      Defense: 600,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 54000,
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
    defense: 600,
    health: 1820,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 131,
    name: "Cold Resistant Plasteel Armor",
    rarity: "Legendary",
    description:
      "ImprovedPlasteel Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorCold.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1950,
      Defense: 640,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 72000,
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
    defense: 640,
    health: 1950,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 132,
    name: "Lightweight Plasteel Armor",
    rarity: "Uncommon",
    description: "ImprovedPlasteel Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1560,
      Defense: 520,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 27000,
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
    defense: 520,
    health: 1560,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 133,
    name: "Lightweight Plasteel Armor",
    rarity: "Rare",
    description: "ImprovedPlasteel Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1690,
      Defense: 560,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 36000,
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
    defense: 560,
    health: 1690,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 134,
    name: "Lightweight Plasteel Armor",
    rarity: "Epic",
    description: "ImprovedPlasteel Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1820,
      Defense: 600,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 54000,
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
    defense: 600,
    health: 1820,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 135,
    name: "Lightweight Plasteel Armor",
    rarity: "Legendary",
    description: "ImprovedPlasteel Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticArmorWeight.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 35000,
      Health: 1950,
      Defense: 640,
      Weight: 35,
      MaxStackCount: 1,
      Durability: 72000,
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
    defense: 640,
    health: 1950,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 136,
    name: "Plasteel Helmet",
    rarity: "Uncommon",
    description:
      "Helmet made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 18000,
      Health: 720,
      Defense: 312,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 27000,
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
    defense: 312,
    health: 720,
    effects: [],
  },
  {
    id: 137,
    name: "Plasteel Helmet",
    rarity: "Rare",
    description:
      "Helmet made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 75,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 17,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 18000,
      Health: 780,
      Defense: 338,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 36000,
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
    defense: 338,
    health: 780,
    effects: [],
  },
  {
    id: 138,
    name: "Plasteel Helmet",
    rarity: "Epic",
    description:
      "Helmet made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 112,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 19,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 18000,
      Health: 840,
      Defense: 364,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 54000,
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
    defense: 364,
    health: 840,
    effects: [],
  },
  {
    id: 139,
    name: "Plasteel Helmet",
    rarity: "Legendary",
    description:
      "Helmet made ofPlasteel.\r\nIn addition to enhanced defense capabilities, its weight was also reduced.\r\nEquipment that pushes the limits of technology.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_PlasticHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_PlasticHelmet.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 168,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 18000,
      Health: 900,
      Defense: 390,
      Weight: 12,
      MaxStackCount: 1,
      Durability: 72000,
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
    defense: 390,
    health: 900,
    effects: [],
  },
  {
    id: 140,
    name: "Hexolite Armor",
    rarity: "Common",
    description:
      "Armor made ofHexolite.\r\nPossesses overwhelming durability and defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
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
    defense: 580,
    health: 1750,
    technology: 57,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 141,
    name: "Xenolord's head",
    rarity: "Legendary",
    description: "A headgear designed to resemble aXenolord.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_HeadEquip044.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_HeadEquip044.webp",
    recipe: [],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 80,
      Defense: 30,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "HeadEquip044",
      IconName: "HeadEquip044",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1502,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "HeadEquip044",
      SneakAttackRate: 1,
      PassiveSkillName: "ElementResist_Ice_1",
    },
    defense: 30,
    health: 80,
    effects: ["Ice Damage Reduction Lv. 1"],
  },
  {
    id: 142,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Common",
    description: "ImprovedHexolite Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
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
    defense: 600,
    health: 1750,
    technology: 59,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 143,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Common",
    description:
      "ImprovedHexolite Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
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
    defense: 600,
    health: 1750,
    technology: 59,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 144,
    name: "Lightweight Hexolite Armor",
    rarity: "Common",
    description: "ImprovedHexolite Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
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
    defense: 600,
    health: 1750,
    technology: 60,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 145,
    name: "Hexolite Helmet",
    rarity: "Common",
    description:
      "Helmet made ofHexolite.\r\nCombines incredible strength and lightness.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
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
    defense: 350,
    health: 800,
    technology: 58,
    effects: [],
  },
  {
    id: 146,
    name: "Bjorn Hat",
    rarity: "Legendary",
    description: "Dress up like Bjorn using this special headpiece!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_GYM_Head_Viking.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_GYM_Head_Viking.webp",
    recipe: [
      {
        name: "Cloth",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cloth.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 99,
      "Gold Coin": 180,
      Health: 60,
      Defense: 20,
      Weight: 7,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "GYM_Head_Viking",
      IconName: "GYM_Head_Viking",
      TypeA: "Armor",
      TypeB: "ArmorHead",
      SortID: 1606,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      ItemActorClass: "GYM_Head_Desert",
      SneakAttackRate: 1,
    },
    defense: 20,
    health: 60,
    effects: [],
  },
  {
    id: 147,
    name: "Hexolite Helmet",
    rarity: "Uncommon",
    description:
      "Helmet made ofHexolite.\r\nCombines incredible strength and lightness.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 20000,
      Health: 880,
      Defense: 385,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 30000,
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
    defense: 385,
    health: 880,
    effects: [],
  },
  {
    id: 148,
    name: "Hexolite Helmet",
    rarity: "Rare",
    description:
      "Helmet made ofHexolite.\r\nCombines incredible strength and lightness.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 20000,
      Health: 920,
      Defense: 402,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 40000,
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
    defense: 402,
    health: 920,
    effects: [],
  },
  {
    id: 149,
    name: "Hexolite Helmet",
    rarity: "Epic",
    description:
      "Helmet made ofHexolite.\r\nCombines incredible strength and lightness.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 20000,
      Health: 960,
      Defense: 420,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 60000,
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
    defense: 420,
    health: 960,
    effects: [],
  },
  {
    id: 150,
    name: "Hexolite Helmet",
    rarity: "Legendary",
    description:
      "Helmet made ofHexolite.\r\nCombines incredible strength and lightness.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFHelmet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFHelmet.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 20000,
      Health: 1040,
      Defense: 455,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 80000,
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
    defense: 455,
    health: 1040,
    effects: [],
  },
  {
    id: 151,
    name: "Hexolite Armor",
    rarity: "Uncommon",
    description:
      "Armor made ofHexolite.\r\nPossesses overwhelming durability and defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 1925,
      Defense: 638,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 30000,
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
    defense: 638,
    health: 1925,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 152,
    name: "Hexolite Armor",
    rarity: "Rare",
    description:
      "Armor made ofHexolite.\r\nPossesses overwhelming durability and defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2012,
      Defense: 667,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 40000,
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
    defense: 667,
    health: 2012,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 153,
    name: "Hexolite Armor",
    rarity: "Epic",
    description:
      "Armor made ofHexolite.\r\nPossesses overwhelming durability and defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2100,
      Defense: 696,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 60000,
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
    defense: 696,
    health: 2100,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 154,
    name: "Hexolite Armor",
    rarity: "Legendary",
    description:
      "Armor made ofHexolite.\r\nPossesses overwhelming durability and defense.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmor.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2275,
      Defense: 754,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 80000,
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
    defense: 754,
    health: 2275,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 1"],
  },
  {
    id: 155,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Uncommon",
    description: "ImprovedHexolite Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 1925,
      Defense: 660,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 27000,
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
    defense: 660,
    health: 1925,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 156,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Rare",
    description: "ImprovedHexolite Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2012,
      Defense: 690,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 36000,
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
    defense: 690,
    health: 2012,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 157,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Epic",
    description: "ImprovedHexolite Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2100,
      Defense: 720,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 54000,
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
    defense: 720,
    health: 2100,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 158,
    name: "Heat Resistant Hexolite Armor",
    rarity: "Legendary",
    description: "ImprovedHexolite Armor.\r\nBoasts high heat resistance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorHeat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorHeat.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Flame Organ",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2275,
      Defense: 780,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 72000,
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
    defense: 780,
    health: 2275,
    effects: ["Cold Resistant Lv. 1", "Heat Resistant Lv. 2"],
  },
  {
    id: 159,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Uncommon",
    description:
      "ImprovedHexolite Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 1925,
      Defense: 660,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 27000,
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
    defense: 660,
    health: 1925,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 160,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Rare",
    description:
      "ImprovedHexolite Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2012,
      Defense: 690,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 36000,
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
    defense: 690,
    health: 2012,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 161,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Epic",
    description:
      "ImprovedHexolite Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2100,
      Defense: 720,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 54000,
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
    defense: 720,
    health: 2100,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 162,
    name: "Cold Resistant Hexolite Armor",
    rarity: "Legendary",
    description:
      "ImprovedHexolite Armor.\r\nUseful for surviving in cold climates.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorCold.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorCold.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ice Organ",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2275,
      Defense: 780,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 72000,
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
    defense: 780,
    health: 2275,
    effects: ["Cold Resistant Lv. 2", "Heat Resistant Lv. 1"],
  },
  {
    id: 163,
    name: "Lightweight Hexolite Armor",
    rarity: "Uncommon",
    description: "ImprovedHexolite Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 1925,
      Defense: 660,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 27000,
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
    defense: 660,
    health: 1925,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 164,
    name: "Lightweight Hexolite Armor",
    rarity: "Rare",
    description: "ImprovedHexolite Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 300,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2012,
      Defense: 690,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 36000,
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
    defense: 690,
    health: 2012,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 165,
    name: "Lightweight Hexolite Armor",
    rarity: "Epic",
    description: "ImprovedHexolite Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 450,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2100,
      Defense: 720,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 54000,
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
    defense: 720,
    health: 2100,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 166,
    name: "Lightweight Hexolite Armor",
    rarity: "Legendary",
    description: "ImprovedHexolite Armor.\r\nIncreases carrying capacity.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_SFArmorWeight.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_SFArmorWeight.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 675,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "High Quality Cloth",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-cloth.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 40000,
      Health: 2275,
      Defense: 780,
      Weight: 40,
      MaxStackCount: 1,
      Durability: 72000,
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
    defense: 780,
    health: 2275,
    effects: [
      "Cold Resistant Lv. 1",
      "Heat Resistant Lv. 1",
      "Max Carrying Capacity Lv. 2",
    ],
  },
  {
    id: 167,
    name: "Advanced Shield",
    rarity: "Legendary",
    description:
      "Strange shield made with advanced technology.\r\nIt automatically repair itself after not taking damage for a while.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Armor_Shield_06.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/armors/T_itemicon_Armor_Shield_06.webp",
    recipe: [
      {
        name: "Ancient Civilization Parts",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
      {
        name: "Paldium Fragment",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Hexolite",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/hexolite.png",
      },
      {
        name: "Ancient Civilization Core",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-core.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Armor",
      Rank: 4,
      "Gold Coin": 120000,
      Weight: 5,
      Shield: 1800,
      MaxStackCount: 1,
      Durability: 21000,
      Code: "Shield_SF",
      IconName: "Shield_SF",
      TypeA: "Armor",
      TypeB: "Shield",
      SortID: 1005,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
    },
    technology: 60,
    shield: 1800,
    effects: [],
  },
];
