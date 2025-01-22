export const sphereModule = [
  {
    id: 1,
    name: "Heavy Weight Module",
    rarity: "Uncommon",
    description:
      "Equipping it makes the sphere heavier, reducing its range but increasing its capture power.Sphere Weight +1 Capture Strength +1",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_SphereModule_Heavy.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/sphere_modules/heavy-weight-module.png",
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
        name: "Ingot",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Stone",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Sphere Module",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 1,
      Code: "SphereModule_Heavy",
      IconName: "SphereModule_Heavy",
      TypeA: "CaptureItemModifier",
      TypeB: "CaptureItemModifier",
      SortID: 12000,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "SphereModule_Heavy",
      PassiveSkillName2: "CaptureLevel_Up_1",
    },
    technology: 11,
    effects: ["Sphere Weight +1", "Capture Strength +1"],
  },
  {
    id: 2,
    name: "Curve Module",
    rarity: "Rare",
    description:
      "Equipping it causes the sphere to spin with a curved trajectory. \r\nIt becomes easier to catch Pals off guard, and increases capture power.Sphere Curve +1 Capture Strength +2",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_SphereModule_Curve.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/sphere_modules/curve-module.png",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Stone",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
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
      Type: "Sphere Module",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 1,
      Code: "SphereModule_Curve",
      IconName: "SphereModule_Curve",
      TypeA: "CaptureItemModifier",
      TypeB: "CaptureItemModifier",
      SortID: 12001,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "SphereModule_Curve",
      PassiveSkillName2: "CaptureLevel_Up_2",
    },
    technology: 23,
    effects: ["Sphere Curve +1", "Capture Strength +2"],
  },
  {
    id: 3,
    name: "Sniper Module",
    rarity: "Epic",
    description:
      "Equipping it increases the sphere's range, allowing it to sharply capture Pals and enhancing capture power.Sphere Range +1 Capture Strength +2",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_SphereModule_Spiper.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/sphere_modules/sniper-module.png",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Cement",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cement.png",
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
      Type: "Sphere Module",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 1,
      Code: "SphereModule_Sniper",
      IconName: "SphereModule_Sniper",
      TypeA: "CaptureItemModifier",
      TypeB: "CaptureItemModifier",
      SortID: 12002,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "SphereModule_Sniper",
      PassiveSkillName2: "CaptureLevel_Up_2",
    },
    technology: 31,
    effects: ["Sphere Range +1", "Capture Strength +2"],
  },
  {
    id: 4,
    name: "Slider Module",
    rarity: "Epic",
    description:
      "Equipping it adds a slider spin to the sphere. \r\nThe sphere curves at a sharp angle, making it easier to catch Pals off guard and increasing capture power.Sphere Slider Capture Strength +3",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_SphereModule_Curve2.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/sphere_modules/slider-module.png",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
      {
        name: "Refined Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Carbon Fiber",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/carbon-fiber.png",
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
      Rarity: "Epic",
      Type: "Sphere Module",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 1,
      Code: "SphereModule_Curve2",
      IconName: "SphereModule_Curve2",
      TypeA: "CaptureItemModifier",
      TypeB: "CaptureItemModifier",
      SortID: 12003,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "SphereModule_Curve2",
      PassiveSkillName2: "CaptureLevel_Up_3",
    },
    technology: 39,
    effects: ["Sphere Slider", "Capture Strength +3"],
  },
  {
    id: 5,
    name: "Sniper Module Ⅱ",
    rarity: "Legendary",
    description:
      "Equipping it significantly increases the sphere's range, allowing it to sharply capture Pals and enhancing capture power.Sphere Range +2 Capture Strength +3",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_SphereModule_Sniper2.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/sphere_modules/sniper-module-Ⅱ.png",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
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
        name: "Carbon Fiber",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/carbon-fiber.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
      {
        name: "Ancient Civilization Core",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-core.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Sphere Module",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 1,
      Code: "SphereModule_Sniper2",
      IconName: "SphereModule_Sniper2",
      TypeA: "CaptureItemModifier",
      TypeB: "CaptureItemModifier",
      SortID: 12004,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "SphereModule_Sniper2",
      PassiveSkillName2: "CaptureLevel_Up_3",
    },
    technology: 47,
    effects: ["Sphere Range +2", "Capture Strength +3"],
  },
  {
    id: 6,
    name: "Homing Module",
    rarity: "Legendary",
    description:
      "Equipping it makes the sphere home in on Pals, further increasing capture power.Sphere Homing Capture Strength +3",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_SphereModule_Homing.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/sphere_modules/homing-module.png",
    recipe: [
      {
        name: "Plasteel",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Carbon Fiber",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/carbon-fiber.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
      {
        name: "Dark Fragment",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalDarkParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/dark-fragment.png",
      },
      {
        name: "Ancient Civilization Core",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_AncientParts2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-core.png",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Sphere Module",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 1,
      Code: "SphereModule_Homing",
      IconName: "SphereModule_Homing",
      TypeA: "CaptureItemModifier",
      TypeB: "CaptureItemModifier",
      SortID: 12005,
      ItemStaticClass: "CommonArmor",
      ItemDynamicClass: "CommonArmor",
      SneakAttackRate: 1,
      PassiveSkillName: "SphereModule_Homing",
      PassiveSkillName2: "CaptureLevel_Up_3",
    },
    technology: 57,
    effects: ["Sphere Homing", "Capture Strength +3"],
  },
];
