export const Productions = [
  {
    id: 1,
    name: "Primitive Workbench",
    rarity: "Common",
    description:
      "A Primitive Workbench for producing simple items.\r\nRequires a Pal that can work with their hands.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WorkBench.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/primitive-workbench.png",
    recipe: [
      {
        name: "Wood",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x500",
      Code: "WorkBench",
      Defense: 2,
      Handiwork: 1,
      Hp: 1000,
      DeteriorationDamage: "0.08",
      ExtinguishBurnWorkAmount: 1000,
      TypeA: "Product",
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: 1,
      TypesA:
        "Weapon Armor Consume Ammo Material SpecialWeapon Glider Essential",
      TypesB:
        "ArmorBody ArmorHead SPWeaponCaptureBall ConsumeBullet WeaponMelee WeaponBow ConsumeOther MaterialProccessing Shield Glider Essential_UnlockPlayerFuture WeaponHandgun WeaponThrowObject WeaponCrossbow Essential_AdditionalInventory",
      "Rank Max": 1,
    },
    SAN: "-0.11",
    technology: 1,
  },
  {
    id: 2,
    name: "Repair Bench",
    rarity: "Common",
    description:
      "Workbench for repairing broken tools.\r\nMaterials are needed to make repairs.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_RepairBench.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/repair-bench.png",
    recipe: [
      {
        name: "Wood",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x3000",
      Code: "RepairBench",
      Defense: 2,
      Handiwork: 1,
      "Worker Max": 1,
      Hp: 2000,
      DeteriorationDamage: "0.08",
      ExtinguishBurnWorkAmount: 1000,
      TypeA: "Product",
      RedialIndex: 1,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "2.21",
    },
    SAN: "-0.11",
    technology: 2,
  },
  {
    id: 3,
    name: "Pal Gear Workbench",
    rarity: "Common",
    description:
      "A Primitive Workbench for producing Pal tools.\r\nMake a saddle to ride Pals, or make a gun for Pals to use.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WorkBench_SkillUnlock.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/pal-gear-workbench.png",
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
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
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
      Type: "Production",
      Workload: "Handiwork x5000",
      Code: "WorkBench_SkillUnlock",
      Defense: 2,
      Handiwork: 1,
      Hp: 1000,
      DeteriorationDamage: "0.02",
      ExtinguishBurnWorkAmount: 1000,
      TypeA: "Product",
      RedialIndex: 2,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "2.74",
      TypesA: "Essential",
      TypesB: "Essential_PalGear",
      "Rank Max": 4,
    },
    SAN: "-0.11",
    technology: 6,
  },
  {
    id: 4,
    name: "Stone Pit",
    rarity: "Common",
    description:
      "A facility for producing Stone.\r\nMining Stone is hard work that requires much physical endurance.\r\nLeave it to Pals skilled at mining.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_StonePit.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/stone-pit.png",
    recipe: [
      {
        name: "Stone",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
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
        name: "Paldium Fragment",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x10000",
      Code: "StonePit",
      Defense: 4,
      Mining: 1,
      Hp: 10000,
      TypeA: "Product",
      RedialIndex: 3,
      TypeB: "Prod_Resource",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "3.64",
      "Stone x1": "Workload x800",
    },
    SAN: "-0.15",
    technology: 7,
  },
  {
    id: 5,
    name: "Logging Site",
    rarity: "Common",
    description:
      "A facility for producing Wood.\r\nCutting wood is hard work that requires much physical endurance.\r\nLeave it to Pals skilled in logging.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_StationDeforest2.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/logging-site.png",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
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
        name: "Paldium Fragment",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x10000",
      Code: "StationDeforest2",
      Defense: 4,
      Lumbering: 1,
      "Worker Max": 3,
      Hp: 10000,
      DeteriorationDamage: "0.2",
      ExtinguishBurnWorkAmount: 1000,
      TypeA: "Product",
      RedialIndex: 4,
      TypeB: "Prod_Resource",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "3.64",
      "Wood x1": "Workload x800",
    },
    SAN: "-0.15",
    technology: 7,
  },
  {
    id: 6,
    name: "Crusher",
    rarity: "Common",
    description:
      "Facility for breaking down Stone and Wood to exchange them for other materials.\r\nRequires Pal with the Watering trait to spin the water turbine.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Crusher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/crusher.png",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
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
        name: "Paldium Fragment",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x8000",
      Code: "Crusher",
      Defense: 3,
      Watering: 1,
      Hp: 4000,
      DeteriorationDamage: "0.12",
      TypeA: "Product",
      RedialIndex: 5,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "3.32",
      TypesA: "Material",
      TypesB: "MaterialOre MaterialWood MaterialMonster",
      "Rank Max": 2,
    },
    SAN: "-0.11",
    technology: 8,
  },
  {
    id: 7,
    name: "Primitive Furnace",
    rarity: "Common",
    description:
      "Allows refinement of Ingot.\r\nThe quality leaves much to desire, and processing is slow.\r\nRequires a Fire Pal to light a flame.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BlastFurnace.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/primitive-furnace.png",
    recipe: [
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
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
      },
      {
        name: "Flame Organ",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x5000",
      Code: "BlastFurnace",
      Defense: 2,
      Kindling: 1,
      Hp: 2000,
      DeteriorationDamage: "0.08",
      TypeA: "Product",
      RedialIndex: 6,
      TypeB: "Prod_Furnace",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "2.74",
      TypesA: "Material",
      TypesB: "MaterialIngot",
      "Rank Max": 1,
    },
    SAN: "-0.15",
    technology: 10,
  },
  {
    id: 8,
    name: "High Quality Workbench",
    rarity: "Common",
    description:
      "An Assembly Line for producing items and gear.\r\nA small workspace limits production speeds.\r\nRequires Pals that can work with their hands.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Factory_Hard_01.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/high-quality-workbench.png",
    recipe: [
      {
        name: "Ingot",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
      {
        name: "Nail",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/nail.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x3000",
      Code: "Factory_Hard_01",
      Defense: 2,
      Handiwork: 1,
      Hp: 2000,
      DeteriorationDamage: "0.08",
      ExtinguishBurnWorkAmount: 1000,
      TypeA: "Product",
      RedialIndex: 7,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "2.21",
      TypesA: "Weapon Armor Consume Material Essential Ammo Glider Accessory",
      TypesB:
        "ArmorBody ArmorHead ConsumeBandage WeaponMelee ConsumeOther MaterialProccessing Shield Essential_UnlockPlayerFuture WeaponCrossbow WeaponBow Glider ConsumeBullet WeaponGrapplingGun Accessory ReturnToBaseCamp Essential_AdditionalInventory",
      "Rank Max": 2,
      "Speed Rate": "1.5",
    },
    SAN: "-0.11",
    technology: 11,
  },
  {
    id: 9,
    name: "Medieval Medicine Workbench",
    rarity: "Common",
    description:
      "A facility for making Pal medicine.\r\nIt can only produce simple medicines.\r\nLeave its operation to a Pal that can make medicine.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicineFacility_01.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/medieval-medicine-workbench.png",
    recipe: [
      {
        name: "Wood",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
      {
        name: "Nail",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/nail.png",
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
      Type: "Production",
      Workload: "Handiwork x3000",
      Code: "MedicineFacility_01",
      Defense: 2,
      "Medicine Production": 1,
      Hp: 2000,
      DeteriorationDamage: "0.08",
      ExtinguishBurnWorkAmount: 1000,
      TypeA: "Product",
      RedialIndex: 8,
      TypeB: "Prod_Medicine",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "2.21",
      TypesA: "Food Consume",
      TypesB: "Medicine Drug ConsumeGainStatusPoints",
      "Rank Max": 3,
    },
    SAN: "-0.11",
    technology: 12,
  },
  {
    id: 10,
    name: "Mill",
    rarity: "Common",
    description:
      "Facility for milling Wheat to produce Flour.\r\nRequires Pal with the Watering trait to spin the water turbine.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_FlourMill.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/mill.png",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
      {
        name: "Stone",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x8000",
      Code: "FlourMill",
      Defense: 3,
      Watering: 1,
      Hp: 4000,
      DeteriorationDamage: "0.12",
      TypeA: "Product",
      RedialIndex: 9,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "3.32",
      TypesA: "Food",
      TypesB: "FoodVegetable",
      "Rank Max": 2,
    },
    SAN: "-0.11",
    technology: 15,
  },
  {
    id: 11,
    name: "Weapon Workbench",
    rarity: "Common",
    description:
      "A Primitive Workbench for producing weapons and ammunition.\r\nA small workspace prevents the production of high quality weapons.\r\nRequires Pals that can work with their hands.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WeaponFactory_Dirty_01.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/weapon-workbench.png",
    recipe: [
      {
        name: "Ingot",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
      {
        name: "Nail",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/nail.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x5000",
      Code: "WeaponFactory_Dirty_01",
      Defense: 2,
      Handiwork: 1,
      Hp: 2000,
      DeteriorationDamage: "0.08",
      ExtinguishBurnWorkAmount: 1000,
      TypeA: "Product",
      RedialIndex: 10,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "2.74",
      TypesA: "Weapon Consume Ammo",
      TypesB:
        "WeaponShotgun WeaponHandgun WeaponCrossbow WeaponBow WeaponMelee ConsumeBullet WeaponAssaultRifle WeaponBow WeaponRocketLauncher WeaponThrowObject WeaponGrapplingGun",
      "Rank Max": 2,
      "Speed Rate": "1.5",
    },
    SAN: "-0.15",
    technology: 20,
  },
  {
    id: 12,
    name: "Ore Mining Site",
    rarity: "Common",
    description:
      "Facility for producing Ore.\r\nMining Ore is hard work that requires physical endurance.\r\nLeave it to Pals skilled at mining.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CopperPit.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/ore-mining-site.png",
    recipe: [
      {
        name: "Stone",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
      },
      {
        name: "Ingot",
        quantity: 25,
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
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x10000",
      Code: "CopperPit",
      Defense: 4,
      Mining: 1,
      Hp: 10000,
      DeteriorationDamage: "0.2",
      TypeA: "Product",
      RedialIndex: 11,
      TypeB: "Prod_Resource",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "3.64",
      "Ore x1": "Workload x8000",
    },
    SAN: "-0.15",
    technology: 24,
  },
  {
    id: 13,
    name: "Production Assembly Line",
    rarity: "Common",
    description:
      "An Assembly Line for producing items and gear.\r\nBy splitting Pals into groups, production speeds have somewhat increased.\r\nRequires Pals that can work with their hands.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Factory_Hard_02.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/production-assembly-line.png",
    recipe: [
      {
        name: "Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
      {
        name: "Nail",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/nail.png",
      },
      {
        name: "Cement",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cement.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x10000",
      "Energy Type": "Electric",
      Code: "Factory_Hard_02",
      Defense: 3,
      Handiwork: 1,
      Hp: 4000,
      DeteriorationDamage: "0.08",
      TypeA: "Product",
      RedialIndex: 12,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 200,
      BuildExpRate: "3.64",
      TypesA: "Weapon Armor Consume Material Essential Ammo Glider Accessory",
      TypesB:
        "ArmorBody ArmorHead ConsumeBandage WeaponMelee ConsumeOther MaterialProccessing Shield Essential_UnlockPlayerFuture WeaponCrossbow WeaponBow Glider ConsumeBullet WeaponGrapplingGun Accessory ReturnToBaseCamp Essential_AdditionalInventory",
      "Rank Max": 3,
      "Speed Rate": 2,
    },
    SAN: "-0.11",
    technology: 28,
  },
  {
    id: 14,
    name: "Weapon Assembly Line",
    rarity: "Common",
    description:
      "An Assembly Line for producing weapons and ammunition.\r\nBy splitting Pals into groups, production speeds have somewhat increased.\r\nRequires Pals that can work with their hands.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WeaponFactory_Dirty_02.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/weapon-assembly-line.png",
    recipe: [
      {
        name: "Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ingot.png",
      },
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/wood.png",
      },
      {
        name: "Nail",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/nail.png",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/high-quality-pal-oil.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x30000",
      "Energy Type": "Electric",
      Code: "WeaponFactory_Dirty_02",
      Defense: 3,
      Handiwork: 1,
      Hp: 4000,
      DeteriorationDamage: "0.08",
      TypeA: "Product",
      RedialIndex: 13,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 200,
      BuildExpRate: "5.67",
      TypesA: "Weapon Consume Ammo",
      TypesB:
        "WeaponAssaultRifle WeaponSniperRifle WeaponShotgun WeaponHandgun WeaponCrossbow WeaponBow WeaponMelee ConsumeBullet WeaponRocketLauncher WeaponThrowObject WeaponGrapplingGun",
      "Rank Max": 3,
      "Speed Rate": 2,
    },
    SAN: "-0.15",
    technology: 32,
  },
  {
    id: 15,
    name: "Improved Furnace",
    rarity: "Common",
    description:
      "Allows refinement of Refined Ingot.\r\nThe quality has improved, but the processing speed is still unsatisfactory.\r\nRequires a Fire Pal to light a flame.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BlastFurnace_2.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/improved-furnace.png",
    recipe: [
      {
        name: "Stone",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
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
        name: "Flame Organ",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x30000",
      Code: "BlastFurnace2",
      Defense: 3,
      Kindling: 1,
      Hp: 4000,
      DeteriorationDamage: "0.08",
      TypeA: "Product",
      RedialIndex: 14,
      TypeB: "Prod_Furnace",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "5.67",
      TypesA: "Material",
      TypesB: "MaterialIngot",
      "Rank Max": 2,
      "Speed Rate": "1.5",
    },
    SAN: "-0.15",
    technology: 34,
  },
  {
    id: 16,
    name: "Ore Mining Site II",
    rarity: "Common",
    description:
      "Facility for producing large quantities of Ore.\r\nMining Ore is hard work that requires physical endurance.\r\nLeave it to Pals skilled at mining.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CopperPit_2.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/ore-mining-site-ii.png",
    recipe: [
      {
        name: "Stone",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
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
        name: "Paldium Fragment",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/paldium-fragment.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x10000",
      Code: "CopperPit_2",
      Defense: 4,
      Mining: 1,
      Hp: 10000,
      DeteriorationDamage: "0.2",
      TypeA: "Product",
      RedialIndex: 15,
      TypeB: "Prod_Resource",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "3.64",
      "Ore x1": "Workload x1600",
    },
    SAN: "-0.15",
    technology: 38,
  },
  {
    id: 17,
    name: "Coal Mine",
    rarity: "Common",
    description:
      "Facility for producing Coal.\r\nDigging Coal is grueling physical work.\r\nLeave it to a Pal that is good at mining.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_CoalPit.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/coal-mine.png",
    recipe: [
      {
        name: "Stone",
        quantity: 70,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
      },
      {
        name: "Coal",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Coal.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/coal.png",
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
      Type: "Production",
      Workload: "Handiwork x30000",
      Code: "CoalPit",
      Defense: 4,
      Mining: 1,
      Hp: 10000,
      DeteriorationDamage: "0.2",
      TypeA: "Product",
      RedialIndex: 16,
      TypeB: "Prod_Resource",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "5.67",
      "Coal x1": "Workload x8000",
    },
    SAN: "-0.15",
    technology: 41,
  },
  {
    id: 18,
    name: "Production Assembly Line II",
    rarity: "Common",
    description:
      "An Assembly Line for producing items and gear.\r\nThrough clever management, production speeds have greatly increased.\r\nRequires Pals that can work with their hands.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Factory_Hard_03.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/production-assembly-line-ii.png",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Circuit Board",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/circuit-board.png",
      },
      {
        name: "Nail",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/nail.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x50000",
      "Energy Type": "Electric",
      Code: "Factory_Hard_03",
      Defense: 4,
      Handiwork: 1,
      Hp: 6000,
      DeteriorationDamage: "0.06",
      TypeA: "Product",
      RedialIndex: 17,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 400,
      BuildExpRate: "6.94",
      TypesA: "Weapon Armor Consume Material Essential Ammo Glider Accessory",
      TypesB:
        "ArmorBody ArmorHead ConsumeBandage WeaponMelee ConsumeOther MaterialProccessing Essential_UnlockPlayerFuture WeaponBow WeaponCrossbow Shield Glider ConsumeBullet WeaponGrapplingGun Accessory ReturnToBaseCamp WeaponMetalDetector Essential_AdditionalInventory",
      "Rank Max": 4,
      "Speed Rate": 4,
    },
    SAN: "-0.2",
    technology: 42,
  },
  {
    id: 19,
    name: "Electric Medicine Workbench",
    rarity: "Common",
    description:
      "A facility for making Pal medicine.\r\nIt requires electricity, but can produce high quality medicine.\r\nLeave its operation to a Pal that can make medicine.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicineFacility_02.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/electric-medicine-workbench.png",
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
        name: "Circuit Board",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/circuit-board.png",
      },
      {
        name: "Carbon Fiber",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/carbon-fiber.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x50000",
      "Energy Type": "Electric",
      Code: "MedicineFacility_02",
      Defense: 3,
      "Medicine Production": 1,
      Hp: 10000,
      DeteriorationDamage: "0.1",
      ExtinguishBurnWorkAmount: 1000,
      TypeA: "Product",
      RedialIndex: 18,
      TypeB: "Prod_Medicine",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 50,
      BuildExpRate: "6.94",
      TypesA: "Food Consume",
      TypesB: "Medicine Drug ConsumeGainStatusPoints",
      "Rank Max": 4,
      "Speed Rate": 2,
    },
    SAN: "-0.11",
    technology: 43,
  },
  {
    id: 20,
    name: "Electric Furnace",
    rarity: "Common",
    description:
      "Allows refinement of Pal Metal Ingot.\r\nIt requires electricity to use, but is quicker to process.\r\nRequires a Fire Pal to light a flame.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BlastFurnace3.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/electric-furnace.png",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Circuit Board",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/circuit-board.png",
      },
      {
        name: "Polymer",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/polymer.png",
      },
      {
        name: "Carbon Fiber",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/carbon-fiber.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x100000",
      "Energy Type": "Electric",
      Code: "BlastFurnace3",
      Defense: 4,
      Kindling: 1,
      Hp: 8000,
      DeteriorationDamage: "0.08",
      TypeA: "Product",
      RedialIndex: 19,
      TypeB: "Prod_Furnace",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 500,
      BuildExpRate: "9.09",
      TypesA: "Material",
      TypesB: "MaterialIngot",
      "Rank Max": 3,
      "Speed Rate": 3,
    },
    SAN: "-0.15",
    technology: 44,
  },
  {
    id: 21,
    name: "Sulfur Mine",
    rarity: "Common",
    description:
      "Facility for producing Sulfur.\r\nDigging Sulfur is grueling physical work.\r\nLeave it to a Pal that is good at mining.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_SulfurPit.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/sulfur-mine.png",
    recipe: [
      {
        name: "Stone",
        quantity: 70,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
      },
      {
        name: "Sulfur",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Sulfur.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/sulfur.png",
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
      Type: "Production",
      Workload: "Handiwork x30000",
      Code: "SulfurPit",
      Defense: 4,
      Mining: 1,
      Hp: 10000,
      DeteriorationDamage: "0.2",
      TypeA: "Product",
      RedialIndex: 20,
      TypeB: "Prod_Resource",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "5.67",
      "Sulfur x1": "Workload x8000",
    },
    SAN: "-0.15",
    technology: 45,
  },
  {
    id: 22,
    name: "Weapon Assembly Line II",
    rarity: "Common",
    description:
      "An Assembly Line for producing weapons and ammunition.\r\nThrough clever management, production speeds have greatly increased.\r\nRequires Pals that can work with their hands.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_WeaponFactory_Dirty_03.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/weapon-assembly-line-ii.png",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/refined-ingot.png",
      },
      {
        name: "Circuit Board",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/circuit-board.png",
      },
      {
        name: "Nail",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/nail.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x120000",
      "Energy Type": "Electric",
      Code: "WeaponFactory_Dirty_03",
      Defense: 4,
      Handiwork: 1,
      Hp: 8000,
      DeteriorationDamage: "0.08",
      TypeA: "Product",
      RedialIndex: 21,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 400,
      BuildExpRate: "9.75",
      TypesA: "Weapon Consume Ammo",
      TypesB:
        "WeaponAssaultRifle WeaponSniperRifle WeaponShotgun WeaponRocketLauncher WeaponHandgun WeaponCrossbow WeaponBow WeaponMelee ConsumeBullet WeaponThrowObject WeaponGrapplingGun WeaponFlameThrower WeaponGatlingGun",
      "Rank Max": 4,
      "Speed Rate": 4,
    },
    SAN: "-0.2",
    technology: 47,
  },
  {
    id: 23,
    name: "Gold Coin Assembly Line",
    rarity: "Common",
    description:
      "An Assemby Line that manufactures Money. \r\nThe work puts a strain on the mind, causing a decrease in Pal's SAN value.\r\nRequires Pals that can work with their hands.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_Factory_Money.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/gold-coin-assembly-line.png",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Nail",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/nail.png",
      },
      {
        name: "Circuit Board",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/circuit-board.png",
      },
      {
        name: "Cement",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cement.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/cement.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x10000",
      "Energy Type": "Electric",
      Code: "Factory_Money",
      Defense: 3,
      Handiwork: 1,
      Hp: 4000,
      DeteriorationDamage: "0.08",
      TypeA: "Product",
      RedialIndex: 22,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 200,
      BuildExpRate: "3.64",
      TypesA: "Material",
      TypesB: "Money",
      "Rank Max": 3,
      "Speed Rate": 2,
    },
    SAN: "-0.5",
    technology: 48,
  },
  {
    id: 24,
    name: "Crude Oil Extractor",
    rarity: "Common",
    description:
      "Equipment required to extract Crude Oil from oil fields.\r\nRequires a power supply to operate.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_OilPump.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/crude-oil-extractor.png",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 250,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
      },
      {
        name: "Circuit Board",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/circuit-board.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x500000",
      "Energy Type": "Electric",
      Code: "OilPump",
      Defense: 4,
      Hp: 100000,
      DeteriorationDamage: 1,
      TypeA: "Product",
      RedialIndex: 23,
      TypeB: "Prod_Resource",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 6000,
      BuildExpRate: "16.79",
      "Crude Oil x1": "Workload x8000",
    },
    technology: 50,
  },
  {
    id: 25,
    name: "Pure Quartz Mine",
    rarity: "Common",
    description:
      "A facility for producing Pure Quartz. \r\nMining Pure Quartz is hard work that requires physical endurance.\r\nLeave it to Pals skilled at mining.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_QuartzPit.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/pure-quartz-mine.png",
    recipe: [
      {
        name: "Stone",
        quantity: 70,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/stone.png",
      },
      {
        name: "Pure Quartz",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Quartz.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pure-quartz.png",
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
      Type: "Production",
      Workload: "Handiwork x50000",
      Code: "QuartzPit",
      Defense: 4,
      Mining: 1,
      Hp: 10000,
      DeteriorationDamage: "0.2",
      TypeA: "Product",
      RedialIndex: 24,
      TypeB: "Prod_Resource",
      Rank: 1,
      AssetValue: 1,
      BuildExpRate: "6.94",
      "Pure Quartz x1": "Workload x10000",
    },
    SAN: "-0.15",
    technology: 50,
  },
  {
    id: 26,
    name: "Refrigerated Crusher",
    rarity: "Common",
    description:
      "Facility that crushes Ore and\r\nconverts it into other materials.\r\nRequires a power supply and a Pal with Cooling suitability, but it's very efficient.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_IceCrusher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/refrigerated-crusher.png",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/pal-metal-ingot.png",
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
        name: "Ice Organ",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ice-organ.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x100000",
      "Energy Type": "Electric",
      Code: "IceCrusher",
      Defense: 3,
      Cooling: 1,
      Hp: 4000,
      DeteriorationDamage: "0.12",
      TypeA: "Product",
      RedialIndex: 25,
      TypeB: "Prod_Craft",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 300,
      BuildExpRate: "9.09",
      TypesA: "Material",
      TypesB: "MaterialOre MaterialMonster MaterialWood",
      "Rank Max": 2,
      "Speed Rate": 20,
    },
    SAN: "-0.11",
    technology: 52,
  },
  {
    id: 27,
    name: "Gigantic Furnace",
    rarity: "Common",
    description:
      "Allows refinement of Hexolite.\r\nBy growing in size, multiple Pals can collaborate to perform smelting.\r\nRequires a Fire Pal to light a flame.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_BlastFurnace4.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/gigantic-furnace.png",
    recipe: [
      {
        name: "Plasteel",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Polymer",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/polymer.png",
      },
      {
        name: "Flame Organ",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/flame-organ.png",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/ancient-civilization-parts.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x600000",
      "Energy Type": "Electric",
      Code: "BlastFurnace4",
      Defense: 5,
      Kindling: 1,
      Hp: 10000,
      DeteriorationDamage: "0.1",
      TypeA: "Product",
      RedialIndex: 26,
      TypeB: "Prod_Furnace",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 1500,
      BuildExpRate: "17.98",
      TypesA: "Material",
      TypesB: "MaterialIngot",
      "Rank Max": 4,
      "Speed Rate": "4.5",
    },
    SAN: "-0.08",
    technology: 56,
  },
  {
    id: 28,
    name: "Advanced Medicine Workbench",
    rarity: "Common",
    description:
      "A facility for making medicine to cure Pals' illnesses. \r\nWith advanced technology, it can also create unknown medicines. \r\nAssign the task to a Pal capable of pharmacy work.",
    image_url:
      "https://cdn.paldb.cc/image/Pal/Texture/BuildObject/PNG/T_icon_buildObject_MedicineFacility_03.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/productions/advanced-medicine-workbench.png",
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
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/plasteel.png",
      },
      {
        name: "Circuit Board",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/PalDex/master/assets/images/items/circuit-board.png",
      },
    ],
    stats: {
      Type: "Production",
      Workload: "Handiwork x500000",
      "Energy Type": "Electric",
      Code: "MedicineFacility_03",
      Defense: 4,
      "Medicine Production": 1,
      "Worker Max": 1,
      Hp: 15000,
      DeteriorationDamage: "0.15",
      TypeA: "Product",
      RedialIndex: 27,
      TypeB: "Prod_Medicine",
      Rank: 1,
      AssetValue: 1,
      ConsumeEnergySpeed: 1000,
      BuildExpRate: "16.79",
      TypesA: "Food Consume",
      TypesB: "Medicine Drug ConsumeGainStatusPoints ConsumePalRevive",
      "Rank Max": 5,
      "Speed Rate": 3,
    },
    SAN: "-0.15",
    technology: 59,
  },
];
