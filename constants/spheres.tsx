export const spheres = [
  {
    ID: 1,
    name: "Pal Sphere",
    rarity: "Common",
    capture_power: 7,
    technology: 2,
    description:
      "An item that captures Pals when thrown.\r\nThis basic model is only effective on low level Pals.",
    image: require("../assets/images/items/pal-sphere.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_PalSphere.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 1,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Wood",
        quantity: 3,
        image: require("../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 3,
        image: require("../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
    "stats": {
      "Rarity": 99,
      "Type": "Sphere",
      "Rank": 99,
      "Gold Coin": 120,
      "Weight": "0.1",
      "MaxStackCount": 9999,
      "Code": "PalSphere_Debug",
      "IconName": "CapturePrism",
      "TypeA": "SpecialWeapon",
      "TypeB": "SPWeaponCaptureBall",
      "SortID": 9,
      "ItemStaticClass": "CommonWeapon",
      "ItemActorClass": "PalSphere_Debug",
      "ItemStaticMeshName": "PalSphere_Debug",
      "VisualBlueprintClassName": "BP_Item_PalSphere_Debug",
      "SneakAttackRate": 100
    }
  },
  {
    ID: 2,
    name: "Mega Sphere",
    rarity: "Common",
    capture_power: 14,
    technology: 14,
    description:
      "An item that captures Pals when thrown.\r\nIts capabilities have been improved, allowing it to catch a wider range of Pals.",
    image: require("../assets/images/items/mega-sphere.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_PalSphere_Mega.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 1,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ingot",
        quantity: 1,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Wood",
        quantity: 5,
        image: require("../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 5,
        image: require("../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
    "stats": {
      "Rarity": "Common",
      "Type": "Sphere",
      "Rank": 2,
      "Gold Coin": 920,
      "Weight": "0.1",
      "MaxStackCount": 9999,
      "Code": "PalSphere_Mega",
      "IconName": "PalSphere_Mega",
      "TypeA": "SpecialWeapon",
      "TypeB": "SPWeaponCaptureBall",
      "SortID": 2,
      "ItemStaticClass": "CommonWeapon",
      "ItemActorClass": "PalSphereMega",
      "ItemStaticMeshName": "PalSphereMega",
      "VisualBlueprintClassName": "BP_Item_PalSphereMega",
      "SneakAttackRate": 100
    }
  },
  {
    ID: 3,
    name: "Giga Sphere",
    rarity: "Uncommon",
    capture_power: 20,
    technology: 20,
    description:
      "An item that captures Pals when thrown.\r\nAble to capture moderately powerful Pals.",
    image: require("../assets/images/items/giga-sphere.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_PalSphere_Giga.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 2,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ingot",
        quantity: 2,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Wood",
        quantity: 7,
        image: require("../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 7,
        image: require("../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
    "stats": {
      "Rarity": 1,
      "Type": "Sphere",
      "Rank": 3,
      "Gold Coin": 1520,
      "Weight": "0.1",
      "MaxStackCount": 9999,
      "Code": "PalSphere_Giga",
      "IconName": "PalSphere_Giga",
      "TypeA": "SpecialWeapon",
      "TypeB": "SPWeaponCaptureBall",
      "SortID": 3,
      "ItemStaticClass": "CommonWeapon",
      "ItemActorClass": "PalSphereGiga",
      "ItemStaticMeshName": "PalSphereGiga",
      "VisualBlueprintClassName": "BP_Item_PalSphereGiga",
      "SneakAttackRate": 100
    }
  },
  {
    ID: 4,
    name: "Hyper Sphere",
    rarity: "Rare",
    capture_power: 26,
    technology: 27,
    description:
      "An item that captures Pals when thrown.\r\nEnhanced capabilities allow it to capture even more powerful Pals.",
    image: require("../assets/images/items/hyper-sphere.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_PalSphere_Tera.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 3,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ingot",
        quantity: 3,
        image: require("../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Wood",
        quantity: 10,
        image: require("../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Cement",
        quantity: 2,
        image: require("../assets/images/items/cement.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
      },
    ],
    "stats": {
      "Rarity": 2,
      "Type": "Sphere",
      "Rank": 4,
      "Gold Coin": 4240,
      "Weight": "0.1",
      "MaxStackCount": 9999,
      "Code": "PalSphere_Tera",
      "IconName": "PalSphere_Tera",
      "TypeA": "SpecialWeapon",
      "TypeB": "SPWeaponCaptureBall",
      "SortID": 4,
      "ItemStaticClass": "CommonWeapon",
      "ItemActorClass": "PalSphereTera",
      "ItemStaticMeshName": "PalSphereTera",
      "VisualBlueprintClassName": "BP_Item_PalSphereTera",
      "SneakAttackRate": 100
    }
  },
  {
    ID: 5,
    name: "Ultra Sphere",
    rarity: "Epic",
    capture_power: 32,
    technology: 35,
    description:
      "An item that captures Pals when thrown.\r\nNot many Pals can escape its highly efficient design.",
    image: require("../assets/images/items/ultra-sphere.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_PalSphere_Master.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 5,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 5,
        image: require("../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 2,
        image: require("../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Cement",
        quantity: 3,
        image: require("../assets/images/items/cement.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
      },
    ],
    "stats": {
      "Rarity": 3,
      "Type": "Sphere",
      "Rank": 5,
      "Gold Coin": 9880,
      "Weight": "0.1",
      "MaxStackCount": 9999,
      "Code": "PalSphere_Master",
      "IconName": "PalSphere_Master",
      "TypeA": "SpecialWeapon",
      "TypeB": "SPWeaponCaptureBall",
      "SortID": 5,
      "ItemStaticClass": "CommonWeapon",
      "ItemActorClass": "PalSphere_Master",
      "ItemStaticMeshName": "PalSphere_Master",
      "VisualBlueprintClassName": "BP_Item_PalSphere_Master",
      "SneakAttackRate": 100
    }
  },
  {
    ID: 6,
    name: "Legendary Sphere",
    rarity: "Legendary",
    capture_power: 37,
    technology: 44,
    description:
      "An item that captures Pals when thrown.\r\nVery few Pals can escape its perfected design.",
    image: require("../assets/images/items/legendary-sphere.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_PalSphere_Legend.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 10,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 5,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 3,
        image: require("../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Cement",
        quantity: 5,
        image: require("../assets/images/items/cement.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
      },
    ],
    "stats": {
      "Rarity": 4,
      "Type": "Sphere",
      "Rank": 6,
      "Gold Coin": 45200,
      "Weight": "0.1",
      "MaxStackCount": 9999,
      "Code": "PalSphere_Legend",
      "IconName": "PalSphere_Legend",
      "TypeA": "SpecialWeapon",
      "TypeB": "SPWeaponCaptureBall",
      "SortID": 6,
      "ItemStaticClass": "CommonWeapon",
      "ItemActorClass": "PalSphere_Legend",
      "ItemStaticMeshName": "PalSphere_Legend",
      "VisualBlueprintClassName": "BP_Item_PalSphere_Legend",
      "SneakAttackRate": 100
    }
  },
  {
    ID: 7,
    name: "Ultimate Sphere",
    rarity: "Legendary",
    capture_power: 43,
    technology: 51,
    description:
      "An item that captures Pals when thrown.\r\nAlmost no Pals can escape its flawless design.",
    image: require("../assets/images/items/ultimate-sphere.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_PalSphere_Ultimate.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 20,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 10,
        image: require("../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 5,
        image: require("../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Plasteel",
        quantity: 1,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
    ],
    "stats": {
      "Rarity": 4,
      "Type": "Sphere",
      "Rank": 6,
      "Gold Coin": 45200,
      "Weight": "0.1",
      "MaxStackCount": 9999,
      "Code": "PalSphere_Ultimate",
      "IconName": "PalSphere_Ultimate",
      "TypeA": "SpecialWeapon",
      "TypeB": "SPWeaponCaptureBall",
      "SortID": 7,
      "ItemStaticClass": "CommonWeapon",
      "ItemActorClass": "PalSphere_Ultimate",
      "ItemStaticMeshName": "PalSphere_Ultimate",
      "VisualBlueprintClassName": "BP_Item_PalSphere_Ultimate",
      "SneakAttackRate": 100
    }
  },
  {
    ID: 8,
    name: "Exotic Sphere",
    rarity: "Legendary",
    capture_power: 48,
    technology: 56,
    description:
      "An item that captures Pals when thrown.\r\nBoasting incredible performance, it can capture Pals that fall outside regular standards.",
    image: require("../assets/images/items/exotic-sphere.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_PalSphere_Exotic.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 30,
        image: require("../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Plasteel",
        quantity: 2,
        image: require("../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 7,
        image: require("../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Hexolite",
        quantity: 1,
        image: require("../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
    ],
    "stats": {
      "Rarity": 4,
      "Type": "Sphere",
      "Rank": 7,
      "Gold Coin": 45200,
      "Weight": "0.1",
      "MaxStackCount": 9999,
      "Code": "PalSphere_Exotic",
      "IconName": "PalSphere_Exotic",
      "TypeA": "SpecialWeapon",
      "TypeB": "SPWeaponCaptureBall",
      "SortID": 8,
      "ItemStaticClass": "CommonWeapon",
      "ItemActorClass": "PalSphere_Exotic",
      "ItemStaticMeshName": "PalSphere_Exotic",
      "VisualBlueprintClassName": "BP_Item_PalSphere_Exotic",
      "SneakAttackRate": 100
    }
  },
];
