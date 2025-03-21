export const weaponDataSet = [
  {
    id: 1,
    name: "Assault Rifle",
    rarity: "Common",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 320,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "AssaultRifle_Default1",
      IconName: "AssaultRifle_Default",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 540,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalRifle",
      VisualBlueprintClassName: "BP_Item_Weapon_AssaultRifle_001",
      MagazineSize: 20,
      SneakAttackRate: 1,
    },
    attack: 320,
    technology: 45,
    ammo: "Assault Rifle Ammo",
  },
  {
    id: 2,
    name: "Stone Axe",
    rarity: "Common",
    description:
      "An axe for cutting wood.\r\nMade from stone, it's not very sharp.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Axe_Tier_00.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Axe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 200,
      Attack: 20,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 150,
      Code: "Axe_Tier_00",
      IconName: "Axe_Default",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 110,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Axe_Tier_00",
      SneakAttackRate: 1,
    },
    attack: 20,
    technology: 1,
  },
  {
    id: 3,
    name: "Metal Axe",
    rarity: "Common",
    description:
      "An axe for cutting wood.\r\nMade from metal, its sharpness has improved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Axe_Tier_00.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Axe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ingot",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 2800,
      Attack: 30,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 250,
      Code: "Axe_Tier_01",
      IconName: "Axe_Default",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 111,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Axe_Tier_01",
      SneakAttackRate: 1,
    },
    attack: 30,
    technology: 11,
  },
  {
    id: 4,
    name: "Refined Metal Axe",
    rarity: "Common",
    description:
      "An axe for cutting wood.\r\nMade from high quality metal, its sharpness has improved even further.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Axe_Tier_00.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Axe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 7000,
      Attack: 60,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 300,
      Code: "Axe_Tier_02",
      IconName: "Axe_Default",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 112,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Axe_Tier_02",
      SneakAttackRate: 1,
    },
    attack: 60,
    technology: 34,
  },
  {
    id: 5,
    name: "Metal Detector",
    rarity: "Common",
    description:
      "Holding it allows you to detect hidden ores nearby.\r\nIt marks the metal when close to the ore, but the mark disappears if you move away.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Essential_MetalDetector.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Essential_MetalDetector.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Circuit Board",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_NightStone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 33000,
      Weight: 25,
      MaxStackCount: 1,
      Durability: 400,
      Code: "MetalDetector",
      IconName: "MetalDetector",
      TypeA: "Weapon",
      TypeB: "WeaponMetalDetector",
      SortID: 170,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MetalDetector",
      SneakAttackRate: 1,
    },
    technology: 56,
  },
  {
    id: 6,
    name: "Wooden Club",
    rarity: "Common",
    description:
      "A Wooden Club for close range combat.\r\nCan beat a small Pal to a pulp if need be.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Bat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Bat.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 80,
      Attack: 25,
      Weight: 5,
      MaxStackCount: 1,
      Durability: 150,
      Code: "Bat",
      IconName: "Bat",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 101,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Bat",
      SneakAttackRate: 1,
    },
    attack: 25,
    technology: 1,
  },
  {
    id: 7,
    name: "Bat",
    rarity: "Common",
    description:
      "Baseball bat for close-range combat.\r\nMight be tough to get a home run with a Pal.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_Bat2.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Spear_Bat2.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
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
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 80,
      Attack: 50,
      Weight: 3,
      MaxStackCount: 1,
      Durability: 150,
      Code: "Bat2",
      IconName: "Bat2",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 103,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Bat2",
      SneakAttackRate: 1,
    },
    attack: 50,
    technology: 7,
  },
  {
    id: 8,
    name: "Meat Cleaver",
    rarity: "Common",
    description:
      "Knife for butchering Pals.\r\nWhen equipped, the Pet command becomes Butcher.\r\nButchered Pals will be gone for good.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MeatCutterKnife.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MeatCutterKnife.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 100,
      Attack: 25,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 300,
      Code: "MeatCutterKnife",
      IconName: "MeatCutterKnife",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 150,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MeatCutterKnife",
      SneakAttackRate: 1,
    },
    attack: 25,
    technology: 12,
  },
  {
    id: 9,
    name: "Stun Baton",
    rarity: "Common",
    description:
      "Close range weapon that sends out an electric jolt upon contact.\r\nPals are easier to capture when electrocuted.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_ElecBaton.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_ElecBaton.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Electric Organ",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectricOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 19000,
      Attack: 10,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 300,
      Code: "ElecBaton",
      IconName: "ElecBaton",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 160,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "ElecBaton",
      SneakAttackRate: 1,
    },
    attack: 10,
    technology: 22,
  },
  {
    id: 10,
    name: "Crossbow",
    rarity: "Common",
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 280,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 300,
      Code: "BowGun",
      IconName: "BowGun",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 230,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 280,
    technology: 13,
  },
  {
    id: 11,
    name: "Double-Barreled Shotgun",
    rarity: "Common",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 55200,
      Attack: 190,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 200,
      Code: "DoubleBarrelShotgun",
      IconName: "DoubleBarrelShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 410,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DoubleBarrelShotgun",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 190,
    technology: 39,
    ammo: "Shotgun Shell",
  },
  {
    id: 12,
    name: "Handgun",
    rarity: "Common",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Attack: 250,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 400,
      Code: "HandGun_Default",
      IconName: "HandGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 310,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalPistol",
      MagazineSize: 8,
      SneakAttackRate: 1,
    },
    attack: 250,
    technology: 28,
    ammo: "Handgun Ammo",
  },
  {
    id: 13,
    name: "Decal Gun 1",
    rarity: "Common",
    description:
      "Strange gun that paints a picture of Cattiva where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Weight: 8,
      MaxStackCount: 1,
      Code: "DecalGun_1",
      IconName: "DecalGun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 320,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DecalGun_1",
      MagazineSize: 99,
      SneakAttackRate: 1,
    },
    technology: 44,
    ammo: "Decal Ink",
  },
  {
    id: 14,
    name: "Decal Gun 2",
    rarity: "Common",
    description:
      "Strange gun that paints a picture of Lamball where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Weight: 8,
      MaxStackCount: 1,
      Code: "DecalGun_2",
      IconName: "DecalGun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 321,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DecalGun_2",
      MagazineSize: 99,
      SneakAttackRate: 1,
    },
    technology: 44,
    ammo: "Decal Ink",
  },
  {
    id: 15,
    name: "Decal Gun 3",
    rarity: "Common",
    description:
      "Strange gun that paints a picture of Melpaca where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Weight: 8,
      MaxStackCount: 1,
      Code: "DecalGun_3",
      IconName: "DecalGun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 322,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DecalGun_3",
      MagazineSize: 99,
      SneakAttackRate: 1,
    },
    technology: 44,
    ammo: "Decal Ink",
  },
  {
    id: 16,
    name: "Decal Gun 4",
    rarity: "Common",
    description:
      "Strange gun that paints a picture of Anubis where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Weight: 8,
      MaxStackCount: 1,
      Code: "DecalGun_4",
      IconName: "DecalGun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 323,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DecalGun_4",
      MagazineSize: 99,
      SneakAttackRate: 1,
    },
    technology: 44,
    ammo: "Decal Ink",
  },
  {
    id: 17,
    name: "Decal Gun 5",
    rarity: "Common",
    description:
      "Strange gun that paints a picture of Relaxaurus where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Weight: 8,
      MaxStackCount: 1,
      Code: "DecalGun_5",
      IconName: "DecalGun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 324,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DecalGun_5",
      MagazineSize: 99,
      SneakAttackRate: 1,
    },
    technology: 44,
    ammo: "Decal Ink",
  },
  {
    id: 18,
    name: "Homing Sphere Launcher",
    rarity: "Common",
    description:
      "A launcher for firing spheres.\r\nFired spheres home in on Pals.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HomingSphereLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_HomingSphereLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 460000,
      Weight: 30,
      MaxStackCount: 1,
      Code: "HomingSphereLauncher",
      IconName: "HomingSphereLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 622,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "HomingSphereLauncher",
      SneakAttackRate: 1,
    },
    technology: 55,
  },
  {
    id: 19,
    name: "Laser Rifle",
    rarity: "Common",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 1250,
      Weight: 18,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "LaserRifle",
      IconName: "LaserRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 640,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserRifle",
      MagazineSize: 30,
      SneakAttackRate: 1,
    },
    attack: 1250,
    technology: 51,
    ammo: "Energy Cartridge",
  },
  {
    id: 20,
    name: "Rocket Launcher",
    rarity: "Common",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 75,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 10000,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 300,
      Code: "Launcher_Default",
      IconName: "Launcher_Default",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 610,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 10000,
    technology: 49,
    ammo: "Rocket Ammo",
  },
  {
    id: 21,
    name: "Stone Pickaxe",
    rarity: "Common",
    description:
      "A pickaxe used for mining.\r\nMade from stone, the efficiency is questionable.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Pickaxe_Tier_00.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Pickaxe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 200,
      Attack: 20,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 150,
      Code: "Pickaxe_Tier_00",
      IconName: "PickAxe_Default",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 120,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Pickaxe_Tier_00",
      SneakAttackRate: 1,
    },
    attack: 20,
    technology: 1,
  },
  {
    id: 22,
    name: "Metal Pickaxe",
    rarity: "Common",
    description:
      "A pickaxe used for mining.\r\nMade from metal, its durability and efficiency have improved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Pickaxe_Tier_00.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Pickaxe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ingot",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 2800,
      Attack: 30,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 250,
      Code: "Pickaxe_Tier_01",
      IconName: "PickAxe_Default",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 121,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Pickaxe_Tier_01",
      SneakAttackRate: 1,
    },
    attack: 30,
    technology: 11,
  },
  {
    id: 23,
    name: "Refined Metal Pickaxe",
    rarity: "Common",
    description:
      "A pickaxe used for mining.\r\nIts durability and efficiency have further improved.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Pickaxe_Tier_00.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Pickaxe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 7000,
      Attack: 60,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 300,
      Code: "Pickaxe_Tier_02",
      IconName: "PickAxe_Default",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 122,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Pickaxe_Tier_02",
      SneakAttackRate: 1,
    },
    attack: 60,
    technology: 34,
  },
  {
    id: 24,
    name: "Pump-Action Shotgun",
    rarity: "Common",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 153600,
      Attack: 220,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 150,
      Code: "PumpActionShotgun",
      IconName: "ShotGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 420,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "PumpActionShotgun",
      MagazineSize: 8,
      SneakAttackRate: 1,
    },
    attack: 220,
    technology: 43,
    ammo: "Shotgun Shell",
  },
  {
    id: 25,
    name: "Single-Shot Rifle",
    rarity: "Common",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 1100,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "SingleShotRifle",
      IconName: "SingleShotRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 510,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SingleShotRifle",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1100,
    technology: 36,
    ammo: "Rifle Ammo",
  },
  {
    id: 26,
    name: "Scatter Sphere Launcher",
    rarity: "Common",
    description:
      "A new type of launcher that fires a large number of spheres.\r\nIt can easily capture a herd of Pals.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SphereLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SphereLauncher.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 44000,
      Weight: 30,
      MaxStackCount: 1,
      Code: "SphereLauncher",
      IconName: "SphereLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 621,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SphereLauncher",
      SneakAttackRate: 1,
    },
    technology: 37,
  },
  {
    id: 27,
    name: "Single-Shot Sphere Launcher",
    rarity: "Common",
    description:
      "A launcher that fires spheres.\r\nIt can capture Pals fom a greater distance.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SphereLauncher_Once.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SphereLauncher_Once.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Stone",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 109200,
      Weight: 30,
      MaxStackCount: 1,
      Code: "SphereLauncher_Once",
      IconName: "SphereLauncher_Once",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 620,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SphereLauncher_Once",
      SneakAttackRate: 1,
    },
    technology: 27,
  },
  {
    id: 28,
    name: "Sword",
    rarity: "Common",
    description:
      "Sword for close-range combat.\r\nThe blade is extremely sharp! Mightier than a pen, for sure.\r\nRequires Weapon Workbench to craft.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Sword.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Sword.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10440,
      Attack: 525,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 500,
      Code: "Sword",
      IconName: "Sword",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 140,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Sword",
      SneakAttackRate: 1,
    },
    attack: 525,
    technology: 44,
  },
  {
    id: 29,
    name: "Frag Grenade",
    rarity: "Common",
    description:
      "A Frag Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing damage to enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
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
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 750,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade",
      IconName: "FragGrenade",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 800,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade",
      SneakAttackRate: 1,
    },
    attack: 750,
    technology: 25,
  },
  {
    id: 30,
    name: "Incendiary Grenade",
    rarity: "Common",
    description:
      "A Incendiary Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, setting the surrounding area on fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Fire.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade_Fire.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
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
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 750,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade_Fire",
      IconName: "FragGrenade_Fire",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 803,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade_Fire",
      SneakAttackRate: 1,
    },
    attack: 750,
    technology: 31,
  },
  {
    id: 31,
    name: "Shock Grenade",
    rarity: "Common",
    description:
      "A Shock Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, electrocuting everything in the blast radius.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Elec.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade_Elec.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Electric Organ",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectricOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 750,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade_Elec",
      IconName: "FragGrenade_Elec",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 801,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade_Elec",
      SneakAttackRate: 1,
    },
    attack: 750,
    technology: 27,
  },
  {
    id: 32,
    name: "Ice Grenade",
    rarity: "Common",
    description:
      "A Ice Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, freezing the surrounding area.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Ice.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade_Ice.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ice Organ",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IceOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 750,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade_Ice",
      IconName: "FragGrenade_Ice",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 802,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade_Ice",
      SneakAttackRate: 1,
    },
    attack: 750,
    technology: 29,
  },
  {
    id: 33,
    name: "Old Bow",
    rarity: "Common",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 360,
      Attack: 65,
      Weight: 6,
      MaxStackCount: 1,
      Durability: 150,
      Code: "WeakerBow",
      IconName: "Bow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 200,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "WeakerBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 65,
    technology: 3,
    ammo: "Arrow",
  },
  {
    id: 34,
    name: "Poison Bow",
    rarity: "Common",
    description:
      "Frightening bow that poisons its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Bow_Poison.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Bow_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
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
        name: "Venom Gland",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Venom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Venom.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 480,
      Attack: 65,
      Weight: 6,
      MaxStackCount: 1,
      Durability: 150,
      Code: "Bow_Poison",
      IconName: "Bow_Poison",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 210,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Bow_Poison",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 65,
    technology: 8,
  },
  {
    id: 35,
    name: "Fire Bow",
    rarity: "Common",
    description:
      "A bow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Bow_Fire.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Bow_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
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
        name: "Flame Organ",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 480,
      Attack: 65,
      Weight: 6,
      MaxStackCount: 1,
      Durability: 150,
      Code: "Bow_Fire",
      IconName: "Bow_Fire",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 211,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Bow_Fire",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 65,
    technology: 5,
    ammo: "Fire Arrow",
  },
  {
    id: 36,
    name: "Poison Arrow Crossbow",
    rarity: "Common",
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Venom Gland",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Venom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Venom.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 280,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 300,
      Code: "BowGun_Poison",
      IconName: "BowGun_Poison",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 240,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Poison",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 280,
    technology: 17,
  },
  {
    id: 37,
    name: "Fire Arrow Crossbow",
    rarity: "Common",
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Flame Organ",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 280,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 300,
      Code: "BowGun_Fire",
      IconName: "BowGun_Fire",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 241,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Fire",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 280,
    technology: 15,
  },
  {
    id: 38,
    name: "Three Shot Bow",
    rarity: "Common",
    description:
      "An enhanced bow that allows three arrows to be fired simultaneously.\r\nBy some strange mechanism, it only consumes a single Arrow when fired.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Bow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Bow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 1000,
      Attack: 40,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 250,
      Code: "Bow_Triple",
      IconName: "Bow3",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 220,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Bow_Triple",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 40,
    technology: 10,
    ammo: "Arrow",
  },
  {
    id: 39,
    name: "Hand-Held Torch",
    rarity: "Common",
    description:
      "Lights up dark areas and keeps you warm.\r\nCan also be used for close range combat in a pinch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Torch.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Torch.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
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
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 80,
      Attack: 10,
      Weight: 5,
      MaxStackCount: 1,
      Durability: 100,
      Code: "Torch",
      IconName: "Torch",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 102,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Torch",
      SneakAttackRate: 1,
    },
    attack: 10,
    technology: 1,
  },
  {
    id: 40,
    name: "Makeshift Handgun",
    rarity: "Common",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 16600,
      Attack: 320,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 300,
      Code: "MakeshiftHandgun",
      IconName: "MakeshiftHandgun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 300,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftHandgun",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 320,
    technology: 24,
    ammo: "Coarse Ammo",
  },
  {
    id: 41,
    name: "Stone Spear",
    rarity: "Common",
    description:
      "Useful for close-range combat.\r\nIts length allows you to stand further away when attacking.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_Tier_00.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Spear_Tier_00.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 18,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 480,
      Attack: 35,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 200,
      Code: "Spear",
      IconName: "Spear",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 130,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Spear",
      SneakAttackRate: 1,
    },
    attack: 35,
    technology: 4,
  },
  {
    id: 42,
    name: "Metal Spear",
    rarity: "Common",
    description:
      "Useful for close-range combat.\r\nThe metal tip give it an increased attack power.\r\nIts length allows you to stand further away when attacking.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_Tier_00.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Spear_Tier_00.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 27,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 8780,
      Attack: 80,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 250,
      Code: "Spear_2",
      IconName: "Spear",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 131,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Spear_2",
      SneakAttackRate: 1,
    },
    attack: 80,
    technology: 13,
  },
  {
    id: 43,
    name: "Refined Metal Spear",
    rarity: "Common",
    description:
      "Useful for close-range combat.\r\nThe high-quality metal tip give it an increased attack power.\r\nIts length allows you to stand further away when attacking.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_Tier_00.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Spear_Tier_00.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 36,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 18,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 13880,
      Attack: 310,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 300,
      Code: "Spear_3",
      IconName: "Spear",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 132,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Spear_3",
      SneakAttackRate: 1,
    },
    attack: 310,
    technology: 34,
  },
  {
    id: 44,
    name: "Elizabee's Staff",
    rarity: "Uncommon",
    description:
      "A spear made from Elizabee's staff, altered for human use.\r\nIt is imbued with Elizabee's indomitable spirit.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_QueenBee.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Spear_QueenBee.webp",
    recipe: [],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 20000,
      Attack: 150,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 300,
      Code: "Spear_QueenBee",
      IconName: "Spear_QueenBee",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 133,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Spear_QueenBee",
      SneakAttackRate: 1,
    },
    attack: 150,
  },
  {
    id: 45,
    name: "Lily's Spear",
    rarity: "Rare",
    description:
      "The spear cherished by Lily.\r\nPunishes those who neglect their Pals.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_ForestBoss.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Spear_ForestBoss.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Wood",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 20000,
      Attack: 450,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 500,
      Code: "Spear_ForestBoss",
      IconName: "Spear_ForestBoss",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 135,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Spear_ForestBoss",
      SneakAttackRate: 1,
    },
    attack: 450,
    technology: 43,
  },
  {
    id: 46,
    name: "Grappling Gun",
    rarity: "Common",
    description:
      "It fires a hook that latches on to distant targets, pulling the user's body towards the target.\r\nIt allows for easy movement between places with varying elevation.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrapplingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GrapplingGun.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ingot",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 10,
      Weight: 1,
      MaxStackCount: 1,
      Code: "GrapplingGun",
      IconName: "GrapplingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGrapplingGun",
      SortID: 340,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GrapplingGun",
      SneakAttackRate: 1,
    },
    technology: 12,
  },
  {
    id: 47,
    name: "Mega Grappling Gun",
    rarity: "Uncommon",
    description:
      "It fires a hook that latches on to distant targets, pulling the user's body towards the target.\r\nSince it's upgraded, it now has greater range.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrapplingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GrapplingGun.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ingot",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Weight: 1,
      MaxStackCount: 1,
      Code: "GrapplingGun2",
      IconName: "GrapplingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGrapplingGun",
      SortID: 341,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GrapplingGun_2",
      SneakAttackRate: 1,
    },
    technology: 17,
  },
  {
    id: 48,
    name: "Giga Grappling Gun",
    rarity: "Rare",
    description:
      "It fires a hook that latches on to distant targets, pulling the user's body towards the target.\r\nUsing data from prototype versions, its capabilities have been further increased.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrapplingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GrapplingGun.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 10,
      Weight: 1,
      MaxStackCount: 1,
      Code: "GrapplingGun3",
      IconName: "GrapplingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGrapplingGun",
      SortID: 342,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GrapplingGun_3",
      SneakAttackRate: 1,
    },
    technology: 31,
  },
  {
    id: 49,
    name: "Hyper Grappling Gun",
    rarity: "Epic",
    description:
      "It fires a hook that latches on to distant targets, pulling the user's body towards the target.\r\nAs a result of research, it has achieved overwhelming mobility.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrapplingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GrapplingGun.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 10,
      Weight: 1,
      MaxStackCount: 1,
      Code: "GrapplingGun4",
      IconName: "GrapplingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGrapplingGun",
      SortID: 343,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GrapplingGun_4",
      SneakAttackRate: 1,
    },
    technology: 48,
  },
  {
    id: 50,
    name: "Musket",
    rarity: "Common",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 37600,
      Attack: 1000,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 200,
      Code: "Musket",
      IconName: "Musket",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 500,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Musket",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1000,
    technology: 21,
    ammo: "Coarse Ammo",
  },
  {
    id: 51,
    name: "Old Bow",
    rarity: "Uncommon",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 360,
      Attack: 130,
      Weight: 6,
      MaxStackCount: 1,
      Durability: 400,
      Code: "WeakerBow_2",
      IconName: "Bow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 201,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "WeakerBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 130,
    ammo: "Arrow",
  },
  {
    id: 52,
    name: "Old Bow",
    rarity: "Rare",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 360,
      Attack: 169,
      Weight: 6,
      MaxStackCount: 1,
      Durability: 500,
      Code: "WeakerBow_3",
      IconName: "Bow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 202,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "WeakerBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 169,
    ammo: "Arrow",
  },
  {
    id: 53,
    name: "Old Bow",
    rarity: "Epic",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 360,
      Attack: 208,
      Weight: 6,
      MaxStackCount: 1,
      Durability: 600,
      Code: "WeakerBow_4",
      IconName: "Bow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 203,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "WeakerBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 208,
    ammo: "Arrow",
  },
  {
    id: 54,
    name: "Old Bow",
    rarity: "Legendary",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 33,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 360,
      Attack: 247,
      Weight: 6,
      MaxStackCount: 1,
      Durability: 700,
      Code: "WeakerBow_5",
      IconName: "Bow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 204,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "WeakerBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 247,
    ammo: "Arrow",
  },
  {
    id: 55,
    name: "Crossbow",
    rarity: "Uncommon",
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 364,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 800,
      Code: "BowGun_2",
      IconName: "BowGun",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 231,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 364,
  },
  {
    id: 56,
    name: "Crossbow",
    rarity: "Rare",
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 406,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "BowGun_3",
      IconName: "BowGun",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 232,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 406,
  },
  {
    id: 57,
    name: "Crossbow",
    rarity: "Epic",
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 448,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "BowGun_4",
      IconName: "BowGun",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 233,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 448,
  },
  {
    id: 58,
    name: "Crossbow",
    rarity: "Legendary",
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 33,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 490,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 1400,
      Code: "BowGun_5",
      IconName: "BowGun",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 234,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 490,
  },
  {
    id: 59,
    name: "Assault Rifle",
    rarity: "Uncommon",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 400,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "AssaultRifle_Default2",
      IconName: "AssaultRifle_Default",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 541,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalRifle",
      VisualBlueprintClassName: "BP_Item_AssaultRifle_Default1",
      MagazineSize: 24,
      SneakAttackRate: 1,
    },
    attack: 400,
    ammo: "Assault Rifle Ammo",
  },
  {
    id: 60,
    name: "Assault Rifle",
    rarity: "Rare",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 448,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 4000,
      Code: "AssaultRifle_Default3",
      IconName: "AssaultRifle_Default",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 542,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalRifle",
      VisualBlueprintClassName: "BP_Item_AssaultRifle_Default1",
      MagazineSize: 26,
      SneakAttackRate: 1,
    },
    attack: 448,
    ammo: "Assault Rifle Ammo",
  },
  {
    id: 61,
    name: "Assault Rifle",
    rarity: "Epic",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 512,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 5000,
      Code: "AssaultRifle_Default4",
      IconName: "AssaultRifle_Default",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 543,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalRifle",
      VisualBlueprintClassName: "BP_Item_AssaultRifle_Default1",
      MagazineSize: 28,
      SneakAttackRate: 1,
    },
    attack: 512,
    ammo: "Assault Rifle Ammo",
  },
  {
    id: 62,
    name: "Assault Rifle",
    rarity: "Legendary",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 560,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 6000,
      Code: "AssaultRifle_Default5",
      IconName: "AssaultRifle_Default",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 544,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalRifle",
      VisualBlueprintClassName: "BP_Item_AssaultRifle_Default1",
      MagazineSize: 30,
      SneakAttackRate: 1,
    },
    attack: 560,
    ammo: "Assault Rifle Ammo",
  },
  {
    id: 63,
    name: "Pump-Action Shotgun",
    rarity: "Uncommon",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 153600,
      Attack: 275,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 500,
      Code: "PumpActionShotgun_2",
      IconName: "ShotGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 421,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "PumpActionShotgun",
      MagazineSize: 9,
      SneakAttackRate: 1,
    },
    attack: 275,
    ammo: "Shotgun Shell",
  },
  {
    id: 64,
    name: "Pump-Action Shotgun",
    rarity: "Rare",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 153600,
      Attack: 308,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 600,
      Code: "PumpActionShotgun_3",
      IconName: "ShotGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 422,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "PumpActionShotgun",
      MagazineSize: 10,
      SneakAttackRate: 1,
    },
    attack: 308,
    ammo: "Shotgun Shell",
  },
  {
    id: 65,
    name: "Pump-Action Shotgun",
    rarity: "Epic",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 153600,
      Attack: 352,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 700,
      Code: "PumpActionShotgun_4",
      IconName: "ShotGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 423,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "PumpActionShotgun",
      MagazineSize: 11,
      SneakAttackRate: 1,
    },
    attack: 352,
    ammo: "Shotgun Shell",
  },
  {
    id: 66,
    name: "Pump-Action Shotgun",
    rarity: "Legendary",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 153600,
      Attack: 385,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 800,
      Code: "PumpActionShotgun_5",
      IconName: "ShotGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 424,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "PumpActionShotgun",
      MagazineSize: 12,
      SneakAttackRate: 1,
    },
    attack: 385,
    ammo: "Shotgun Shell",
  },
  {
    id: 67,
    name: "Handgun",
    rarity: "Uncommon",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Attack: 437,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "HandGun_Default_2",
      IconName: "HandGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 311,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalPistol",
      MagazineSize: 10,
      SneakAttackRate: 1,
    },
    attack: 437,
    ammo: "Handgun Ammo",
  },
  {
    id: 68,
    name: "Handgun",
    rarity: "Rare",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Attack: 500,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 1600,
      Code: "HandGun_Default_3",
      IconName: "HandGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 312,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalPistol",
      MagazineSize: 12,
      SneakAttackRate: 1,
    },
    attack: 500,
    ammo: "Handgun Ammo",
  },
  {
    id: 69,
    name: "Handgun",
    rarity: "Epic",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Attack: 562,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 2000,
      Code: "HandGun_Default_4",
      IconName: "HandGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 313,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalPistol",
      MagazineSize: 14,
      SneakAttackRate: 1,
    },
    attack: 562,
    ammo: "Handgun Ammo",
  },
  {
    id: 70,
    name: "Handgun",
    rarity: "Legendary",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 33000,
      Attack: 625,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 2400,
      Code: "HandGun_Default_5",
      IconName: "HandGun_Default",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 314,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalPistol",
      MagazineSize: 16,
      SneakAttackRate: 1,
    },
    attack: 625,
    ammo: "Handgun Ammo",
  },
  {
    id: 71,
    name: "Rocket Launcher",
    rarity: "Uncommon",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 11000,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 800,
      Code: "Launcher_Default_2",
      IconName: "Launcher_Default",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 612,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 11000,
    ammo: "Rocket Ammo",
  },
  {
    id: 72,
    name: "Rocket Launcher",
    rarity: "Rare",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 12000,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "Launcher_Default_3",
      IconName: "Launcher_Default",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 613,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 12000,
    ammo: "Rocket Ammo",
  },
  {
    id: 73,
    name: "Rocket Launcher",
    rarity: "Epic",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 13000,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "Launcher_Default_4",
      IconName: "Launcher_Default",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 614,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 13000,
    ammo: "Rocket Ammo",
  },
  {
    id: 74,
    name: "Rocket Launcher",
    rarity: "Legendary",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 505,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 14000,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1400,
      Code: "Launcher_Default_5",
      IconName: "Launcher_Default",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 615,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "NormalLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 14000,
    ammo: "Rocket Ammo",
  },
  {
    id: 75,
    name: "Musket",
    rarity: "Uncommon",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 37600,
      Attack: 1400,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 400,
      Code: "Musket_2",
      IconName: "Musket",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 501,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Musket",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1400,
    ammo: "Coarse Ammo",
  },
  {
    id: 76,
    name: "Musket",
    rarity: "Rare",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 75,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 37600,
      Attack: 1600,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 500,
      Code: "Musket_3",
      IconName: "Musket",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 502,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Musket",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1600,
    ammo: "Coarse Ammo",
  },
  {
    id: 77,
    name: "Musket",
    rarity: "Epic",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 112,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 37600,
      Attack: 1800,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 600,
      Code: "Musket_4",
      IconName: "Musket",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 503,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Musket",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1800,
    ammo: "Coarse Ammo",
  },
  {
    id: 78,
    name: "Musket",
    rarity: "Legendary",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 168,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 33,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 37600,
      Attack: 2000,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 800,
      Code: "Musket_5",
      IconName: "Musket",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 504,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Musket",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 2000,
    ammo: "Coarse Ammo",
  },
  {
    id: 79,
    name: "Double-Barreled Shotgun",
    rarity: "Uncommon",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 14,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 55200,
      Attack: 285,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 400,
      Code: "DoubleBarrelShotgun_2",
      IconName: "DoubleBarrelShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 411,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DoubleBarrelShotgun",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 285,
    ammo: "Shotgun Shell",
  },
  {
    id: 80,
    name: "Double-Barreled Shotgun",
    rarity: "Rare",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 21,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 55200,
      Attack: 323,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 500,
      Code: "DoubleBarrelShotgun_3",
      IconName: "DoubleBarrelShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 412,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DoubleBarrelShotgun",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 323,
    ammo: "Shotgun Shell",
  },
  {
    id: 81,
    name: "Double-Barreled Shotgun",
    rarity: "Epic",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 31,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 55200,
      Attack: 361,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 600,
      Code: "DoubleBarrelShotgun_4",
      IconName: "DoubleBarrelShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 413,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DoubleBarrelShotgun",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 361,
    ammo: "Shotgun Shell",
  },
  {
    id: 82,
    name: "Double-Barreled Shotgun",
    rarity: "Legendary",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 46,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 55200,
      Attack: 399,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 800,
      Code: "DoubleBarrelShotgun_5",
      IconName: "DoubleBarrelShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 414,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "DoubleBarrelShotgun",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 399,
    ammo: "Shotgun Shell",
  },
  {
    id: 83,
    name: "Single-Shot Rifle",
    rarity: "Uncommon",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 1650,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 2000,
      Code: "SingleShotRifle_2",
      IconName: "SingleShotRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 511,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SingleShotRifle",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1650,
    ammo: "Rifle Ammo",
  },
  {
    id: 84,
    name: "Single-Shot Rifle",
    rarity: "Rare",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 1870,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 2500,
      Code: "SingleShotRifle_3",
      IconName: "SingleShotRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 512,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SingleShotRifle",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1870,
    ammo: "Rifle Ammo",
  },
  {
    id: 85,
    name: "Single-Shot Rifle",
    rarity: "Epic",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 2090,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "SingleShotRifle_4",
      IconName: "SingleShotRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 513,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SingleShotRifle",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 2090,
    ammo: "Rifle Ammo",
  },
  {
    id: 86,
    name: "Single-Shot Rifle",
    rarity: "Legendary",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 33,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 2310,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 4000,
      Code: "SingleShotRifle_5",
      IconName: "SingleShotRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 514,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SingleShotRifle",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 2310,
    ammo: "Rifle Ammo",
  },
  {
    id: 87,
    name: "Gatling Gun",
    rarity: "Common",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 70,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 140,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 375,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 6000,
      Code: "GatlingGun",
      IconName: "GatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 695,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 375,
    technology: 54,
    ammo: "Gatling Gun Ammo",
  },
  {
    id: 88,
    name: "Flamethrower",
    rarity: "Common",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_FireOrgan.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 450,
      Weight: 45,
      MaxStackCount: 1,
      Durability: 6000,
      Code: "FlameThrower",
      IconName: "FlameThrower",
      TypeA: "Weapon",
      TypeB: "WeaponFlameThrower",
      SortID: 650,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Flamethrower",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 450,
    technology: 52,
    ammo: "Flamethrower Fuel",
  },
  {
    id: 89,
    name: "Grenade Launcher",
    rarity: "Common",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 75,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 3000,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 600,
      Code: "GrenadeLauncher",
      IconName: "GrenadeLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 670,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GrenadeLauncher",
      MagazineSize: 5,
      SneakAttackRate: 1,
    },
    attack: 3000,
    technology: 53,
    ammo: "Grenade Ammo",
  },
  {
    id: 90,
    name: "Guided Missile Launcher",
    rarity: "Common",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 5900,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 300,
      Code: "GuidedMissileLauncher",
      IconName: "GuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 680,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GuidedMissileLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 5900,
    technology: 55,
    ammo: "Missile Ammo",
  },
  {
    id: 91,
    name: "Multi Guided Missile Launcher",
    rarity: "Common",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 5900,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 300,
      Code: "MultiGuidedMissileLauncher",
      IconName: "MultiGuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 690,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MultiGuidedMissileLauncher",
      MagazineSize: 4,
      SneakAttackRate: 1,
    },
    attack: 5900,
    ammo: "Missile Ammo",
  },
  {
    id: 92,
    name: "Laser Gatling Gun",
    rarity: "Common",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 110,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 530,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 8000,
      Code: "LaserGatlingGun",
      IconName: "LaserGatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 700,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserGatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 530,
    technology: 58,
    ammo: "Laser Gatling Cartridge",
  },
  {
    id: 93,
    name: "Frag Grenade Mk2",
    rarity: "Common",
    description:
      "An improved frag grenade.\r\nIt explodes a few seconds after being thrown, dealing massive damage to enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Super.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade_Super.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 3,
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
      {
        name: "Crude Oil",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CrudeOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CrudeOil.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 4000,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade_Super",
      IconName: "FragGrenade_Super",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 810,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade_Super",
      SneakAttackRate: 1,
    },
    attack: 4000,
    technology: 53,
  },
  {
    id: 94,
    name: "Makeshift Handgun",
    rarity: "Uncommon",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 70,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 16600,
      Attack: 560,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 600,
      Code: "MakeshiftHandgun_2",
      IconName: "MakeshiftHandgun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 301,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftHandgun",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 560,
    ammo: "Coarse Ammo",
  },
  {
    id: 95,
    name: "Makeshift Handgun",
    rarity: "Rare",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 105,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 16600,
      Attack: 640,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 900,
      Code: "MakeshiftHandgun_3",
      IconName: "MakeshiftHandgun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 302,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftHandgun",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 640,
    ammo: "Coarse Ammo",
  },
  {
    id: 96,
    name: "Makeshift Handgun",
    rarity: "Epic",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 157,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 16600,
      Attack: 720,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "MakeshiftHandgun_4",
      IconName: "MakeshiftHandgun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 303,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftHandgun",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 720,
    ammo: "Coarse Ammo",
  },
  {
    id: 97,
    name: "Makeshift Handgun",
    rarity: "Legendary",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 235,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 16600,
      Attack: 800,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 1500,
      Code: "MakeshiftHandgun_5",
      IconName: "MakeshiftHandgun",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 304,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftHandgun",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 800,
    ammo: "Coarse Ammo",
  },
  {
    id: 98,
    name: "Laser Rifle",
    rarity: "Uncommon",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 1437,
      Weight: 18,
      MaxStackCount: 1,
      Durability: 4500,
      Code: "LaserRifle_2",
      IconName: "LaserRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 641,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserRifle",
      MagazineSize: 30,
      SneakAttackRate: 1,
    },
    attack: 1437,
    ammo: "Energy Cartridge",
  },
  {
    id: 99,
    name: "Laser Rifle",
    rarity: "Rare",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 1562,
      Weight: 18,
      MaxStackCount: 1,
      Durability: 6000,
      Code: "LaserRifle_3",
      IconName: "LaserRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 642,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserRifle",
      MagazineSize: 30,
      SneakAttackRate: 1,
    },
    attack: 1562,
    ammo: "Energy Cartridge",
  },
  {
    id: 100,
    name: "Laser Rifle",
    rarity: "Epic",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 1687,
      Weight: 18,
      MaxStackCount: 1,
      Durability: 9000,
      Code: "LaserRifle_4",
      IconName: "LaserRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 643,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserRifle",
      MagazineSize: 30,
      SneakAttackRate: 1,
    },
    attack: 1687,
    ammo: "Energy Cartridge",
  },
  {
    id: 101,
    name: "Laser Rifle",
    rarity: "Legendary",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 1875,
      Weight: 18,
      MaxStackCount: 1,
      Durability: 12000,
      Code: "LaserRifle_5",
      IconName: "LaserRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 644,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserRifle",
      MagazineSize: 30,
      SneakAttackRate: 1,
    },
    attack: 1875,
    ammo: "Energy Cartridge",
  },
  {
    id: 102,
    name: "Flamethrower",
    rarity: "Uncommon",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 70,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 517,
      Weight: 45,
      MaxStackCount: 1,
      Durability: 9000,
      Code: "FlameThrower_2",
      IconName: "FlameThrower",
      TypeA: "Weapon",
      TypeB: "WeaponFlameThrower",
      SortID: 651,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Flamethrower",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 517,
    ammo: "Flamethrower Fuel",
  },
  {
    id: 103,
    name: "Flamethrower",
    rarity: "Rare",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 105,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 562,
      Weight: 45,
      MaxStackCount: 1,
      Durability: 12000,
      Code: "FlameThrower_3",
      IconName: "FlameThrower",
      TypeA: "Weapon",
      TypeB: "WeaponFlameThrower",
      SortID: 652,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Flamethrower",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 562,
    ammo: "Flamethrower Fuel",
  },
  {
    id: 104,
    name: "Flamethrower",
    rarity: "Epic",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 157,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 607,
      Weight: 45,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "FlameThrower_4",
      IconName: "FlameThrower",
      TypeA: "Weapon",
      TypeB: "WeaponFlameThrower",
      SortID: 653,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Flamethrower",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 607,
    ammo: "Flamethrower Fuel",
  },
  {
    id: 105,
    name: "Flamethrower",
    rarity: "Legendary",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 235,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 675,
      Weight: 45,
      MaxStackCount: 1,
      Durability: 24000,
      Code: "FlameThrower_5",
      IconName: "FlameThrower",
      TypeA: "Weapon",
      TypeB: "WeaponFlameThrower",
      SortID: 654,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Flamethrower",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 675,
    ammo: "Flamethrower Fuel",
  },
  {
    id: 106,
    name: "Grenade Launcher",
    rarity: "Uncommon",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 3450,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 900,
      Code: "GrenadeLauncher_2",
      IconName: "GrenadeLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 671,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GrenadeLauncher",
      MagazineSize: 5,
      SneakAttackRate: 1,
    },
    attack: 3450,
    ammo: "Grenade Ammo",
  },
  {
    id: 107,
    name: "Grenade Launcher",
    rarity: "Rare",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 3750,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "GrenadeLauncher_3",
      IconName: "GrenadeLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 672,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GrenadeLauncher",
      MagazineSize: 5,
      SneakAttackRate: 1,
    },
    attack: 3750,
    ammo: "Grenade Ammo",
  },
  {
    id: 108,
    name: "Grenade Launcher",
    rarity: "Epic",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 4050,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1800,
      Code: "GrenadeLauncher_4",
      IconName: "GrenadeLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 673,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GrenadeLauncher",
      MagazineSize: 5,
      SneakAttackRate: 1,
    },
    attack: 4050,
    ammo: "Grenade Ammo",
  },
  {
    id: 109,
    name: "Grenade Launcher",
    rarity: "Legendary",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 505,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 405,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 405,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 4500,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 2400,
      Code: "GrenadeLauncher_5",
      IconName: "GrenadeLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 674,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GrenadeLauncher",
      MagazineSize: 5,
      SneakAttackRate: 1,
    },
    attack: 4500,
    ammo: "Grenade Ammo",
  },
  {
    id: 110,
    name: "Guided Missile Launcher",
    rarity: "Uncommon",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 6785,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 450,
      Code: "GuidedMissileLauncher_2",
      IconName: "GuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 681,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GuidedMissileLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 6785,
    ammo: "Missile Ammo",
  },
  {
    id: 111,
    name: "Guided Missile Launcher",
    rarity: "Rare",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 300,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 300,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 7375,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 600,
      Code: "GuidedMissileLauncher_3",
      IconName: "GuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 682,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GuidedMissileLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 7375,
    ammo: "Missile Ammo",
  },
  {
    id: 112,
    name: "Guided Missile Launcher",
    rarity: "Epic",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 450,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 450,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 7965,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 900,
      Code: "GuidedMissileLauncher_4",
      IconName: "GuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 683,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GuidedMissileLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 7965,
    ammo: "Missile Ammo",
  },
  {
    id: 113,
    name: "Guided Missile Launcher",
    rarity: "Legendary",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 675,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 675,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 8850,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "GuidedMissileLauncher_5",
      IconName: "GuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 684,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GuidedMissileLauncher",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 8850,
    ammo: "Missile Ammo",
  },
  {
    id: 114,
    name: "Multi Guided Missile Launcher",
    rarity: "Uncommon",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 300,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 160,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 240,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 6785,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 450,
      Code: "MultiGuidedMissileLauncher_2",
      IconName: "MultiGuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 691,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MultiGuidedMissileLauncher",
      MagazineSize: 4,
      SneakAttackRate: 1,
    },
    attack: 6785,
    ammo: "Missile Ammo",
  },
  {
    id: 115,
    name: "Multi Guided Missile Launcher",
    rarity: "Rare",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 450,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 240,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 360,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 7375,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 600,
      Code: "MultiGuidedMissileLauncher_3",
      IconName: "MultiGuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 692,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MultiGuidedMissileLauncher",
      MagazineSize: 4,
      SneakAttackRate: 1,
    },
    attack: 7375,
    ammo: "Missile Ammo",
  },
  {
    id: 116,
    name: "Multi Guided Missile Launcher",
    rarity: "Epic",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 675,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 360,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 540,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 7965,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 900,
      Code: "MultiGuidedMissileLauncher_4",
      IconName: "MultiGuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 693,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MultiGuidedMissileLauncher",
      MagazineSize: 4,
      SneakAttackRate: 1,
    },
    attack: 7965,
    ammo: "Missile Ammo",
  },
  {
    id: 117,
    name: "Multi Guided Missile Launcher",
    rarity: "Legendary",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 1012,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 540,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 810,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 8850,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "MultiGuidedMissileLauncher_5",
      IconName: "MultiGuidedMissileLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 694,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MultiGuidedMissileLauncher",
      MagazineSize: 4,
      SneakAttackRate: 1,
    },
    attack: 8850,
    ammo: "Missile Ammo",
  },
  {
    id: 118,
    name: "Gatling Gun",
    rarity: "Uncommon",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 300,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 140,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 280,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 431,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 9000,
      Code: "GatlingGun_2",
      IconName: "GatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 696,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 431,
    ammo: "Gatling Gun Ammo",
  },
  {
    id: 119,
    name: "Gatling Gun",
    rarity: "Rare",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 450,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 210,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 420,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 468,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 12000,
      Code: "GatlingGun_3",
      IconName: "GatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 697,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 468,
    ammo: "Gatling Gun Ammo",
  },
  {
    id: 120,
    name: "Gatling Gun",
    rarity: "Epic",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 675,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 315,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 630,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 506,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 18000,
      Code: "GatlingGun_4",
      IconName: "GatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 698,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 506,
    ammo: "Gatling Gun Ammo",
  },
  {
    id: 121,
    name: "Gatling Gun",
    rarity: "Legendary",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 1012,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 472,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 945,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 562,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 24000,
      Code: "GatlingGun_5",
      IconName: "GatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 699,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "GatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 562,
    ammo: "Gatling Gun Ammo",
  },
  {
    id: 122,
    name: "Meteor Launcher",
    rarity: "Common",
    description:
      "A phenomenal weapon that fires a meteor.\r\nUpon striking its target, it creates an explosion similar to a meteorite impact.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Meteor.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Launcher_Meteor.webp",
    recipe: [
      {
        name: "Meteorite Fragment",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MeteorDrop.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MeteorDrop.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 324000,
      Attack: 2000,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 300,
      Code: "Launcher_Meteor",
      IconName: "Launcher_Meteor",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 600,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Launcher_Meteor",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 2000,
    technology: 38,
    ammo: "Meteorite Ammo",
  },
  {
    id: 123,
    name: "Dark Grenade",
    rarity: "Common",
    description:
      "A Dark Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Dark damage to enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Dark.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade_Dark.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
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
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 750,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade_Dark",
      IconName: "FragGrenade_Dark",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 807,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade_Dark",
      SneakAttackRate: 1,
    },
    attack: 750,
    technology: 40,
  },
  {
    id: 124,
    name: "Dragon Grenade",
    rarity: "Common",
    description:
      "A Dragon Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Dragon damage to enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Dragon.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade_Dragon.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Horn",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Horn.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 750,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade_Dragon",
      IconName: "FragGrenade_Dragon",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 808,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade_Dragon",
      SneakAttackRate: 1,
    },
    attack: 750,
    technology: 42,
  },
  {
    id: 125,
    name: "Ground Grenade",
    rarity: "Common",
    description:
      "A Ground Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Ground damage to enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Ground.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade_Ground.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ore",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperOre.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperOre.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 750,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade_Ground",
      IconName: "FragGrenade_Ground",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 806,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade_Ground",
      SneakAttackRate: 1,
    },
    attack: 750,
    technology: 38,
  },
  {
    id: 126,
    name: "Grass Grenade",
    rarity: "Common",
    description:
      "A Grass Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Grass damage to enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Leaf.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade_Leaf.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 750,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade_Leaf",
      IconName: "FragGrenade_Leaf",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 805,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade_Leaf",
      SneakAttackRate: 1,
    },
    attack: 750,
    technology: 35,
  },
  {
    id: 127,
    name: "Water Grenade",
    rarity: "Common",
    description:
      "A Water Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Water damage to enemies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Water.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_FragGrenade_Water.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
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
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10,
      Attack: 750,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "FragGrenade_Water",
      IconName: "FragGrenade_Water",
      TypeA: "Weapon",
      TypeB: "WeaponThrowObject",
      SortID: 804,
      ItemStaticClass: "CommonWeapon",
      ItemActorClass: "FragGrenade_Water",
      SneakAttackRate: 1,
    },
    attack: 750,
    technology: 33,
  },
  {
    id: 128,
    name: "Katana",
    rarity: "Common",
    description:
      "Katana for close-range combat.\r\nSlices through with razor-sharp precision, cutting cleanly in one strike.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Katana.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Katana.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10440,
      Attack: 525,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 500,
      Code: "Katana",
      IconName: "Katana",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 141,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Katana",
      SneakAttackRate: 1,
    },
    attack: 525,
    technology: 29,
  },
  {
    id: 129,
    name: "Beam Sword",
    rarity: "Common",
    description:
      "Beam Sword for close-range combat.\r\nSlices through opponents, burning them with a high-output laser.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BeamSword.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BeamSword.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_NightStone.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 10440,
      Attack: 2000,
      Weight: 10,
      MaxStackCount: 1,
      Durability: 500,
      Code: "BeamSword",
      IconName: "BeamSword",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 142,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BeamSword",
      SneakAttackRate: 1,
    },
    attack: 2000,
    technology: 57,
  },
  {
    id: 130,
    name: "Semi-Auto Shotgun",
    rarity: "Common",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 153600,
      Attack: 195,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 300,
      Code: "SemiAutoShotgun",
      IconName: "SemiAutoShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 430,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoShotgun",
      MagazineSize: 10,
      SneakAttackRate: 1,
    },
    attack: 195,
    technology: 47,
    ammo: "Shotgun Shell",
  },
  {
    id: 131,
    name: "Plasma Cannon",
    rarity: "Common",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 130,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 324000,
      Attack: 10000,
      Weight: 30,
      MaxStackCount: 1,
      Durability: 300,
      Code: "EnergyRocketLauncher",
      IconName: "EnergyRocketLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 710,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "EnergyRocketLauncher",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 10000,
    technology: 60,
    ammo: "Plasma Cartridge",
  },
  {
    id: 132,
    name: "Poison Arrow Crossbow",
    rarity: "Uncommon",
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 364,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 800,
      Code: "BowGun_Poison_2",
      IconName: "BowGun_Poison",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 242,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Poison",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 364,
  },
  {
    id: 133,
    name: "Poison Arrow Crossbow",
    rarity: "Rare",
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 406,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "BowGun_Poison_3",
      IconName: "BowGun_Poison",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 243,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Poison",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 406,
  },
  {
    id: 134,
    name: "Poison Arrow Crossbow",
    rarity: "Epic",
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 448,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "BowGun_Poison_4",
      IconName: "BowGun_Poison",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 244,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Poison",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 448,
  },
  {
    id: 135,
    name: "Poison Arrow Crossbow",
    rarity: "Legendary",
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 33,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 490,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 1400,
      Code: "BowGun_Poison_5",
      IconName: "BowGun_Poison",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 245,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Poison",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 490,
  },
  {
    id: 136,
    name: "Fire Arrow Crossbow",
    rarity: "Uncommon",
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 364,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 800,
      Code: "BowGun_Fire_2",
      IconName: "BowGun_Fire",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 246,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Fire",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 364,
  },
  {
    id: 137,
    name: "Fire Arrow Crossbow",
    rarity: "Rare",
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 406,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "BowGun_Fire_3",
      IconName: "BowGun_Fire",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 247,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Fire",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 406,
  },
  {
    id: 138,
    name: "Fire Arrow Crossbow",
    rarity: "Epic",
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 448,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "BowGun_Fire_4",
      IconName: "BowGun_Fire",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 248,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Fire",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 448,
  },
  {
    id: 139,
    name: "Fire Arrow Crossbow",
    rarity: "Legendary",
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 33,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 25200,
      Attack: 490,
      Weight: 13,
      MaxStackCount: 1,
      Durability: 1400,
      Code: "BowGun_Fire_5",
      IconName: "BowGun_Fire",
      TypeA: "Weapon",
      TypeB: "WeaponCrossbow",
      SortID: 249,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "BowGun_Fire",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 490,
  },
  {
    id: 140,
    name: "Old Revolver",
    rarity: "Common",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 33000,
      Attack: 600,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 400,
      Code: "OldRevolver",
      IconName: "OldRevolver",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 330,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "OldRevolver",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 600,
    technology: 33,
    ammo: "Handgun Ammo",
  },
  {
    id: 141,
    name: "Pal Metal Pickaxe",
    rarity: "Common",
    description:
      "A pickaxe for mining. It has achieved extraordinary efficiency thanks to Pal Metal.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Pickaxe_Tier_03.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Pickaxe_Tier_03.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 33000,
      Attack: 120,
      Weight: 25,
      MaxStackCount: 1,
      Durability: 400,
      Code: "Pickaxe_Steal",
      IconName: "Pickaxe_Steal",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 124,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Pickaxe_Tier_03",
      SneakAttackRate: 1,
    },
    attack: 120,
    technology: 44,
  },
  {
    id: 142,
    name: "Pal Metal Axe",
    rarity: "Common",
    description:
      "An axe for chopping wood. It has achieved extraordinary sharpness thanks to Pal Metal.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Axe_Tier_03.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_Axe_Tier_03.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StealIngot.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 33000,
      Attack: 120,
      Weight: 25,
      MaxStackCount: 1,
      Durability: 400,
      Code: "Axe_Steal",
      IconName: "Axe_Steal",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 114,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "Axe_Tier_03",
      SneakAttackRate: 1,
    },
    attack: 120,
    technology: 44,
  },
  {
    id: 143,
    name: "Makeshift Assault Rifle",
    rarity: "Common",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 70,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 170,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 1500,
      Code: "MakeshiftAssaultRifle",
      IconName: "MakeshiftAssaultRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 530,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftAssaultRifle",
      MagazineSize: 15,
      SneakAttackRate: 1,
    },
    attack: 170,
    technology: 31,
    ammo: "Coarse Ammo",
  },
  {
    id: 144,
    name: "Semi-Auto Rifle",
    rarity: "Common",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 1150,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "SemiAutoRifle",
      IconName: "SemiAutoRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 520,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoRifle",
      MagazineSize: 8,
      SneakAttackRate: 1,
    },
    attack: 1150,
    technology: 41,
    ammo: "Rifle Ammo",
  },
  {
    id: 145,
    name: "Makeshift SMG",
    rarity: "Common",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 100,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "MakeshiftSubmachineGun",
      IconName: "MakeshiftSubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 550,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftSubmachineGun",
      MagazineSize: 24,
      SneakAttackRate: 1,
    },
    attack: 100,
    technology: 26,
    ammo: "Coarse Ammo",
  },
  {
    id: 146,
    name: "SMG",
    rarity: "Common",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 130,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 2000,
      Code: "SubmachineGun",
      IconName: "SubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 560,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SubmachineGun",
      MagazineSize: 24,
      SneakAttackRate: 1,
    },
    attack: 130,
    technology: 37,
    ammo: "Handgun Ammo",
  },
  {
    id: 147,
    name: "Makeshift Shotgun",
    rarity: "Common",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 55200,
      Attack: 215,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 200,
      Code: "MakeshiftShotgun",
      IconName: "MakeshiftShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 400,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftShotgun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 215,
    technology: 30,
    ammo: "Coarse Ammo",
  },
  {
    id: 148,
    name: "Laser Gatling Gun",
    rarity: "Uncommon",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 220,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 400,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 583,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 12000,
      Code: "LaserGatlingGun_2",
      IconName: "LaserGatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 701,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserGatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 583,
    ammo: "Laser Gatling Cartridge",
  },
  {
    id: 149,
    name: "Laser Gatling Gun",
    rarity: "Rare",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 330,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 300,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 600,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 609,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 16000,
      Code: "LaserGatlingGun_3",
      IconName: "LaserGatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 702,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserGatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 609,
    ammo: "Laser Gatling Cartridge",
  },
  {
    id: 150,
    name: "Laser Gatling Gun",
    rarity: "Epic",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 495,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 450,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 900,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 636,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 24000,
      Code: "LaserGatlingGun_4",
      IconName: "LaserGatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 703,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserGatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 636,
    ammo: "Laser Gatling Cartridge",
  },
  {
    id: 151,
    name: "Laser Gatling Gun",
    rarity: "Legendary",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 742,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 675,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 1350,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 689,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 32000,
      Code: "LaserGatlingGun_5",
      IconName: "LaserGatlingGun",
      TypeA: "Weapon",
      TypeB: "WeaponGatlingGun",
      SortID: 704,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "LaserGatlingGun",
      MagazineSize: 100,
      SneakAttackRate: 1,
    },
    attack: 689,
    ammo: "Laser Gatling Cartridge",
  },
  {
    id: 152,
    name: "Plasma Cannon",
    rarity: "Uncommon",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 300,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 260,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 400,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 11000,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 450,
      Code: "EnergyRocketLauncher_2",
      IconName: "EnergyRocketLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 711,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "EnergyRocketLauncher",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 11000,
    ammo: "Plasma Cartridge",
  },
  {
    id: 153,
    name: "Plasma Cannon",
    rarity: "Rare",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 450,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 390,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 600,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 300,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 11500,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 600,
      Code: "EnergyRocketLauncher_3",
      IconName: "EnergyRocketLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 712,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "EnergyRocketLauncher",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 11500,
    ammo: "Plasma Cartridge",
  },
  {
    id: 154,
    name: "Plasma Cannon",
    rarity: "Epic",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 675,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 585,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 900,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 450,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 12000,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 900,
      Code: "EnergyRocketLauncher_4",
      IconName: "EnergyRocketLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 713,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "EnergyRocketLauncher",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 12000,
    ammo: "Plasma Cartridge",
  },
  {
    id: 155,
    name: "Plasma Cannon",
    rarity: "Legendary",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 1012,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 877,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 1350,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 675,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 1,
      GoldCoin: 324000,
      Attack: 13000,
      Weight: 50,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "EnergyRocketLauncher_5",
      IconName: "EnergyRocketLauncher",
      TypeA: "Weapon",
      TypeB: "WeaponRocketLauncher",
      SortID: 714,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "EnergyRocketLauncher",
      MagazineSize: 2,
      SneakAttackRate: 1,
    },
    attack: 13000,
    ammo: "Plasma Cartridge",
  },
  {
    id: 156,
    name: "Compound Bow",
    rarity: "Common",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 25200,
      Attack: 1100,
      Weight: 17,
      MaxStackCount: 1,
      Durability: 400,
      Code: "CompoundBow",
      IconName: "CompoundBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 250,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "CompoundBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1100,
    technology: 32,
    ammo: "Reinforced Arrow",
  },
  {
    id: 157,
    name: "Advanced Bow",
    rarity: "Common",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_NightStone.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 25200,
      Attack: 5800,
      Weight: 25,
      MaxStackCount: 1,
      Durability: 500,
      Code: "SFBow",
      IconName: "SFBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 255,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SFBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 5800,
    technology: 57,
    ammo: "Advanced Arrow",
  },
  {
    id: 158,
    name: "Semi-Auto Shotgun",
    rarity: "Uncommon",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 153600,
      Attack: 214,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 450,
      Code: "SemiAutoShotgun_2",
      IconName: "SemiAutoShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 431,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoShotgun",
      MagazineSize: 11,
      SneakAttackRate: 1,
    },
    attack: 214,
    ammo: "Shotgun Shell",
  },
  {
    id: 159,
    name: "Semi-Auto Shotgun",
    rarity: "Rare",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 153600,
      Attack: 234,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 600,
      Code: "SemiAutoShotgun_3",
      IconName: "SemiAutoShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 432,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoShotgun",
      MagazineSize: 12,
      SneakAttackRate: 1,
    },
    attack: 234,
    ammo: "Shotgun Shell",
  },
  {
    id: 160,
    name: "Semi-Auto Shotgun",
    rarity: "Epic",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 153600,
      Attack: 253,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 900,
      Code: "SemiAutoShotgun_4",
      IconName: "SemiAutoShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 433,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoShotgun",
      MagazineSize: 13,
      SneakAttackRate: 1,
    },
    attack: 253,
    ammo: "Shotgun Shell",
  },
  {
    id: 161,
    name: "Semi-Auto Shotgun",
    rarity: "Legendary",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 153600,
      Attack: 282,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "SemiAutoShotgun_5",
      IconName: "SemiAutoShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 434,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoShotgun",
      MagazineSize: 14,
      SneakAttackRate: 1,
    },
    attack: 282,
    ammo: "Shotgun Shell",
  },
  {
    id: 162,
    name: "Old Revolver",
    rarity: "Uncommon",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 33000,
      Attack: 1050,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 600,
      Code: "OldRevolver_2",
      IconName: "OldRevolver",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 331,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "OldRevolver",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 1050,
    ammo: "Handgun Ammo",
  },
  {
    id: 163,
    name: "Old Revolver",
    rarity: "Rare",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 240,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 33000,
      Attack: 1200,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 800,
      Code: "OldRevolver_3",
      IconName: "OldRevolver",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 332,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "OldRevolver",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 1200,
    ammo: "Handgun Ammo",
  },
  {
    id: 164,
    name: "Old Revolver",
    rarity: "Epic",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 480,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 160,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 33000,
      Attack: 1350,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "OldRevolver_4",
      IconName: "OldRevolver",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 333,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "OldRevolver",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 1350,
    ammo: "Handgun Ammo",
  },
  {
    id: 165,
    name: "Old Revolver",
    rarity: "Legendary",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 960,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 320,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 33000,
      Attack: 1500,
      Weight: 8,
      MaxStackCount: 1,
      Durability: 1600,
      Code: "OldRevolver_5",
      IconName: "OldRevolver",
      TypeA: "Weapon",
      TypeB: "WeaponHandgun",
      SortID: 334,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "OldRevolver",
      MagazineSize: 6,
      SneakAttackRate: 1,
    },
    attack: 1500,
    ammo: "Handgun Ammo",
  },
  {
    id: 166,
    name: "Makeshift Assault Rifle",
    rarity: "Uncommon",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 140,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 204,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 2250,
      Code: "MakeshiftAssaultRifle_2",
      IconName: "MakeshiftAssaultRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 531,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftAssaultRifle",
      MagazineSize: 17,
      SneakAttackRate: 1,
    },
    attack: 204,
    ammo: "Coarse Ammo",
  },
  {
    id: 167,
    name: "Makeshift Assault Rifle",
    rarity: "Rare",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 210,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 229,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "MakeshiftAssaultRifle_3",
      IconName: "MakeshiftAssaultRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 532,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftAssaultRifle",
      MagazineSize: 19,
      SneakAttackRate: 1,
    },
    attack: 229,
    ammo: "Coarse Ammo",
  },
  {
    id: 168,
    name: "Makeshift Assault Rifle",
    rarity: "Epic",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 315,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 255,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 4500,
      Code: "MakeshiftAssaultRifle_4",
      IconName: "MakeshiftAssaultRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 533,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftAssaultRifle",
      MagazineSize: 21,
      SneakAttackRate: 1,
    },
    attack: 255,
    ammo: "Coarse Ammo",
  },
  {
    id: 169,
    name: "Makeshift Assault Rifle",
    rarity: "Legendary",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 472,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 405,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 32,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 297,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 6000,
      Code: "MakeshiftAssaultRifle_5",
      IconName: "MakeshiftAssaultRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 534,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftAssaultRifle",
      MagazineSize: 23,
      SneakAttackRate: 1,
    },
    attack: 297,
    ammo: "Coarse Ammo",
  },
  {
    id: 170,
    name: "Semi-Auto Rifle",
    rarity: "Uncommon",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 70,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 1265,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 1500,
      Code: "SemiAutoRifle_2",
      IconName: "SemiAutoRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 521,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoRifle",
      MagazineSize: 9,
      SneakAttackRate: 1,
    },
    attack: 1265,
    ammo: "Rifle Ammo",
  },
  {
    id: 171,
    name: "Semi-Auto Rifle",
    rarity: "Rare",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 105,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 1380,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 2000,
      Code: "SemiAutoRifle_3",
      IconName: "SemiAutoRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 522,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoRifle",
      MagazineSize: 10,
      SneakAttackRate: 1,
    },
    attack: 1380,
    ammo: "Rifle Ammo",
  },
  {
    id: 172,
    name: "Semi-Auto Rifle",
    rarity: "Epic",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 157,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 1495,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "SemiAutoRifle_4",
      IconName: "SemiAutoRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 523,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoRifle",
      MagazineSize: 11,
      SneakAttackRate: 1,
    },
    attack: 1495,
    ammo: "Rifle Ammo",
  },
  {
    id: 173,
    name: "Semi-Auto Rifle",
    rarity: "Legendary",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 235,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 37600,
      Attack: 1610,
      Weight: 20,
      MaxStackCount: 1,
      Durability: 4000,
      Code: "SemiAutoRifle_5",
      IconName: "SemiAutoRifle",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 524,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SemiAutoRifle",
      MagazineSize: 12,
      SneakAttackRate: 1,
    },
    attack: 1610,
    ammo: "Rifle Ammo",
  },
  {
    id: 174,
    name: "Makeshift SMG",
    rarity: "Uncommon",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 20,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 120,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 1500,
      Code: "MakeshiftSubmachineGun_2",
      IconName: "MakeshiftSubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 551,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftSubmachineGun",
      MagazineSize: 26,
      SneakAttackRate: 1,
    },
    attack: 120,
    ammo: "Coarse Ammo",
  },
  {
    id: 175,
    name: "Makeshift SMG",
    rarity: "Rare",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 135,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 2000,
      Code: "MakeshiftSubmachineGun_3",
      IconName: "MakeshiftSubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 552,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftSubmachineGun",
      MagazineSize: 28,
      SneakAttackRate: 1,
    },
    attack: 135,
    ammo: "Coarse Ammo",
  },
  {
    id: 176,
    name: "Makeshift SMG",
    rarity: "Epic",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 150,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "MakeshiftSubmachineGun_4",
      IconName: "MakeshiftSubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 553,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftSubmachineGun",
      MagazineSize: 30,
      SneakAttackRate: 1,
    },
    attack: 150,
    ammo: "Coarse Ammo",
  },
  {
    id: 177,
    name: "Makeshift SMG",
    rarity: "Legendary",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 202,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 24,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 82400,
      Attack: 175,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 4000,
      Code: "MakeshiftSubmachineGun_5",
      IconName: "MakeshiftSubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 554,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftSubmachineGun",
      MagazineSize: 32,
      SneakAttackRate: 1,
    },
    attack: 175,
    ammo: "Coarse Ammo",
  },
  {
    id: 178,
    name: "SMG",
    rarity: "Uncommon",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 50,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 12,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 156,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 3000,
      Code: "SubmachineGun_2",
      IconName: "SubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 561,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SubmachineGun",
      MagazineSize: 26,
      SneakAttackRate: 1,
    },
    attack: 156,
    ammo: "Handgun Ammo",
  },
  {
    id: 179,
    name: "SMG",
    rarity: "Rare",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 75,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 18,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 175,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 4000,
      Code: "SubmachineGun_3",
      IconName: "SubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 562,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SubmachineGun",
      MagazineSize: 28,
      SneakAttackRate: 1,
    },
    attack: 175,
    ammo: "Handgun Ammo",
  },
  {
    id: 180,
    name: "SMG",
    rarity: "Epic",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 112,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 27,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 195,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 6000,
      Code: "SubmachineGun_4",
      IconName: "SubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 563,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SubmachineGun",
      MagazineSize: 30,
      SneakAttackRate: 1,
    },
    attack: 195,
    ammo: "Handgun Ammo",
  },
  {
    id: 181,
    name: "SMG",
    rarity: "Legendary",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 168,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 82400,
      Attack: 227,
      Weight: 15,
      MaxStackCount: 1,
      Durability: 8000,
      Code: "SubmachineGun_5",
      IconName: "SubmachineGun",
      TypeA: "Weapon",
      TypeB: "WeaponAssaultRifle",
      SortID: 564,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SubmachineGun",
      MagazineSize: 32,
      SneakAttackRate: 1,
    },
    attack: 227,
    ammo: "Handgun Ammo",
  },
  {
    id: 182,
    name: "Makeshift Shotgun",
    rarity: "Uncommon",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 30,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 55200,
      Attack: 258,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 300,
      Code: "MakeshiftShotgun_2",
      IconName: "MakeshiftShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 401,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftShotgun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 258,
    ammo: "Coarse Ammo",
  },
  {
    id: 183,
    name: "Makeshift Shotgun",
    rarity: "Rare",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 45,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 150,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 55200,
      Attack: 290,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 400,
      Code: "MakeshiftShotgun_3",
      IconName: "MakeshiftShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 402,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftShotgun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 290,
    ammo: "Coarse Ammo",
  },
  {
    id: 184,
    name: "Makeshift Shotgun",
    rarity: "Epic",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 67,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 225,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 55200,
      Attack: 322,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 600,
      Code: "MakeshiftShotgun_4",
      IconName: "MakeshiftShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 403,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftShotgun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 322,
    ammo: "Coarse Ammo",
  },
  {
    id: 185,
    name: "Makeshift Shotgun",
    rarity: "Legendary",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 405,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 337,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 32,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 55200,
      Attack: 376,
      Weight: 24,
      MaxStackCount: 1,
      Durability: 800,
      Code: "MakeshiftShotgun_5",
      IconName: "MakeshiftShotgun",
      TypeA: "Weapon",
      TypeB: "WeaponShotgun",
      SortID: 404,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "MakeshiftShotgun",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 376,
    ammo: "Coarse Ammo",
  },
  {
    id: 186,
    name: "Meowmere",
    rarity: "Legendary",
    description:
      "[Terraria Collab]\r\nAccording to the legend, this sword was brought back from a distant land by Croajiro.\r\nWhy? We have no idea...",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_YakushimaBlade.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_YakushimaBlade.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Coal",
        quantity: 22,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Coal.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Coal.webp",
      },
      {
        name: "Predator Core",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PredatorCrystal.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_PredatorCrystal.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 2,
      GoldCoin: 200,
      Attack: 200,
      Weight: 22,
      MaxStackCount: 1,
      Durability: 2222,
      Code: "YakushimaBlade",
      IconName: "YakushimaBlade",
      TypeA: "Weapon",
      TypeB: "WeaponMelee",
      SortID: 143,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "YakushimaBlade",
      SneakAttackRate: 1,
    },
    attack: 200,
    technology: 30,
  },
  {
    id: 187,
    name: "Advanced Bow",
    rarity: "Uncommon",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_NightStone.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 25200,
      Attack: 6670,
      Weight: 25,
      MaxStackCount: 1,
      Durability: 750,
      Code: "SFBow_2",
      IconName: "SFBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 256,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SFBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 6670,
    ammo: "Advanced Arrow",
  },
  {
    id: 188,
    name: "Advanced Bow",
    rarity: "Rare",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 120,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 300,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 60,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_NightStone.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 25200,
      Attack: 7250,
      Weight: 25,
      MaxStackCount: 1,
      Durability: 1000,
      Code: "SFBow_3",
      IconName: "SFBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 257,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SFBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 7250,
    ammo: "Advanced Arrow",
  },
  {
    id: 189,
    name: "Advanced Bow",
    rarity: "Epic",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 180,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 450,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 90,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_NightStone.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 25200,
      Attack: 7830,
      Weight: 25,
      MaxStackCount: 1,
      Durability: 1500,
      Code: "SFBow_4",
      IconName: "SFBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 258,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SFBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 7830,
    ammo: "Advanced Arrow",
  },
  {
    id: 190,
    name: "Advanced Bow",
    rarity: "Legendary",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 270,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 675,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 135,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_NightStone.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 4,
      GoldCoin: 25200,
      Attack: 8700,
      Weight: 25,
      MaxStackCount: 1,
      Durability: 2000,
      Code: "SFBow_5",
      IconName: "SFBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 259,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "SFBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 8700,
    ammo: "Advanced Arrow",
  },
  {
    id: 191,
    name: "Compound Bow",
    rarity: "Uncommon",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 100,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 40,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 25200,
      Attack: 1265,
      Weight: 17,
      MaxStackCount: 1,
      Durability: 600,
      Code: "CompoundBow_2",
      IconName: "CompoundBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 251,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "CompoundBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1265,
    ammo: "Reinforced Arrow",
  },
  {
    id: 192,
    name: "Compound Bow",
    rarity: "Rare",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 200,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 160,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 80,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 25200,
      Attack: 1375,
      Weight: 17,
      MaxStackCount: 1,
      Durability: 800,
      Code: "CompoundBow_3",
      IconName: "CompoundBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 252,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "CompoundBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1375,
    ammo: "Reinforced Arrow",
  },
  {
    id: 193,
    name: "Compound Bow",
    rarity: "Epic",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 400,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 320,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 160,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 25200,
      Attack: 1485,
      Weight: 17,
      MaxStackCount: 1,
      Durability: 1200,
      Code: "CompoundBow_4",
      IconName: "CompoundBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 253,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "CompoundBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1485,
    ammo: "Reinforced Arrow",
  },
  {
    id: 194,
    name: "Compound Bow",
    rarity: "Legendary",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/weapons/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 800,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 640,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 320,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Material_MachineParts.webp",
      },
    ],
    stats: {
      Rarity: "Legendary",
      Type: "Weapon",
      Rank: 3,
      GoldCoin: 25200,
      Attack: 1650,
      Weight: 17,
      MaxStackCount: 1,
      Durability: 1600,
      Code: "CompoundBow_5",
      IconName: "CompoundBow",
      TypeA: "Weapon",
      TypeB: "WeaponBow",
      SortID: 254,
      ItemStaticClass: "CommonWeapon",
      ItemDynamicClass: "CommonWeapon",
      ItemActorClass: "CompoundBow",
      MagazineSize: 1,
      SneakAttackRate: 1,
    },
    attack: 1650,
    ammo: "Reinforced Arrow",
  },
];
