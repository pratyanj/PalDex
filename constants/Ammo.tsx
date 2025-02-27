export const Ammo = [
  {
    id: 1,
    name: "Arrow",
    rarity: "Common",
    description: "An Arrow for use with a bow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_Arrow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_Arrow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 1,
      "Gold Coin": 5,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "Arrow",
      IconName: "Arrow",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 10,
      VisualBlueprintClassName: "BP_Item_Arrow",
      SneakAttackRate: 1,
    },
    technology: 3,
  },
  {
    id: 2,
    name: "Poison Arrow",
    rarity: "Common",
    description:
      "Arrows for shooting with Poison Bow and Poison Arrow Crossbow.\r\nIt poisons any target it hits.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_Arrow_Poison.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_Arrow_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Venom Gland",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Venom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Venom.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 1,
      "Gold Coin": 15,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "Arrow_Poison",
      IconName: "Arrow_Poison",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 11,
      VisualBlueprintClassName: "BP_Item_Arrow",
      SneakAttackRate: 1,
    },
    technology: 8,
  },
  {
    id: 3,
    name: "Fire Arrow",
    rarity: "Common",
    description:
      "Arrows for shooting with Fire Bow and Fire Arrow Crossbow.\r\nDeals Fire damage.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_Arrow_Fire.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_Arrow_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Flame Organ",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 1,
      "Gold Coin": 15,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "Arrow_Fire",
      IconName: "Arrow_Fire",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 12,
      VisualBlueprintClassName: "BP_Item_Arrow",
      SneakAttackRate: 1,
    },
    technology: 5,
  },
  {
    id: 4,
    name: "Rocket Ammo",
    rarity: "Common",
    description: "Ammo for the Rocket Launcher and other similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_ExplosiveBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_ExplosiveBullet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Gunpowder",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Gunpowder2.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 4,
      "Gold Coin": 5000,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "ExplosiveBullet",
      IconName: "ExplosiveBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 27,
      VisualBlueprintClassName: "BP_Item_ExplosiveBullet",
      SneakAttackRate: 1,
    },
    technology: 49,
  },
  {
    id: 5,
    name: "Energy Cartridge",
    rarity: "Common",
    description: "Ammo used by the Laser Rifle and similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_LaserBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_LaserBullet.webp",
    recipe: [
      {
        name: "Electric Organ",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectricOrgan.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 4,
      "Gold Coin": 950,
      Weight: "0.01",
      MaxStackCount: 9999,
      Code: "LaserBullet",
      IconName: "LaserBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 34,
      SneakAttackRate: 1,
    },
    technology: 51,
  },
  {
    id: 6,
    name: "Decal Ink",
    rarity: "Common",
    description:
      "Ammo for Decal Guns.\r\nUses ink to paint a picture of a Pal.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_InkBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_InkBullet.webp",
    recipe: [
      {
        name: "Pal Fluids",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalFluid.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 2,
      "Gold Coin": 10,
      Weight: "0.05",
      MaxStackCount: 9999,
      Code: "InkBullet",
      IconName: "InkBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 28,
      SneakAttackRate: 1,
    },
    technology: 44,
  },
  {
    id: 7,
    name: "Handgun Ammo",
    rarity: "Common",
    description: "Ammo for Handgun and other similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_HandgunBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_HandgunBullet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Gunpowder",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Gunpowder2.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 2,
      "Gold Coin": 120,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "HandgunBullet",
      IconName: "HandgunBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 21,
      VisualBlueprintClassName: "BP_Item_RifleBullet",
      SneakAttackRate: 1,
    },
    technology: 28,
  },
  {
    id: 8,
    name: "Rifle Ammo",
    rarity: "Common",
    description: "Ammo for Single-Shot Rifle and other similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_RifleBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_RifleBullet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Gunpowder",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Gunpowder2.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 2,
      "Gold Coin": 220,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "RifleBullet",
      IconName: "RifleBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 23,
      VisualBlueprintClassName: "BP_Item_RifleBullet",
      SneakAttackRate: 1,
    },
    technology: 36,
  },
  {
    id: 9,
    name: "Shotgun Shell",
    rarity: "Common",
    description: "Ammo for shotguns and other similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_ShotgunBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_ShotgunBullet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Gunpowder",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Gunpowder2.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 2,
      "Gold Coin": 220,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "ShotgunBullet",
      IconName: "ShotgunBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 24,
      VisualBlueprintClassName: "BP_Item_RifleBullet",
      SneakAttackRate: 1,
    },
    technology: 39,
  },
  {
    id: 10,
    name: "Coarse Ammo",
    rarity: "Common",
    description:
      "Ammo for Musket, Makeshift Handgun, and other similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_RoughBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_RoughBullet.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Gunpowder",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Gunpowder2.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 2,
      "Gold Coin": 120,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "RoughBullet",
      IconName: "RoughBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 20,
      VisualBlueprintClassName: "BP_Item_RifleBullet",
      SneakAttackRate: 1,
    },
    technology: 21,
  },
  {
    id: 11,
    name: "Assault Rifle Ammo",
    rarity: "Common",
    description: "Ammo for Assault Rifle and other similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_AssaultRifleBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_AssaultRifleBullet.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Gunpowder",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Gunpowder2.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 3,
      "Gold Coin": 150,
      Weight: "0.01",
      MaxStackCount: 9999,
      Code: "AssaultRifleBullet",
      IconName: "AssaultRifleBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 26,
      VisualBlueprintClassName: "BP_Item_RifleBullet",
      SneakAttackRate: 1,
    },
    technology: 45,
  },
  {
    id: 12,
    name: "Flamethrower Fuel",
    rarity: "Common",
    description:
      "Flamethrower fuel.\r\nAmmo for the Flamethrower and similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_FlamethrowerBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_FlamethrowerBullet.webp",
    recipe: [
      {
        name: "Crude Oil",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CrudeOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CrudeOil.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 4,
      "Gold Coin": 400,
      Weight: "0.01",
      MaxStackCount: 9999,
      Code: "FlamethrowerBullet",
      IconName: "FlamethrowerBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 29,
      SneakAttackRate: 1,
    },
    technology: 52,
  },
  {
    id: 13,
    name: "Missile Ammo",
    rarity: "Common",
    description: "Ammo for the Guided Missile Launcher and similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_MissileBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_MissileBullet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Crude Oil",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CrudeOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CrudeOil.webp",
      },
      {
        name: "Circuit Board",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalFluid.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 4,
      "Gold Coin": 15000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "MissileBullet",
      IconName: "MissileBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 30,
      SneakAttackRate: 1,
    },
    technology: 55,
  },
  {
    id: 14,
    name: "Grenade Ammo",
    rarity: "Common",
    description: "Ammo for the Grenade Launcher and similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_GrenadeBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_GrenadeBullet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Gunpowder",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Gunpowder2.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 4,
      "Gold Coin": 1500,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "GrenadeBullet",
      IconName: "GrenadeBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 31,
      SneakAttackRate: 1,
    },
    technology: 53,
  },
  {
    id: 15,
    name: "Gatling Gun Ammo",
    rarity: "Common",
    description: "Ammo for the Gatling Gun and similar weapons.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_GatlingBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_GatlingBullet.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Gunpowder",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Gunpowder2.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 4,
      "Gold Coin": 780,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "GatlingBullet",
      IconName: "GatlingBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 32,
      SneakAttackRate: 1,
    },
    technology: 54,
  },
  {
    id: 16,
    name: "Meteorite Ammo",
    rarity: "Common",
    description: "Ammo for the Meteor Launcher and any similar weapon.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_MeteorBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_MeteorBullet.webp",
    recipe: [
      {
        name: "Meteorite Fragment",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MeteorDrop.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MeteorDrop.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 3,
      "Gold Coin": 400,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "MeteorBullet",
      IconName: "MeteorBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 33,
      SneakAttackRate: 1,
    },
    technology: 38,
  },
  {
    id: 17,
    name: "Plasma Cartridge",
    rarity: "Common",
    description: "Ammo for the Plasma Cannon and any similar weapon.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_EnergyLauncherBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_EnergyLauncherBullet.webp",
    recipe: [
      {
        name: "Electric Organ",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectricOrgan.webp",
      },
      {
        name: "Hexolite",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 4,
      "Gold Coin": 400,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "EnergyLauncherBullet",
      IconName: "EnergyLauncherBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 35,
      SneakAttackRate: 1,
    },
    technology: 60,
  },
  {
    id: 18,
    name: "Laser Gatling Cartridge",
    rarity: "Common",
    description: "Ammo for the Laser Gatling Gun and any similar weapon.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_LaserGatlingBullet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_LaserGatlingBullet.webp",
    recipe: [
      {
        name: "Electric Organ",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectricOrgan.webp",
      },
      {
        name: "Plasteel",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 4,
      "Gold Coin": 120,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "LaserGatlingBullet",
      IconName: "LaserGatlingBullet",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 36,
      SneakAttackRate: 1,
    },
    technology: 58,
  },
  {
    id: 19,
    name: "Reinforced Arrow",
    rarity: "Common",
    description: "Enhanced arrows designed for use with the Compound Bow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_ReinforcedArrow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_ReinforcedArrow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Stone",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 1,
      "Gold Coin": 50,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "ReinforcedArrow",
      IconName: "ReinforcedArrow",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 13,
      SneakAttackRate: 1,
    },
    technology: 32,
  },
  {
    id: 20,
    name: "Advanced Arrow",
    rarity: "Common",
    description:
      "Arrows made of Hexolite material, designed for use with the Advanced Bow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Ammo_SFArrow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ammos/T_itemicon_Ammo_SFArrow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ammo",
      Rank: 1,
      "Gold Coin": 5,
      Weight: "0.025",
      MaxStackCount: 9999,
      Code: "SFArrow",
      IconName: "SFArrow",
      TypeA: "Ammo",
      TypeB: "ConsumeBullet",
      SortID: 14,
      SneakAttackRate: 1,
    },
    technology: 57,
  },
];
