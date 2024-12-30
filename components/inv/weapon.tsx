export const weaponDataSet = [
  {
    ID: 1,
    name: "Assault Rifle",
    rarity: "Common",
    attack: 320,
    technology: 45,
    ammo: "Assault Rifle Ammo",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image: require("../../assets/images/items/assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 30,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
  },
  {
    ID: 2,
    name: "Stone Axe",
    rarity: "Common",
    attack: 20,
    technology: 1,
    description:
      "An axe for cutting wood.\r\nMade from stone, it's not very sharp.",
    image: require("../../assets/images/items/stone-axe.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Axe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 5,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 5,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
    ],
  },
  {
    ID: 3,
    name: "Metal Axe",
    rarity: "Common",
    attack: 30,
    technology: 11,
    description:
      "An axe for cutting wood.\r\nMade from metal, its sharpness has improved.",
    image: require("../../assets/images/items/metal-axe.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Axe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 15,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ingot",
        quantity: 5,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
    ],
  },
  {
    ID: 4,
    name: "Refined Metal Axe",
    rarity: "Common",
    attack: 60,
    technology: 34,
    description:
      "An axe for cutting wood.\r\nMade from high quality metal, its sharpness has improved even further.",
    image: require("../../assets/images/items/refined-metal-axe.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Axe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 30,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 40,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 10,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
    ],
  },
  {
    ID: 5,
    name: "Metal Detector",
    rarity: "Common",
    technology: 56,
    description:
      "Holding it allows you to detect hidden ores nearby.\r\nIt marks the metal when close to the ore, but the mark disappears if you move away.",
    image: require("../../assets/images/items/metal-detector.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Essential_MetalDetector.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 30,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 100,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Circuit Board",
        quantity: 30,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 20,
        image: require("../../assets/images/items/nightstar-sand.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
      },
    ],
  },
  {
    ID: 6,
    name: "Wooden Club",
    rarity: "Common",
    attack: 25,
    technology: 1,
    description:
      "A Wooden Club for close range combat.\r\nCan beat a small Pal to a pulp if need be.",
    image: require("../../assets/images/items/wooden-club.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Bat.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 5,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
    ],
  },
  {
    ID: 7,
    name: "Bat",
    rarity: "Common",
    attack: 50,
    technology: 7,
    description:
      "Baseball bat for close-range combat.\r\nMight be tough to get a home run with a Pal.",
    image: require("../../assets/images/items/bat.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_Bat2.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 30,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
  },
  {
    ID: 8,
    name: "Meat Cleaver",
    rarity: "Common",
    attack: 25,
    technology: 12,
    description:
      "Knife for butchering Pals.\r\nWhen equipped, the Pet command becomes Butcher.\r\nButchered Pals will be gone for good.",
    image: require("../../assets/images/items/meat-cleaver.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MeatCutterKnife.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 5,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 5,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
  },
  {
    ID: 9,
    name: "Stun Baton",
    rarity: "Common",
    attack: 10,
    technology: 22,
    description:
      "Close range weapon that sends out an electric jolt upon contact.\r\nPals are easier to capture when electrocuted.",
    image: require("../../assets/images/items/stun-baton.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_ElecBaton.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 20,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Electric Organ",
        quantity: 20,
        image: require("../../assets/images/items/electric-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
      },
    ],
  },
  {
    ID: 10,
    name: "Crossbow",
    rarity: "Common",
    attack: 280,
    technology: 13,
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image: require("../../assets/images/items/crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 40,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 10,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 5,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
    ],
  },
  {
    ID: 11,
    name: "Double-Barreled Shotgun",
    rarity: "Common",
    attack: 190,
    technology: 39,
    ammo: "Shotgun Shell",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image: require("../../assets/images/items/double-barreled-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 30,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 7,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
    ],
  },
  {
    ID: 12,
    name: "Handgun",
    rarity: "Common",
    attack: 250,
    technology: 28,
    ammo: "Handgun Ammo",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image: require("../../assets/images/items/handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 50,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 15,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
    ],
  },
  {
    ID: 13,
    name: "Decal Gun 1",
    rarity: "Common",
    technology: 44,
    ammo: "Decal Ink",
    description:
      "Strange gun that paints a picture of Cattiva where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image: require("../../assets/images/items/decal-gun-1.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 14,
    name: "Decal Gun 2",
    rarity: "Common",
    technology: 44,
    ammo: "Decal Ink",
    description:
      "Strange gun that paints a picture of Lamball where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image: require("../../assets/images/items/decal-gun-2.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 15,
    name: "Decal Gun 3",
    rarity: "Common",
    technology: 44,
    ammo: "Decal Ink",
    description:
      "Strange gun that paints a picture of Melpaca where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image: require("../../assets/images/items/decal-gun-3.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 16,
    name: "Decal Gun 4",
    rarity: "Common",
    technology: 44,
    ammo: "Decal Ink",
    description:
      "Strange gun that paints a picture of Anubis where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image: require("../../assets/images/items/decal-gun-4.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 17,
    name: "Decal Gun 5",
    rarity: "Common",
    technology: 44,
    ammo: "Decal Ink",
    description:
      "Strange gun that paints a picture of Relaxaurus where it is fired.\r\nHave some fun and paint the walls or ceilings!",
    image: require("../../assets/images/items/decal-gun-5.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DecalGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 15,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 18,
    name: "Homing Sphere Launcher",
    rarity: "Common",
    technology: 55,
    description:
      "A launcher for firing spheres.\r\nFired spheres home in on Pals.",
    image: require("../../assets/images/items/homing-sphere-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HomingSphereLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 100,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 50,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 200,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 50,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 19,
    name: "Laser Rifle",
    rarity: "Common",
    attack: 1250,
    technology: 51,
    ammo: "Energy Cartridge",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image: require("../../assets/images/items/laser-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 50,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 60,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 40,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
  },
  {
    ID: 20,
    name: "Rocket Launcher",
    rarity: "Common",
    attack: 10000,
    technology: 49,
    ammo: "Rocket Ammo",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image: require("../../assets/images/items/rocket-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 75,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 30,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 50,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
  },
  {
    ID: 21,
    name: "Stone Pickaxe",
    rarity: "Common",
    attack: 20,
    technology: 1,
    description:
      "A pickaxe used for mining.\r\nMade from stone, the efficiency is questionable.",
    image: require("../../assets/images/items/stone-pickaxe.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Pickaxe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 5,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 5,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
    ],
  },
  {
    ID: 22,
    name: "Metal Pickaxe",
    rarity: "Common",
    attack: 30,
    technology: 11,
    description:
      "A pickaxe used for mining.\r\nMade from metal, its durability and efficiency have improved.",
    image: require("../../assets/images/items/metal-pickaxe.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Pickaxe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 15,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ingot",
        quantity: 5,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
    ],
  },
  {
    ID: 23,
    name: "Refined Metal Pickaxe",
    rarity: "Common",
    attack: 60,
    technology: 34,
    description:
      "A pickaxe used for mining.\r\nIts durability and efficiency have further improved.",
    image: require("../../assets/images/items/refined-metal-pickaxe.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Pickaxe_Tier_00.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 30,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 40,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 10,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
    ],
  },
  {
    ID: 24,
    name: "Pump-Action Shotgun",
    rarity: "Common",
    attack: 220,
    technology: 43,
    ammo: "Shotgun Shell",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image: require("../../assets/images/items/pump-action-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 30,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 40,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
  },
  {
    ID: 25,
    name: "Single-Shot Rifle",
    rarity: "Common",
    attack: 1100,
    technology: 36,
    ammo: "Rifle Ammo",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image: require("../../assets/images/items/single-shot-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 20,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 5,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
    ],
  },
  {
    ID: 26,
    name: "Scatter Sphere Launcher",
    rarity: "Common",
    technology: 37,
    description:
      "A new type of launcher that fires a large number of spheres.\r\nIt can easily capture a herd of Pals.",
    image: require("../../assets/images/items/scatter-sphere-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SphereLauncher.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 50,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 15,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 50,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 30,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 27,
    name: "Single-Shot Sphere Launcher",
    rarity: "Common",
    technology: 27,
    description:
      "A launcher that fires spheres.\r\nIt can capture Pals fom a greater distance.",
    image: require("../../assets/images/items/single-shot-sphere-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SphereLauncher_Once.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 50,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Stone",
        quantity: 100,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 50,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 28,
    name: "Sword",
    rarity: "Common",
    attack: 525,
    technology: 44,
    description:
      "Sword for close-range combat.\r\nThe blade is extremely sharp! Mightier than a pen, for sure.\r\nRequires Weapon Workbench to craft.",
    image: require("../../assets/images/items/sword.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Sword.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 30,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 20,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
  },
  {
    ID: 29,
    name: "Frag Grenade",
    rarity: "Common",
    attack: 750,
    technology: 25,
    description:
      "A Frag Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing damage to enemies.",
    image: require("../../assets/images/items/frag-grenade.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Gunpowder",
        quantity: 1,
        image: require("../../assets/images/items/gunpowder.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
      },
    ],
  },
  {
    ID: 30,
    name: "Incendiary Grenade",
    rarity: "Common",
    attack: 750,
    technology: 31,
    description:
      "A Incendiary Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, setting the surrounding area on fire.",
    image: require("../../assets/images/items/incendiary-grenade.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Fire.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Flame Organ",
        quantity: 1,
        image: require("../../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
  },
  {
    ID: 31,
    name: "Shock Grenade",
    rarity: "Common",
    attack: 750,
    technology: 27,
    description:
      "A Shock Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, electrocuting everything in the blast radius.",
    image: require("../../assets/images/items/shock-grenade.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Elec.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Electric Organ",
        quantity: 1,
        image: require("../../assets/images/items/electric-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectricOrgan.webp",
      },
    ],
  },
  {
    ID: 32,
    name: "Ice Grenade",
    rarity: "Common",
    attack: 750,
    technology: 29,
    description:
      "A Ice Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, freezing the surrounding area.",
    image: require("../../assets/images/items/ice-grenade.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Ice.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ice Organ",
        quantity: 1,
        image: require("../../assets/images/items/ice-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IceOrgan.webp",
      },
    ],
  },
  {
    ID: 33,
    name: "Old Bow",
    rarity: "Common",
    attack: 65,
    technology: 3,
    ammo: "Arrow",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image: require("../../assets/images/items/old-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 30,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 5,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 15,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
    ],
  },
  {
    ID: 34,
    name: "Poison Bow",
    rarity: "Common",
    attack: 65,
    technology: 8,
    description:
      "Frightening bow that poisons its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image: require("../../assets/images/items/poison-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Bow_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 40,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 8,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 20,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Venom Gland",
        quantity: 2,
        image: require("../../assets/images/items/venom-gland.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Venom.webp",
      },
    ],
  },
  {
    ID: 35,
    name: "Fire Bow",
    rarity: "Common",
    attack: 65,
    technology: 5,
    ammo: "Fire Arrow",
    description:
      "A bow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image: require("../../assets/images/items/fire-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Bow_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 40,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 8,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 20,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 2,
        image: require("../../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
  },
  {
    ID: 36,
    name: "Poison Arrow Crossbow",
    rarity: "Common",
    attack: 280,
    technology: 17,
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image: require("../../assets/images/items/poison-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 50,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 15,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 5,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Venom Gland",
        quantity: 5,
        image: require("../../assets/images/items/venom-gland.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Venom.webp",
      },
    ],
  },
  {
    ID: 37,
    name: "Fire Arrow Crossbow",
    rarity: "Common",
    attack: 280,
    technology: 15,
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image: require("../../assets/images/items/fire-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 50,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 15,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 5,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Flame Organ",
        quantity: 5,
        image: require("../../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
  },
  {
    ID: 38,
    name: "Three Shot Bow",
    rarity: "Common",
    attack: 40,
    technology: 10,
    ammo: "Arrow",
    description:
      "An enhanced bow that allows three arrows to be fired simultaneously.\r\nBy some strange mechanism, it only consumes a single Arrow when fired.",
    image: require("../../assets/images/items/three-shot-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Bow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 50,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 12,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
    ],
  },
  {
    ID: 39,
    name: "Hand-Held Torch",
    rarity: "Common",
    attack: 10,
    technology: 1,
    description:
      "Lights up dark areas and keeps you warm.\r\nCan also be used for close range combat in a pinch.",
    image: require("../../assets/images/items/hand-held-torch.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Torch.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 2,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 2,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
  },
  {
    ID: 40,
    name: "Makeshift Handgun",
    rarity: "Common",
    attack: 320,
    technology: 24,
    ammo: "Coarse Ammo",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image: require("../../assets/images/items/makeshift-handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 35,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 10,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
    ],
  },
  {
    ID: 41,
    name: "Stone Spear",
    rarity: "Common",
    attack: 35,
    technology: 4,
    description:
      "Useful for close-range combat.\r\nIts length allows you to stand further away when attacking.",
    image: require("../../assets/images/items/stone-spear.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_Tier_00.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 18,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 6,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
  },
  {
    ID: 42,
    name: "Metal Spear",
    rarity: "Common",
    attack: 80,
    technology: 13,
    description:
      "Useful for close-range combat.\r\nThe metal tip give it an increased attack power.\r\nIts length allows you to stand further away when attacking.",
    image: require("../../assets/images/items/metal-spear.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_Tier_00.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 27,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 12,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 10,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
    ],
  },
  {
    ID: 43,
    name: "Refined Metal Spear",
    rarity: "Common",
    attack: 310,
    technology: 34,
    description:
      "Useful for close-range combat.\r\nThe high-quality metal tip give it an increased attack power.\r\nIts length allows you to stand further away when attacking.",
    image: require("../../assets/images/items/refined-metal-spear.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_Tier_00.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 36,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 18,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 10,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
    ],
  },
  {
    ID: 44,
    name: "Elizabee's Staff",
    rarity: "Uncommon",
    attack: 150,
    description:
      "A spear made from Elizabee's staff, altered for human use.\r\nIt is imbued with Elizabee's indomitable spirit.",
    image: require("../../assets/images/items/elizabee-s-staff.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_QueenBee.webp",
    recipe: [],
  },
  {
    ID: 45,
    name: "Lily's Spear",
    rarity: "Rare",
    attack: 450,
    technology: 43,
    description:
      "The spear cherished by Lily.\r\nPunishes those who neglect their Pals.",
    image: require("../../assets/images/items/lily's-spear.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Spear_ForestBoss.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 20,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 30,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "High Quality Cloth",
        quantity: 20,
        image: require("../../assets/images/items/high-quality-cloth.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Cloth.webp",
      },
      {
        name: "Wood",
        quantity: 50,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 46,
    name: "Grappling Gun",
    rarity: "Common",
    technology: 12,
    description:
      "It fires a hook that latches on to distant targets, pulling the user's body towards the target.\r\nIt allows for easy movement between places with varying elevation.",
    image: require("../../assets/images/items/grappling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrapplingGun.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 10,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ingot",
        quantity: 10,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 1,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 47,
    name: "Mega Grappling Gun",
    rarity: "Uncommon",
    technology: 17,
    description:
      "It fires a hook that latches on to distant targets, pulling the user's body towards the target.\r\nSince it's upgraded, it now has greater range.",
    image: require("../../assets/images/items/grappling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrapplingGun.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 20,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ingot",
        quantity: 20,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 50,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 48,
    name: "Giga Grappling Gun",
    rarity: "Rare",
    technology: 31,
    description:
      "It fires a hook that latches on to distant targets, pulling the user's body towards the target.\r\nUsing data from prototype versions, its capabilities have been further increased.",
    image: require("../../assets/images/items/grappling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrapplingGun.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 30,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 80,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 49,
    name: "Hyper Grappling Gun",
    rarity: "Epic",
    technology: 48,
    description:
      "It fires a hook that latches on to distant targets, pulling the user's body towards the target.\r\nAs a result of research, it has achieved overwhelming mobility.",
    image: require("../../assets/images/items/grappling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrapplingGun.webp",
    recipe: [
      {
        name: "Paldium Fragment",
        quantity: 40,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 30,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 20,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 50,
    name: "Musket",
    rarity: "Common",
    attack: 1000,
    technology: 21,
    ammo: "Coarse Ammo",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image: require("../../assets/images/items/musket.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 25,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 5,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 30,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
    ],
  },
  {
    ID: 51,
    name: "Old Bow",
    rarity: "Uncommon",
    attack: 130,
    ammo: "Arrow",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image: require("../../assets/images/items/old-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 60,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 1,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 52,
    name: "Old Bow",
    rarity: "Rare",
    attack: 169,
    ammo: "Arrow",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image: require("../../assets/images/items/old-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 90,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 15,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 45,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 53,
    name: "Old Bow",
    rarity: "Epic",
    attack: 208,
    ammo: "Arrow",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image: require("../../assets/images/items/old-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 135,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 22,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 67,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 54,
    name: "Old Bow",
    rarity: "Legendary",
    attack: 247,
    ammo: "Arrow",
    description:
      "Primitive long range weapon.\r\nHastily put together, it isn't very powerful.",
    image: require("../../assets/images/items/old-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_WeakerBow.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 202,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 33,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Fiber",
        quantity: 100,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 55,
    name: "Crossbow",
    rarity: "Uncommon",
    attack: 364,
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image: require("../../assets/images/items/crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 100,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 80,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 20,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 10,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 56,
    name: "Crossbow",
    rarity: "Rare",
    attack: 406,
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image: require("../../assets/images/items/crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 150,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 120,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 15,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 57,
    name: "Crossbow",
    rarity: "Epic",
    attack: 448,
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image: require("../../assets/images/items/crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 225,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 180,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 45,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 22,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 58,
    name: "Crossbow",
    rarity: "Legendary",
    attack: 490,
    description:
      "Fires an Arrow effortlessly.\r\nThough it takes time to load, it delivers a powerful shot.",
    image: require("../../assets/images/items/crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 337,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 270,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 67,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 33,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 59,
    name: "Assault Rifle",
    rarity: "Uncommon",
    attack: 400,
    ammo: "Assault Rifle Ammo",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image: require("../../assets/images/items/assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 80,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 60,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 60,
    name: "Assault Rifle",
    rarity: "Rare",
    attack: 448,
    ammo: "Assault Rifle Ammo",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image: require("../../assets/images/items/assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 120,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 30,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 90,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 61,
    name: "Assault Rifle",
    rarity: "Epic",
    attack: 512,
    ammo: "Assault Rifle Ammo",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image: require("../../assets/images/items/assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 180,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 45,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 135,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 62,
    name: "Assault Rifle",
    rarity: "Legendary",
    attack: 560,
    ammo: "Assault Rifle Ammo",
    description:
      "Mows down enemies with overwhelming force.\r\nIt excels at rapid-fire and is well suited to taking down powerful foes.",
    image: require("../../assets/images/items/assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_AssaultRifle_Default1.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 270,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 67,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 202,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 63,
    name: "Pump-Action Shotgun",
    rarity: "Uncommon",
    attack: 275,
    ammo: "Shotgun Shell",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image: require("../../assets/images/items/pump-action-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 40,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 80,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 64,
    name: "Pump-Action Shotgun",
    rarity: "Rare",
    attack: 308,
    ammo: "Shotgun Shell",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image: require("../../assets/images/items/pump-action-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 60,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 65,
    name: "Pump-Action Shotgun",
    rarity: "Epic",
    attack: 352,
    ammo: "Shotgun Shell",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image: require("../../assets/images/items/pump-action-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 90,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 180,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 66,
    name: "Pump-Action Shotgun",
    rarity: "Legendary",
    attack: 385,
    ammo: "Shotgun Shell",
    description:
      "A high capacity, powerful shotgun.\r\nIt has outstanding close range DPS.",
    image: require("../../assets/images/items/pump-action-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_PumpActionShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 202,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 135,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 270,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 67,
    name: "Handgun",
    rarity: "Uncommon",
    attack: 437,
    ammo: "Handgun Ammo",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image: require("../../assets/images/items/handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 100,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 30,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 68,
    name: "Handgun",
    rarity: "Rare",
    attack: 500,
    ammo: "Handgun Ammo",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image: require("../../assets/images/items/handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 150,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 45,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 69,
    name: "Handgun",
    rarity: "Epic",
    attack: 562,
    ammo: "Handgun Ammo",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image: require("../../assets/images/items/handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 225,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 67,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 70,
    name: "Handgun",
    rarity: "Legendary",
    attack: 625,
    ammo: "Handgun Ammo",
    description:
      "A handgun with improved capacity and rapid-fire capabilities.\r\nHas more immediate firepower than a Makeshift Handgun.",
    image: require("../../assets/images/items/handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_HandGun_Default.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 337,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 100,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 71,
    name: "Rocket Launcher",
    rarity: "Uncommon",
    attack: 11000,
    ammo: "Rocket Ammo",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image: require("../../assets/images/items/rocket-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 60,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 100,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 72,
    name: "Rocket Launcher",
    rarity: "Rare",
    attack: 12000,
    ammo: "Rocket Ammo",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image: require("../../assets/images/items/rocket-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 225,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 90,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 150,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 73,
    name: "Rocket Launcher",
    rarity: "Epic",
    attack: 13000,
    ammo: "Rocket Ammo",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image: require("../../assets/images/items/rocket-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 337,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 135,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 225,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 74,
    name: "Rocket Launcher",
    rarity: "Legendary",
    attack: 14000,
    ammo: "Rocket Ammo",
    description:
      "A Rocket Launcher \r\nthat can fire a powerful round from long distances.",
    image: require("../../assets/images/items/rocket-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 505,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 202,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 337,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 75,
    name: "Musket",
    rarity: "Uncommon",
    attack: 1400,
    ammo: "Coarse Ammo",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image: require("../../assets/images/items/musket.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 50,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 10,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 60,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 76,
    name: "Musket",
    rarity: "Rare",
    attack: 1600,
    ammo: "Coarse Ammo",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image: require("../../assets/images/items/musket.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 75,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 15,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 90,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 77,
    name: "Musket",
    rarity: "Epic",
    attack: 1800,
    ammo: "Coarse Ammo",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image: require("../../assets/images/items/musket.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 112,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 22,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 135,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 7,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 78,
    name: "Musket",
    rarity: "Legendary",
    attack: 2000,
    ammo: "Coarse Ammo",
    description:
      "Simple, old fashioned gun. \r\nFires a single, powerful shot at the expense of a long reload time.",
    image: require("../../assets/images/items/musket.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Musket.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 168,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 33,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Wood",
        quantity: 202,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 14,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 79,
    name: "Double-Barreled Shotgun",
    rarity: "Uncommon",
    attack: 285,
    ammo: "Shotgun Shell",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image: require("../../assets/images/items/double-barreled-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 14,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 80,
    name: "Double-Barreled Shotgun",
    rarity: "Rare",
    attack: 323,
    ammo: "Shotgun Shell",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image: require("../../assets/images/items/double-barreled-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 21,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 81,
    name: "Double-Barreled Shotgun",
    rarity: "Epic",
    attack: 361,
    ammo: "Shotgun Shell",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image: require("../../assets/images/items/double-barreled-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 31,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 82,
    name: "Double-Barreled Shotgun",
    rarity: "Legendary",
    attack: 399,
    ammo: "Shotgun Shell",
    description:
      "Wreaks havoc at close range. Can fire twice before reloading.\r\nDespite the limited load capacity, it still packs a punch.",
    image: require("../../assets/images/items/double-barreled-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_DoubleBarrelShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 202,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 46,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 83,
    name: "Single-Shot Rifle",
    rarity: "Uncommon",
    attack: 1650,
    ammo: "Rifle Ammo",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image: require("../../assets/images/items/single-shot-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 40,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 84,
    name: "Single-Shot Rifle",
    rarity: "Rare",
    attack: 1870,
    ammo: "Rifle Ammo",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image: require("../../assets/images/items/single-shot-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 60,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 15,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 85,
    name: "Single-Shot Rifle",
    rarity: "Epic",
    attack: 2090,
    ammo: "Rifle Ammo",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image: require("../../assets/images/items/single-shot-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 90,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 22,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 86,
    name: "Single-Shot Rifle",
    rarity: "Legendary",
    attack: 2310,
    ammo: "Rifle Ammo",
    description:
      "A single-shot rifle. Takes time to load.\r\nWhat it lacks in capacity, it makes up for with sheer power.",
    image: require("../../assets/images/items/single-shot-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SingleShotRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 135,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 33,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 87,
    name: "Gatling Gun",
    rarity: "Common",
    attack: 375,
    technology: 54,
    ammo: "Gatling Gun Ammo",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image: require("../../assets/images/items/gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 100,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 140,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
  },
  {
    ID: 88,
    name: "Flamethrower",
    rarity: "Common",
    attack: 450,
    technology: 52,
    ammo: "Flamethrower Fuel",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image: require("../../assets/images/items/flamethrower.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 40,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 50,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 35,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 30,
        image: require("../../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
    ],
  },
  {
    ID: 89,
    name: "Grenade Launcher",
    rarity: "Common",
    attack: 3000,
    technology: 53,
    ammo: "Grenade Ammo",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image: require("../../assets/images/items/grenade-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 75,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 80,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 60,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
  },
  {
    ID: 90,
    name: "Guided Missile Launcher",
    rarity: "Common",
    attack: 5900,
    technology: 55,
    ammo: "Missile Ammo",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image: require("../../assets/images/items/guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 100,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 50,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 100,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 20,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
    ],
  },
  {
    ID: 91,
    name: "Multi Guided Missile Launcher",
    rarity: "Common",
    attack: 5900,
    ammo: "Missile Ammo",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image: require("../../assets/images/items/multi-guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 80,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 30,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
    ],
  },
  {
    ID: 92,
    name: "Laser Gatling Gun",
    rarity: "Common",
    attack: 530,
    technology: 58,
    ammo: "Laser Gatling Cartridge",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image: require("../../assets/images/items/laser-gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 150,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 100,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 200,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
  },
  {
    ID: 93,
    name: "Frag Grenade Mk2",
    rarity: "Common",
    attack: 4000,
    technology: 53,
    description:
      "An improved frag grenade.\r\nIt explodes a few seconds after being thrown, dealing massive damage to enemies.",
    image: require("../../assets/images/items/frag-grenade-mk2.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Super.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 20,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 3,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Gunpowder",
        quantity: 3,
        image: require("../../assets/images/items/gunpowder.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Gunpowder2.webp",
      },
      {
        name: "Crude Oil",
        quantity: 3,
        image: require("../../assets/images/items/crude-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CrudeOil.webp",
      },
    ],
  },
  {
    ID: 94,
    name: "Makeshift Handgun",
    rarity: "Uncommon",
    attack: 560,
    ammo: "Coarse Ammo",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image: require("../../assets/images/items/makeshift-handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 70,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 20,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 60,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 95,
    name: "Makeshift Handgun",
    rarity: "Rare",
    attack: 640,
    ammo: "Coarse Ammo",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image: require("../../assets/images/items/makeshift-handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 105,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 30,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 90,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 96,
    name: "Makeshift Handgun",
    rarity: "Epic",
    attack: 720,
    ammo: "Coarse Ammo",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image: require("../../assets/images/items/makeshift-handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 157,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 45,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 135,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 97,
    name: "Makeshift Handgun",
    rarity: "Legendary",
    attack: 800,
    ammo: "Coarse Ammo",
    description:
      "A handgun created from spare parts.\r\nRelatively well suited for close quarters combat, but can only fire one shot before needing to reload.",
    image: require("../../assets/images/items/makeshift-handgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftHandgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 235,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 67,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 202,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 98,
    name: "Laser Rifle",
    rarity: "Uncommon",
    attack: 1437,
    ammo: "Energy Cartridge",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image: require("../../assets/images/items/laser-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 100,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 120,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 80,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 99,
    name: "Laser Rifle",
    rarity: "Rare",
    attack: 1562,
    ammo: "Energy Cartridge",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image: require("../../assets/images/items/laser-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 180,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 100,
    name: "Laser Rifle",
    rarity: "Epic",
    attack: 1687,
    ammo: "Energy Cartridge",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image: require("../../assets/images/items/laser-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 225,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 270,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 180,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 101,
    name: "Laser Rifle",
    rarity: "Legendary",
    attack: 1875,
    ammo: "Energy Cartridge",
    description:
      "A weapon that fires high-energy lasers.\r\nIt has impressive firepower and is easy to handle.",
    image: require("../../assets/images/items/laser-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserRifle.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 337,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 405,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 270,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 102,
    name: "Flamethrower",
    rarity: "Uncommon",
    attack: 517,
    ammo: "Flamethrower Fuel",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image: require("../../assets/images/items/flamethrower.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 80,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 100,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 70,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 60,
        image: require("../../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 103,
    name: "Flamethrower",
    rarity: "Rare",
    attack: 562,
    ammo: "Flamethrower Fuel",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image: require("../../assets/images/items/flamethrower.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 120,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 150,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 105,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 90,
        image: require("../../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 104,
    name: "Flamethrower",
    rarity: "Epic",
    attack: 607,
    ammo: "Flamethrower Fuel",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image: require("../../assets/images/items/flamethrower.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 180,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 225,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 157,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 135,
        image: require("../../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 105,
    name: "Flamethrower",
    rarity: "Legendary",
    attack: 675,
    ammo: "Flamethrower Fuel",
    description:
      "Flamethrower that fires long-range flame.\r\nCan set the enemy on fire.",
    image: require("../../assets/images/items/flamethrower.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FlameThrower_Default.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 270,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 337,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 235,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Flame Organ",
        quantity: 202,
        image: require("../../assets/images/items/flame-organ.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_FireOrgan.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 106,
    name: "Grenade Launcher",
    rarity: "Uncommon",
    attack: 3450,
    ammo: "Grenade Ammo",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image: require("../../assets/images/items/grenade-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 150,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 160,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 107,
    name: "Grenade Launcher",
    rarity: "Rare",
    attack: 3750,
    ammo: "Grenade Ammo",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image: require("../../assets/images/items/grenade-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 225,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 240,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 180,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 108,
    name: "Grenade Launcher",
    rarity: "Epic",
    attack: 4050,
    ammo: "Grenade Ammo",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image: require("../../assets/images/items/grenade-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 337,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 360,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 270,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 109,
    name: "Grenade Launcher",
    rarity: "Legendary",
    attack: 4500,
    ammo: "Grenade Ammo",
    description:
      "Fires grenades that cause wide-ranging explosions.\r\nUseful when dealing with a large number of enemies.",
    image: require("../../assets/images/items/grenade-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GrenadeLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 505,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 540,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 405,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 110,
    name: "Guided Missile Launcher",
    rarity: "Uncommon",
    attack: 6785,
    ammo: "Missile Ammo",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image: require("../../assets/images/items/guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 200,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 100,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 200,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 40,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 111,
    name: "Guided Missile Launcher",
    rarity: "Rare",
    attack: 7375,
    ammo: "Missile Ammo",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image: require("../../assets/images/items/guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 300,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 150,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 300,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 60,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 112,
    name: "Guided Missile Launcher",
    rarity: "Epic",
    attack: 7965,
    ammo: "Missile Ammo",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image: require("../../assets/images/items/guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 450,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 225,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 450,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 90,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 113,
    name: "Guided Missile Launcher",
    rarity: "Legendary",
    attack: 8850,
    ammo: "Missile Ammo",
    description:
      "Fires missiles that automatically track and pursue enemies.\r\nMissiles explode upon impact, causing damage over a wide area.",
    image: require("../../assets/images/items/guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 675,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 337,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 675,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 135,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 114,
    name: "Multi Guided Missile Launcher",
    rarity: "Uncommon",
    attack: 6785,
    ammo: "Missile Ammo",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image: require("../../assets/images/items/multi-guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 300,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 160,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 240,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 60,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 115,
    name: "Multi Guided Missile Launcher",
    rarity: "Rare",
    attack: 7375,
    ammo: "Missile Ammo",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image: require("../../assets/images/items/multi-guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 450,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 240,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 360,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 90,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 116,
    name: "Multi Guided Missile Launcher",
    rarity: "Epic",
    attack: 7965,
    ammo: "Missile Ammo",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image: require("../../assets/images/items/multi-guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 675,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 360,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 540,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 135,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 40,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 117,
    name: "Multi Guided Missile Launcher",
    rarity: "Legendary",
    attack: 8850,
    ammo: "Missile Ammo",
    description:
      "A missile launcher that can hold multiple ammo at once.\r\nFires a series of missiles that automatically track and follow enemies.",
    image: require("../../assets/images/items/multi-guided-missile-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MultiGuidedMissileLauncher.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 1012,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 540,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 810,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 202,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 50,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 118,
    name: "Gatling Gun",
    rarity: "Uncommon",
    attack: 431,
    ammo: "Gatling Gun Ammo",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image: require("../../assets/images/items/gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 300,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 200,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 280,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 119,
    name: "Gatling Gun",
    rarity: "Rare",
    attack: 468,
    ammo: "Gatling Gun Ammo",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image: require("../../assets/images/items/gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 450,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 300,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 420,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 120,
    name: "Gatling Gun",
    rarity: "Epic",
    attack: 506,
    ammo: "Gatling Gun Ammo",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image: require("../../assets/images/items/gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 675,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 450,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 630,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 121,
    name: "Gatling Gun",
    rarity: "Legendary",
    attack: 562,
    ammo: "Gatling Gun Ammo",
    description:
      "A Gatling Gun capable of rapid fire. \r\nMows down enemies with suppressive fire.",
    image: require("../../assets/images/items/gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_GatlingGun.webp",
    recipe: [
      {
        name: "Pal Metal Ingot",
        quantity: 1012,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
      {
        name: "Plasteel",
        quantity: 675,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 945,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 122,
    name: "Meteor Launcher",
    rarity: "Common",
    attack: 2000,
    technology: 38,
    ammo: "Meteorite Ammo",
    description:
      "A phenomenal weapon that fires a meteor.\r\nUpon striking its target, it creates an explosion similar to a meteorite impact.",
    image: require("../../assets/images/items/meteor-launcher.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Launcher_Meteor.webp",
    recipe: [
      {
        name: "Meteorite Fragment",
        quantity: 100,
        image: require("../../assets/images/items/meteorite-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MeteorDrop.webp",
      },
      {
        name: "Refined Ingot",
        quantity: 30,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 20,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
    ],
  },
  {
    ID: 123,
    name: "Dark Grenade",
    rarity: "Common",
    attack: 750,
    technology: 40,
    description:
      "A Dark Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Dark damage to enemies.",
    image: require("../../assets/images/items/dark-grenade.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Dark.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Venom Gland",
        quantity: 1,
        image: require("../../assets/images/items/venom-gland.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Venom.webp",
      },
    ],
  },
  {
    ID: 124,
    name: "Dragon Grenade",
    rarity: "Common",
    attack: 750,
    technology: 42,
    description:
      "A Dragon Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Dragon damage to enemies.",
    image: require("../../assets/images/items/dragon-grenade.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Dragon.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Horn",
        quantity: 1,
        image: require("../../assets/images/items/horn.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Horn.webp",
      },
    ],
  },
  {
    ID: 125,
    name: "Ground Grenade",
    rarity: "Common",
    attack: 750,
    technology: 38,
    description:
      "A Ground Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Ground damage to enemies.",
    image: require("../../assets/images/items/ground-grenade.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Ground.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ore",
        quantity: 1,
        image: require("../../assets/images/items/ore.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperOre.webp",
      },
    ],
  },
  {
    ID: 126,
    name: "Grass Grenade",
    rarity: "Common",
    attack: 750,
    technology: 35,
    description:
      "A Grass Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Grass damage to enemies.",
    image: require("../../assets/images/items/grass-grenade.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Leaf.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 10,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
    ],
  },
  {
    ID: 127,
    name: "Water Grenade",
    rarity: "Common",
    attack: 750,
    technology: 33,
    description:
      "A Water Grenade useful for mid-range combat.\r\nIt detonates a few seconds after being thrown, dealing Water damage to enemies.",
    image: require("../../assets/images/items/water-grenade.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_FragGrenade_Water.webp",
    recipe: [
      {
        name: "Fiber",
        quantity: 10,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Stone",
        quantity: 10,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Pal Fluids",
        quantity: 1,
        image: require("../../assets/images/items/pal-fluids.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalFluid.webp",
      },
    ],
  },
  {
    ID: 128,
    name: "Katana",
    rarity: "Common",
    attack: 525,
    technology: 29,
    description:
      "Katana for close-range combat.\r\nSlices through with razor-sharp precision, cutting cleanly in one strike.",
    image: require("../../assets/images/items/katana.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Katana.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Wood",
        quantity: 20,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 20,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
    ],
  },
  {
    ID: 129,
    name: "Beam Sword",
    rarity: "Common",
    attack: 2000,
    technology: 57,
    description:
      "Beam Sword for close-range combat.\r\nSlices through opponents, burning them with a high-output laser.",
    image: require("../../assets/images/items/beam-sword.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BeamSword.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 30,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 100,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 20,
        image: require("../../assets/images/items/nightstar-sand.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 130,
    name: "Semi-Auto Shotgun",
    rarity: "Common",
    attack: 195,
    technology: 47,
    ammo: "Shotgun Shell",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image: require("../../assets/images/items/semi-auto-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 50,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 40,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
    ],
  },
  {
    ID: 131,
    name: "Plasma Cannon",
    rarity: "Common",
    attack: 10000,
    technology: 60,
    ammo: "Plasma Cartridge",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image: require("../../assets/images/items/plasma-cannon.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 200,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 130,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 200,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 100,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
    ],
  },
  {
    ID: 132,
    name: "Poison Arrow Crossbow",
    rarity: "Uncommon",
    attack: 364,
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image: require("../../assets/images/items/poison-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 100,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 100,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 10,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 133,
    name: "Poison Arrow Crossbow",
    rarity: "Rare",
    attack: 406,
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image: require("../../assets/images/items/poison-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 150,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 150,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 45,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 15,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 134,
    name: "Poison Arrow Crossbow",
    rarity: "Epic",
    attack: 448,
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image: require("../../assets/images/items/poison-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 225,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 225,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 67,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 22,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 135,
    name: "Poison Arrow Crossbow",
    rarity: "Legendary",
    attack: 490,
    description:
      "A Crossbow that inflicts poison on its target.\r\nPoisoned Pals are easier to capture.\r\nRequires Poison Arrow.",
    image: require("../../assets/images/items/poison-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Poison.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 337,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 337,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 100,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 33,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 136,
    name: "Fire Arrow Crossbow",
    rarity: "Uncommon",
    attack: 364,
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image: require("../../assets/images/items/fire-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 100,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 100,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 30,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 10,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 2,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 137,
    name: "Fire Arrow Crossbow",
    rarity: "Rare",
    attack: 406,
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image: require("../../assets/images/items/fire-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 150,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 150,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 45,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 15,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 138,
    name: "Fire Arrow Crossbow",
    rarity: "Epic",
    attack: 448,
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image: require("../../assets/images/items/fire-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 225,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 225,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 67,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 22,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 139,
    name: "Fire Arrow Crossbow",
    rarity: "Legendary",
    attack: 490,
    description:
      "A Crossbow that deals Fire damage.\r\nBurns Pals with fire arrows, making them easier to capture.\r\nRequires Fire Arrow.",
    image: require("../../assets/images/items/fire-arrow-crossbow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_BowGun_Fire.webp",
    recipe: [
      {
        name: "Wood",
        quantity: 337,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Stone",
        quantity: 337,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Ingot",
        quantity: 100,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Nail",
        quantity: 33,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 140,
    name: "Old Revolver",
    rarity: "Common",
    attack: 600,
    technology: 33,
    ammo: "Handgun Ammo",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image: require("../../assets/images/items/old-revolver.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 60,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 20,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
    ],
  },
  {
    ID: 141,
    name: "Pal Metal Pickaxe",
    rarity: "Common",
    attack: 120,
    technology: 44,
    description:
      "A pickaxe for mining. It has achieved extraordinary efficiency thanks to Pal Metal.",
    image: require("../../assets/images/items/pal-metal-pickaxe.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Pickaxe_Tier_03.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 50,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 100,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 10,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
    ],
  },
  {
    ID: 142,
    name: "Pal Metal Axe",
    rarity: "Common",
    attack: 120,
    technology: 44,
    description:
      "An axe for chopping wood. It has achieved extraordinary sharpness thanks to Pal Metal.",
    image: require("../../assets/images/items/pal-metal-axe.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_Axe_Tier_03.webp",
    recipe: [
      {
        name: "Stone",
        quantity: 50,
        image: require("../../assets/images/items/stone.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Stone.webp",
      },
      {
        name: "Wood",
        quantity: 100,
        image: require("../../assets/images/items/wood.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Wood.webp",
      },
      {
        name: "Pal Metal Ingot",
        quantity: 10,
        image: require("../../assets/images/items/pal-metal-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StealIngot.webp",
      },
    ],
  },
  {
    ID: 143,
    name: "Makeshift Assault Rifle",
    rarity: "Common",
    attack: 170,
    technology: 31,
    ammo: "Coarse Ammo",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 70,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 20,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 60,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
    ],
  },
  {
    ID: 144,
    name: "Semi-Auto Rifle",
    rarity: "Common",
    attack: 1150,
    technology: 41,
    ammo: "Rifle Ammo",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image: require("../../assets/images/items/semi-auto-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 35,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 10,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
    ],
  },
  {
    ID: 145,
    name: "Makeshift SMG",
    rarity: "Common",
    attack: 100,
    technology: 26,
    ammo: "Coarse Ammo",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 40,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 10,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 30,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
    ],
  },
  {
    ID: 146,
    name: "SMG",
    rarity: "Common",
    attack: 130,
    technology: 37,
    ammo: "Handgun Ammo",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image: require("../../assets/images/items/smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 25,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 6,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
    ],
  },
  {
    ID: 147,
    name: "Makeshift Shotgun",
    rarity: "Common",
    attack: 215,
    technology: 30,
    ammo: "Coarse Ammo",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image: require("../../assets/images/items/makeshift-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 60,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 15,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 50,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
    ],
  },
  {
    ID: 148,
    name: "Laser Gatling Gun",
    rarity: "Uncommon",
    attack: 583,
    ammo: "Laser Gatling Cartridge",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image: require("../../assets/images/items/laser-gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 300,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 200,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 400,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 149,
    name: "Laser Gatling Gun",
    rarity: "Rare",
    attack: 609,
    ammo: "Laser Gatling Cartridge",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image: require("../../assets/images/items/laser-gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 450,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 300,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 600,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 150,
    name: "Laser Gatling Gun",
    rarity: "Epic",
    attack: 636,
    ammo: "Laser Gatling Cartridge",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image: require("../../assets/images/items/laser-gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 675,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 450,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 900,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 151,
    name: "Laser Gatling Gun",
    rarity: "Legendary",
    attack: 689,
    ammo: "Laser Gatling Cartridge",
    description:
      "A Gatling gun capable of rapidly firing lasers. \r\nBurns down enemies with suppressive beams.",
    image: require("../../assets/images/items/laser-gatling-gun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_LaserGatlingGun.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 1012,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 675,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 1350,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 152,
    name: "Plasma Cannon",
    rarity: "Uncommon",
    attack: 11000,
    ammo: "Plasma Cartridge",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image: require("../../assets/images/items/plasma-cannon.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 400,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 260,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 400,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 200,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 15,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 153,
    name: "Plasma Cannon",
    rarity: "Rare",
    attack: 11500,
    ammo: "Plasma Cartridge",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image: require("../../assets/images/items/plasma-cannon.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 600,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 390,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 600,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 300,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 154,
    name: "Plasma Cannon",
    rarity: "Epic",
    attack: 12000,
    ammo: "Plasma Cartridge",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image: require("../../assets/images/items/plasma-cannon.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 900,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 585,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 900,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 450,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 35,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 155,
    name: "Plasma Cannon",
    rarity: "Legendary",
    attack: 13000,
    ammo: "Plasma Cartridge",
    description:
      "Fires high-output energy projectiles. \r\nCauses an energy explosion upon impact.",
    image: require("../../assets/images/items/plasma-cannon.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_EnergyRocketLauncher.webp",
    recipe: [
      {
        name: "Plasteel",
        quantity: 1350,
        image: require("../../assets/images/items/plasteel.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Plastic.webp",
      },
      {
        name: "Hexolite",
        quantity: 877,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 1350,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Circuit Board",
        quantity: 675,
        image: require("../../assets/images/items/circuit-board.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_ElectronicCircuit.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 45,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 156,
    name: "Compound Bow",
    rarity: "Common",
    attack: 1100,
    technology: 32,
    ammo: "Reinforced Arrow",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image: require("../../assets/images/items/compound-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 50,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 40,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 20,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
    ],
  },
  {
    ID: 157,
    name: "Advanced Bow",
    rarity: "Common",
    attack: 5800,
    technology: 57,
    ammo: "Advanced Arrow",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image: require("../../assets/images/items/advanced-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 40,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 100,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 20,
        image: require("../../assets/images/items/nightstar-sand.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
      },
    ],
  },
  {
    ID: 158,
    name: "Semi-Auto Shotgun",
    rarity: "Uncommon",
    attack: 214,
    ammo: "Shotgun Shell",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image: require("../../assets/images/items/semi-auto-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 100,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 40,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 80,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 5,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 159,
    name: "Semi-Auto Shotgun",
    rarity: "Rare",
    attack: 234,
    ammo: "Shotgun Shell",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image: require("../../assets/images/items/semi-auto-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 150,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 60,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 120,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 10,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 160,
    name: "Semi-Auto Shotgun",
    rarity: "Epic",
    attack: 253,
    ammo: "Shotgun Shell",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image: require("../../assets/images/items/semi-auto-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 225,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 90,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 180,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 20,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 161,
    name: "Semi-Auto Shotgun",
    rarity: "Legendary",
    attack: 282,
    ammo: "Shotgun Shell",
    description:
      "A rapid-fire shotgun with immense power. \r\nIts close-range damage output is top-notch.",
    image: require("../../assets/images/items/semi-auto-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoShotgun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 337,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 135,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 270,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 30,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 162,
    name: "Old Revolver",
    rarity: "Uncommon",
    attack: 1050,
    ammo: "Handgun Ammo",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image: require("../../assets/images/items/old-revolver.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 40,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 163,
    name: "Old Revolver",
    rarity: "Rare",
    attack: 1200,
    ammo: "Handgun Ammo",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image: require("../../assets/images/items/old-revolver.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 240,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 80,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 164,
    name: "Old Revolver",
    rarity: "Epic",
    attack: 1350,
    ammo: "Handgun Ammo",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image: require("../../assets/images/items/old-revolver.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 480,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 160,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 165,
    name: "Old Revolver",
    rarity: "Legendary",
    attack: 1500,
    ammo: "Handgun Ammo",
    description:
      "A slightly outdated revolving handgun. \r\nCompared to Handgun, it excels in single-shot power.",
    image: require("../../assets/images/items/old-revolver.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_OldRevolver.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 960,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 320,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 166,
    name: "Makeshift Assault Rifle",
    rarity: "Uncommon",
    attack: 204,
    ammo: "Coarse Ammo",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 140,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 40,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 120,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 167,
    name: "Makeshift Assault Rifle",
    rarity: "Rare",
    attack: 229,
    ammo: "Coarse Ammo",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 210,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 60,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 180,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 168,
    name: "Makeshift Assault Rifle",
    rarity: "Epic",
    attack: 255,
    ammo: "Coarse Ammo",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 315,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 90,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 270,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 169,
    name: "Makeshift Assault Rifle",
    rarity: "Legendary",
    attack: 297,
    ammo: "Coarse Ammo",
    description:
      "An assault rifle handmade from scraps. \r\nIt excels in rate of fire and long range, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-assault-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftAssaultRifle.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 472,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 135,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 405,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 32,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 170,
    name: "Semi-Auto Rifle",
    rarity: "Uncommon",
    attack: 1265,
    ammo: "Rifle Ammo",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image: require("../../assets/images/items/semi-auto-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 70,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 20,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 171,
    name: "Semi-Auto Rifle",
    rarity: "Rare",
    attack: 1380,
    ammo: "Rifle Ammo",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image: require("../../assets/images/items/semi-auto-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 105,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 30,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 172,
    name: "Semi-Auto Rifle",
    rarity: "Epic",
    attack: 1495,
    ammo: "Rifle Ammo",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image: require("../../assets/images/items/semi-auto-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 157,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 45,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 173,
    name: "Semi-Auto Rifle",
    rarity: "Legendary",
    attack: 1610,
    ammo: "Rifle Ammo",
    description:
      "A rifle that allows for a certain degree of rapid fire. \r\nIt\u2019s easy to aim and has high firepower, making it effective for mid-range combat.",
    image: require("../../assets/images/items/semi-auto-rifle.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SemiAutoRifle.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 235,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 67,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 174,
    name: "Makeshift SMG",
    rarity: "Uncommon",
    attack: 120,
    ammo: "Coarse Ammo",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 80,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 20,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 60,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 3,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 175,
    name: "Makeshift SMG",
    rarity: "Rare",
    attack: 135,
    ammo: "Coarse Ammo",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 30,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 90,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 6,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 176,
    name: "Makeshift SMG",
    rarity: "Epic",
    attack: 150,
    ammo: "Coarse Ammo",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 180,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 45,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 135,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 12,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 177,
    name: "Makeshift SMG",
    rarity: "Legendary",
    attack: 175,
    ammo: "Coarse Ammo",
    description:
      "A submachine gun handmade from scraps. \r\nIt excels in rate of fire, but its single-shot power is low.",
    image: require("../../assets/images/items/makeshift-smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftSubmachineGun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 270,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 67,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 202,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 24,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 178,
    name: "SMG",
    rarity: "Uncommon",
    attack: 156,
    ammo: "Handgun Ammo",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image: require("../../assets/images/items/smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 50,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 12,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 179,
    name: "SMG",
    rarity: "Rare",
    attack: 175,
    ammo: "Handgun Ammo",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image: require("../../assets/images/items/smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 75,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 18,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 180,
    name: "SMG",
    rarity: "Epic",
    attack: 195,
    ammo: "Handgun Ammo",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image: require("../../assets/images/items/smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 112,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 27,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 181,
    name: "SMG",
    rarity: "Legendary",
    attack: 227,
    ammo: "Handgun Ammo",
    description:
      "A submachine gun with exceptional rate of fire. \r\nIt\u2019s easy to handle and effective in close-range combat.",
    image: require("../../assets/images/items/smg.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SubmachineGun.webp",
    recipe: [
      {
        name: "Refined Ingot",
        quantity: 168,
        image: require("../../assets/images/items/refined-ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_IronIngot.webp",
      },
      {
        name: "Polymer",
        quantity: 40,
        image: require("../../assets/images/items/polymer.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Polymer.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 25,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 182,
    name: "Makeshift Shotgun",
    rarity: "Uncommon",
    attack: 258,
    ammo: "Coarse Ammo",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image: require("../../assets/images/items/makeshift-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 120,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 30,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 100,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 4,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 183,
    name: "Makeshift Shotgun",
    rarity: "Rare",
    attack: 290,
    ammo: "Coarse Ammo",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image: require("../../assets/images/items/makeshift-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 180,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 45,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 150,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 8,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 184,
    name: "Makeshift Shotgun",
    rarity: "Epic",
    attack: 322,
    ammo: "Coarse Ammo",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image: require("../../assets/images/items/makeshift-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 270,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 67,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 225,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 16,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 185,
    name: "Makeshift Shotgun",
    rarity: "Legendary",
    attack: 376,
    ammo: "Coarse Ammo",
    description:
      "A shotgun handmade from scraps. \r\nIt has a short range but excels in close-range combat",
    image: require("../../assets/images/items/makeshift-shotgun.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_MakeshiftShotgun.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 405,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "High Quality Pal Oil",
        quantity: 100,
        image: require("../../assets/images/items/high-quality-pal-oil.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalOil.webp",
      },
      {
        name: "Fiber",
        quantity: 337,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Ancient Civilization Parts",
        quantity: 32,
        image: require("../../assets/images/items/ancient-civilization-parts.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalCrystal_Ex.webp",
      },
    ],
  },
  {
    ID: 186,
    name: "Meowmere",
    rarity: "Legendary",
    attack: 200,
    technology: 30,
    description:
      "[Terraria Collab]\r\nAccording to the legend, this sword was brought back from a distant land by Croajiro.\r\nWhy? We have no idea...",
    image: require("../../assets/images/items/meowmere.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_YakushimaBlade.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 22,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Paldium Fragment",
        quantity: 22,
        image: require("../../assets/images/items/paldium-fragment.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Pal_crystal_S.webp",
      },
      {
        name: "Coal",
        quantity: 22,
        image: require("../../assets/images/items/coal.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Coal.webp",
      },
      {
        name: "Predator Core",
        quantity: 3,
        image: require("../../assets/images/items/predator-core.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PredatorCrystal.webp",
      },
    ],
  },
  {
    ID: 187,
    name: "Advanced Bow",
    rarity: "Uncommon",
    attack: 6670,
    ammo: "Advanced Arrow",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image: require("../../assets/images/items/advanced-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 80,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 200,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 40,
        image: require("../../assets/images/items/nightstar-sand.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
      },
    ],
  },
  {
    ID: 188,
    name: "Advanced Bow",
    rarity: "Rare",
    attack: 7250,
    ammo: "Advanced Arrow",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image: require("../../assets/images/items/advanced-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 120,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 300,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 60,
        image: require("../../assets/images/items/nightstar-sand.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
      },
    ],
  },
  {
    ID: 189,
    name: "Advanced Bow",
    rarity: "Epic",
    attack: 7830,
    ammo: "Advanced Arrow",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image: require("../../assets/images/items/advanced-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 180,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 450,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 90,
        image: require("../../assets/images/items/nightstar-sand.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
      },
    ],
  },
  {
    ID: 190,
    name: "Advanced Bow",
    rarity: "Legendary",
    attack: 8700,
    ammo: "Advanced Arrow",
    description:
      "A bow reconstructed with advanced technology. \r\nCapable of firing extremely powerful arrows.",
    image: require("../../assets/images/items/advanced-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_SFBow.webp",
    recipe: [
      {
        name: "Hexolite",
        quantity: 270,
        image: require("../../assets/images/items/hexolite.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_StainlessSteel.webp",
      },
      {
        name: "Carbon Fiber",
        quantity: 675,
        image: require("../../assets/images/items/carbon-fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CarbonFiber.webp",
      },
      {
        name: "Nightstar Sand",
        quantity: 135,
        image: require("../../assets/images/items/nightstar-sand.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_NightStone.webp",
      },
    ],
  },
  {
    ID: 191,
    name: "Compound Bow",
    rarity: "Uncommon",
    attack: 1265,
    ammo: "Reinforced Arrow",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image: require("../../assets/images/items/compound-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 100,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 80,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 40,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
    ],
  },
  {
    ID: 192,
    name: "Compound Bow",
    rarity: "Rare",
    attack: 1375,
    ammo: "Reinforced Arrow",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image: require("../../assets/images/items/compound-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 200,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 160,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 80,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
    ],
  },
  {
    ID: 193,
    name: "Compound Bow",
    rarity: "Epic",
    attack: 1485,
    ammo: "Reinforced Arrow",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image: require("../../assets/images/items/compound-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 400,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 320,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 160,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
    ],
  },
  {
    ID: 194,
    name: "Compound Bow",
    rarity: "Legendary",
    attack: 1650,
    ammo: "Reinforced Arrow",
    description:
      "A modernized bow. \r\nCapable of firing more powerful arrows.",
    image: require("../../assets/images/items/compound-bow.png"),
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Weapon_CompoundBow.webp",
    recipe: [
      {
        name: "Ingot",
        quantity: 800,
        image: require("../../assets/images/items/ingot.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_CopperIngot.webp",
      },
      {
        name: "Fiber",
        quantity: 640,
        image: require("../../assets/images/items/fiber.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Fiber.webp",
      },
      {
        name: "Nail",
        quantity: 320,
        image: require("../../assets/images/items/nail.png"),
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_MachineParts.webp",
      },
    ],
  },
];
