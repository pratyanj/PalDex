export const Ingredients = [
  {
    id: 1,
    name: "Red Berries",
    rarity: "Common",
    description:
      "A versatile ingredient that is delicious raw or cooked.\r\nThey can be found anywhere on the island.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 50,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Berries",
      Nutrition: 15,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Berries",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4070,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_BerryRed",
      SneakAttackRate: 1,
    },
    Nutrition: 15,
  },
  {
    id: 2,
    name: "Baked Berries",
    rarity: "Common",
    description:
      "Cooking enhances their nutritional value,\r\nand surprisingly, they are quite filling.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Baked_Berries.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Baked_Berries.webp",
    recipe: [
      {
        name: "Red Berries",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 100,
      Weight: "0.15",
      MaxStackCount: 9999,
      Code: "Baked_Berries",
      Nutrition: 21,
      SAN: 1,
      Corruption: "901 Seconds",
      IconName: "Baked_Berries",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4066,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 21,
    SAN: 1,
  },
  {
    id: 3,
    name: "Bread",
    rarity: "Common",
    description: "Bread made from baked Flour.\r\nA tasty staple food.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Pan.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Pan.webp",
    recipe: [
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 200,
      Weight: "0.3",
      MaxStackCount: 9999,
      Code: "Pan",
      Nutrition: 27,
      SAN: 4,
      Corruption: "1200 Seconds",
      IconName: "Pan",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4064,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 27,
    SAN: 4,
  },
  {
    id: 4,
    name: "Tomato",
    rarity: "Common",
    description:
      "A fresh ingredient that brightens any dish.\r\nFilled with lycopene, they\u2019re also very healthy.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Tomato.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Tomato.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 150,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Tomato",
      Nutrition: 15,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Tomato",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4072,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Tomato",
      SneakAttackRate: 1,
    },
    Nutrition: 15,
  },
  {
    id: 5,
    name: "Wheat",
    rarity: "Common",
    description:
      "An ingredient that forms the base of various dishes.\r\nWheat is a common crop in many parts of the world.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Wheat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Wheat.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 100,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Wheat",
      Nutrition: 6,
      SAN: 0,
      Corruption: "2400 Seconds",
      IconName: "Wheat",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4080,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Wheat",
      SneakAttackRate: 1,
    },
    Nutrition: 6,
  },
  {
    id: 6,
    name: "Flour",
    rarity: "Common",
    description:
      "Flour made from grinding Wheat.\r\nIt can be used as an ingredient in making Bread.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
    recipe: [
      {
        name: "Wheat",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Wheat.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Wheat.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 20,
      Weight: "0.1",
      MaxStackCount: 9999,
      Code: "Flour",
      Nutrition: 3,
      SAN: 0,
      Corruption: "2400 Seconds",
      IconName: "Flour",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 5600,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 3,
  },
  {
    id: 7,
    name: "Lettuce",
    rarity: "Common",
    description:
      "A leafy green. When it comes to salad, this is a must.\r\nIt has an exquisitely crunchy texture and refreshing taste.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lettuce.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Lettuce.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 150,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Lettuce",
      Nutrition: 15,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Lettuce",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4073,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Lettuce",
      SneakAttackRate: 1,
    },
    Nutrition: 15,
  },
  {
    id: 8,
    name: "Egg",
    rarity: "Common",
    description:
      "Delicious when fried, but can also be used to cook various meals.\r\nChikipi produce them.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 50,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Egg",
      Nutrition: 16,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Egg",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4069,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Egg",
      SneakAttackRate: 1,
    },
    Nutrition: 16,
  },
  {
    id: 9,
    name: "Milk",
    rarity: "Common",
    description:
      "Drink it as is, or use it in various meals.\r\nCan be milked from Mozzarina.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 50,
      Weight: "1.5",
      MaxStackCount: 9999,
      Code: "Milk",
      Nutrition: 12,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Milk",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4075,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Milk",
      SneakAttackRate: 1,
    },
    Nutrition: 12,
  },
  {
    id: 10,
    name: "Hot Milk",
    rarity: "Common",
    description:
      "Even more delicious when warmed up.\r\nGreat for keeping hunger away.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_HotMilk.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_HotMilk.webp",
    recipe: [
      {
        name: "Milk",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 100,
      Weight: "1.5",
      MaxStackCount: 9999,
      Code: "HotMilk",
      Nutrition: 16,
      SAN: 1,
      Corruption: "600 Seconds",
      IconName: "HotMilk",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4068,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 16,
    SAN: 1,
  },
  {
    id: 11,
    name: "Jam-Filled Bun",
    rarity: "Common",
    description:
      "Bread with jam spread on it.\r\nThe sweetness of the berries complements it perfectly.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_JamBun.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_JamBun.webp",
    recipe: [
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Red Berries",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 600,
      Weight: "0.3",
      MaxStackCount: 9999,
      Code: "JamBun",
      Nutrition: 51,
      SAN: 6,
      Corruption: "3600 Seconds",
      IconName: "JamBun",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4051,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 51,
    SAN: 6,
  },
  {
    id: 12,
    name: "Salad",
    rarity: "Common",
    description:
      "A Salad made by mixing Lettuce and Tomato.\r\nEating it slightly improves work speed for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Salad.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Salad.webp",
    recipe: [
      {
        name: "Lettuce",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lettuce.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Lettuce.webp",
      },
      {
        name: "Tomato",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Tomato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Tomato.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 1200,
      Weight: "0.3",
      MaxStackCount: 9999,
      Code: "Salad",
      Nutrition: 84,
      SAN: 11,
      Corruption: "1200 Seconds",
      IconName: "Salad",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4037,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 84,
    SAN: 11,
    "Work Speed": 30,
    "Recovery Time": 600,
  },
  {
    id: 13,
    name: "Omelet",
    rarity: "Common",
    description:
      "A dish made by frying an Egg and topping it with ketchup.\r\nEating it improves Attack by +10% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Omelet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Omelet.webp",
    recipe: [
      {
        name: "Tomato",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Tomato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Tomato.webp",
      },
      {
        name: "Egg",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 300,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Omelet",
      Nutrition: 67,
      SAN: 7,
      Corruption: "1200 Seconds",
      IconName: "Omelet",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4042,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 67,
    SAN: 7,
    "Recovery Time": 600,
    Attack: 10,
  },
  {
    id: 14,
    name: "Pancake",
    rarity: "Common",
    description:
      "A dish made by mixing Flour and Milk together then baking.\r\nEating it progressively decreases the rate at which one's sanity decreases for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Pancake.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Pancake.webp",
    recipe: [
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Milk",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 300,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Pancake",
      Nutrition: 42,
      SAN: 5,
      Corruption: "1200 Seconds",
      IconName: "Pancake",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4058,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 42,
    SAN: 5,
    "Recovery Time": 600,
    SANResist: 25,
  },
  {
    id: 15,
    name: "Marinated Mushrooms",
    rarity: "Common",
    description:
      "A dish made by marinating Mushrooms in a marinade.\r\nEating it improves Defense by +10% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_MarinatedMushrooms.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_MarinatedMushrooms.webp",
    recipe: [
      {
        name: "Mushroom",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Mushroom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Mushroom.webp",
      },
      {
        name: "Red Berries",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 300,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "MarinatedMushrooms",
      Nutrition: 60,
      SAN: 7,
      Corruption: "1200 Seconds",
      IconName: "MarinatedMushrooms",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4045,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 60,
    SAN: 7,
    "Recovery Time": 600,
    Defense: 10,
  },
  {
    id: 16,
    name: "Mushroom Soup",
    rarity: "Common",
    description:
      "Cream soup made of Mushrooms.\r\nEating it allows you to stay fuller for slightly longer for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_MushroomSoup.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_MushroomSoup.webp",
    recipe: [
      {
        name: "Mushroom",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Mushroom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Mushroom.webp",
      },
      {
        name: "Milk",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 300,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "MushroomSoup",
      Nutrition: 52,
      SAN: 7,
      Corruption: "1200 Seconds",
      IconName: "MushroomSoup",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4050,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 52,
    SAN: 7,
    "Recovery Time": 600,
    HungerResist: 25,
  },
  {
    id: 17,
    name: "Carbonara",
    rarity: "Common",
    description:
      "A dish mixing pasta with Egg and Milk.\r\nEating it makes it improves Defense by +20% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Carbonara.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Carbonara.webp",
    recipe: [
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Egg",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
      },
      {
        name: "Milk",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 800,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Carbonara",
      Nutrition: 129,
      SAN: 16,
      Corruption: "1200 Seconds",
      IconName: "Carbonara",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4026,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 129,
    SAN: 16,
    "Recovery Time": 600,
    Defense: 20,
  },
  {
    id: 18,
    name: "Pizza",
    rarity: "Common",
    description:
      "A dish made by piling Red Berries, Tomato and cheese on Bread.\r\nEating it slightly improves work speed and allows you to stay fuller for slightly longer for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Pizza.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Pizza.webp",
    recipe: [
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Red Berries",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
      {
        name: "Tomato",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Tomato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Tomato.webp",
      },
      {
        name: "Milk",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 2900,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Pizza",
      Nutrition: 184,
      SAN: 23,
      Corruption: "1200 Seconds",
      IconName: "Pizza",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4013,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 184,
    SAN: 23,
    "Work Speed": 30,
    "Recovery Time": 600,
    HungerResist: 25,
  },
  {
    id: 19,
    name: "Cake",
    rarity: "Common",
    description:
      "A dish that is eaten during celebrations.\r\nPut it in the chest at your breeding farm to have a Pal lay a particularly healthy egg.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Cake.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Cake.webp",
    recipe: [
      {
        name: "Flour",
        quantity: 5,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Red Berries",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
      {
        name: "Milk",
        quantity: 7,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
      {
        name: "Egg",
        quantity: 8,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
      },
      {
        name: "Honey",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Honey.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Honey.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 10000,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Cake",
      Nutrition: 656,
      SAN: 82,
      Corruption: "1200 Seconds",
      IconName: "Cake",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4000,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 656,
    SAN: 82,
  },
  {
    id: 20,
    name: "Fried Egg",
    rarity: "Common",
    description:
      "An Egg now fried and even more delicious.\r\nGreat for keeping hunger away.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_FriedEggs.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_FriedEggs.webp",
    recipe: [
      {
        name: "Egg",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 100,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "FriedEggs",
      Nutrition: 23,
      SAN: 1,
      Corruption: "1200 Seconds",
      IconName: "FriedEggs",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4065,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 23,
    SAN: 1,
  },
  {
    id: 21,
    name: "Mushroom",
    rarity: "Common",
    description:
      "A mushroom that can be eaten raw.\r\nThey can be found anywhere on the island.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Mushroom.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Mushroom.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "",
      Rank: 1,
      "Gold Coin": 50,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Mushroom",
      Nutrition: 13,
      SAN: 0,
      Corruption: "901 Seconds",
      IconName: "Mushroom",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4074,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Mushroom",
      SneakAttackRate: 1,
      Defense: 3,
      Hp: -1,
    },
    Nutrition: 13,
  },
  {
    id: 22,
    name: "Baked Mushroom",
    rarity: "Common",
    description:
      "Cooking this mushroom enhances its nutritional value.\r\nCuriously, it's also quite filling.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMushroom.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMushroom.webp",
    recipe: [
      {
        name: "Mushroom",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Mushroom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Mushroom.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "BakedMushroom",
      Nutrition: 18,
      SAN: 1,
      Corruption: "1800 Seconds",
      IconName: "BakedMushroom",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4067,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 18,
    SAN: 1,
  },
  {
    id: 23,
    name: "Honey",
    rarity: "Common",
    description: "Honey harvested from Beegarde.\r\nIt's sweet and tasty.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Honey.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Honey.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 250,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Honey",
      Nutrition: 10,
      SAN: 3,
      IconName: "Honey",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4077,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_Honey",
      SneakAttackRate: 1,
    },
    Nutrition: 10,
    SAN: 3,
  },
  {
    id: 24,
    name: "Cotton Candy",
    rarity: "Common",
    description:
      "Cotton candy collected from Woolipop.\r\nIts sweetness fluffily melts away in your mouth.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Sweet.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Sweet.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 250,
      Weight: "0.2",
      MaxStackCount: 9999,
      Code: "Sweet",
      Nutrition: 5,
      SAN: 5,
      IconName: "Sweet",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4081,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_CottonCandy",
      SneakAttackRate: 1,
    },
    Nutrition: 5,
    SAN: 5,
  },
  {
    id: 25,
    name: "Chikipi Poultry",
    rarity: "Common",
    description:
      "Chikipi meat.\r\nLight and easy to eat,\r\nit's a local favorite for residents of Palpagos Island.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_ChickenPal.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_ChickenPal.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Meat_ChickenPal",
      Nutrition: 36,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_ChickenPal",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4060,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 36,
  },
  {
    id: 26,
    name: "Lamball Mutton",
    rarity: "Common",
    description:
      "Lamball meat.\r\nRed meat with a unique flavor.\r\nDelicious, but takes some getting used to.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_SheepBall.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_SheepBall.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Meat_SheepBall",
      Nutrition: 37,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_SheepBall",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4059,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 37,
  },
  {
    id: 27,
    name: "Raw Kelpsea",
    rarity: "Common",
    description:
      "Kelpsea meat.\r\nTender and slightly sweet.\r\nFish meat tends to spoil quickly.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Kelpie.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Kelpie.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 100,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Meat_Kelpie",
      Nutrition: 36,
      SAN: 0,
      Corruption: "300 Seconds",
      IconName: "Meat_Kelpie",
      TypeA: "Food",
      TypeB: "FoodFish",
      SortID: 4061,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 36,
  },
  {
    id: 28,
    name: "Galeclaw Poultry",
    rarity: "Common",
    description:
      "Galeclaw meat.\r\nFull of nutrition, its flavor packs a punch.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Eagle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Eagle.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 150,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Meat_Eagle",
      Nutrition: 36,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_Eagle",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4062,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 36,
  },
  {
    id: 29,
    name: "Rushoar Pork",
    rarity: "Common",
    description:
      "Rushoar meat.\r\nFull of the delicious flavors of wild game.\r\nJuicy and nutritious.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Boar.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Boar.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 430,
      Weight: 2,
      MaxStackCount: 9999,
      Code: "Meat_Boar",
      Nutrition: 43,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_Boar",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4057,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 43,
  },
  {
    id: 30,
    name: "Raw Dumud",
    rarity: "Common",
    description:
      "Dumud meat.\r\nFatty with a rich taste.\r\nHas a mouthwatering plump texture.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_LazyCatfish.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_LazyCatfish.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 500,
      Weight: 2,
      MaxStackCount: 9999,
      Code: "Meat_LazyCatfish",
      Nutrition: 50,
      SAN: 0,
      Corruption: "300 Seconds",
      IconName: "Meat_LazyCatfish",
      TypeA: "Food",
      TypeB: "FoodFish",
      SortID: 4052,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 50,
  },
  {
    id: 31,
    name: "Eikthyrdeer Venison",
    rarity: "Common",
    description: "Eikthyrdeer meat.\r\nLight and lean, but rich in flavor.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Deer.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Deer.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 500,
      Weight: 2,
      MaxStackCount: 9999,
      Code: "Meat_Deer",
      Nutrition: 50,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_Deer",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4053,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 50,
  },
  {
    id: 32,
    name: "Reindrix Venison",
    rarity: "Common",
    description:
      "Reindrix meat.\r\nStrange venison capable of remaining at low temperatures.\r\nTakes a very long time to spoil.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_IceDeer.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_IceDeer.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 640,
      Weight: 2,
      MaxStackCount: 9999,
      Code: "Meat_IceDeer",
      Nutrition: 64,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_IceDeer",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4043,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 64,
  },
  {
    id: 33,
    name: "Caprity Meat",
    rarity: "Common",
    description:
      "Caprity meat.\r\nHealthy and full of nutrients.\r\nHints of berries scenting the meat stimulates the appetite.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_BerryGoat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_BerryGoat.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 570,
      Weight: "2.5",
      MaxStackCount: 9999,
      Code: "Meat_BerryGoat",
      Nutrition: 57,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_BerryGoat",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4046,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 57,
  },
  {
    id: 34,
    name: "Mozzarina Meat",
    rarity: "Common",
    description:
      "Mozzarina meat.\r\nThick, juicy and marbled.\r\nResidents of Palpagos Island cherish it above all other meats.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_CowPal.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_CowPal.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 570,
      Weight: "2.5",
      MaxStackCount: 9999,
      Code: "Meat_CowPal",
      Nutrition: 57,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_CowPal",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4047,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 57,
  },
  {
    id: 35,
    name: "Broncherry Meat",
    rarity: "Uncommon",
    description:
      "Broncherry meat.\r\nGiant meat full of massive stores of energy.\r\nStuffed to the brim with nutrients gathered through photosynthesis.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_SakuraSaurus.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_SakuraSaurus.webp",
    recipe: [],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1800,
      Weight: 5,
      MaxStackCount: 9999,
      Code: "Meat_SakuraSaurus",
      Nutrition: 180,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_SakuraSaurus",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4015,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 180,
  },
  {
    id: 36,
    name: "Mammorest Meat",
    rarity: "Uncommon",
    description:
      "Mammorest meat.\r\nWith massive size comes massive flavor.\r\nIts overwhelming portions are sure to satisfy any glutton.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_GrassMammoth.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_GrassMammoth.webp",
    recipe: [],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1800,
      Weight: 5,
      MaxStackCount: 9999,
      Code: "Meat_GrassMammoth",
      Nutrition: 180,
      SAN: 0,
      Corruption: "600 Seconds",
      IconName: "Meat_GrassMammoth",
      TypeA: "Food",
      TypeB: "FoodMeat",
      SortID: 4016,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_MeatRaw",
      SneakAttackRate: 1,
    },
    Nutrition: 180,
  },
  {
    id: 37,
    name: "Grilled Chikipi",
    rarity: "Common",
    description:
      "Chicken skewer slow-grilled over a charcoal fire.\r\nLight and refreshing on the tongue.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_ChickenPal.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_ChickenPal.webp",
    recipe: [
      {
        name: "Chikipi Poultry",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_ChickenPal.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_ChickenPal.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 500,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "BakedMeat_ChickenPal",
      Nutrition: 50,
      SAN: 1,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_ChickenPal",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4054,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 50,
    SAN: 1,
  },
  {
    id: 38,
    name: "Lamball Kebab",
    rarity: "Common",
    description:
      "Spiced and roasted mutton.\r\nDeeply complex with unique flavors.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_SheepBall.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_SheepBall.webp",
    recipe: [
      {
        name: "Lamball Mutton",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_SheepBall.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_SheepBall.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 520,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "BakedMeat_SheepBall",
      Nutrition: 52,
      SAN: 1,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_SheepBall",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4049,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 52,
    SAN: 1,
  },
  {
    id: 39,
    name: "Grilled Kelpsea",
    rarity: "Common",
    description: "Fresh fish grilled over a charcoal fire.\r\nPlump and juicy.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_Kelpie.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_Kelpie.webp",
    recipe: [
      {
        name: "Raw Kelpsea",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Kelpie.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Kelpie.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 500,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "BakedMeat_Kelpie",
      Nutrition: 50,
      SAN: 1,
      Corruption: "600 Seconds",
      IconName: "BakedMeat_Kelpie",
      TypeA: "Food",
      TypeB: "FoodDishFish",
      SortID: 4055,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 50,
    SAN: 1,
  },
  {
    id: 40,
    name: "Grilled Galeclaw",
    rarity: "Common",
    description: "Grilled meat full of vitality for flying high in the skies.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_Eagle.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_Eagle.webp",
    recipe: [
      {
        name: "Galeclaw Poultry",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Eagle.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Eagle.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 500,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "BakedMeat_Eagle",
      Nutrition: 50,
      SAN: 1,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_Eagle",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4056,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 50,
    SAN: 1,
  },
  {
    id: 41,
    name: "Roast Rushoar",
    rarity: "Common",
    description:
      "Boar grilled over a hearty flame.\r\nCrispy on the outside, juicy on the inside.\r\nPerfect as an extravagant main dish for a big party.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_Boar.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_Boar.webp",
    recipe: [
      {
        name: "Rushoar Pork",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Boar.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Boar.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 600,
      Weight: 2,
      MaxStackCount: 9999,
      Code: "BakedMeat_Boar",
      Nutrition: 60,
      SAN: 1,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_Boar",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4044,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 60,
    SAN: 1,
  },
  {
    id: 42,
    name: "Broiled Dumud",
    rarity: "Common",
    description:
      "Grilled fish slathered with a secret sauce.\r\nSoothes both mind and body.\r\nPerfect for tired Pal Tamers.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_LazyCatfish.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_LazyCatfish.webp",
    recipe: [
      {
        name: "Raw Dumud",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_LazyCatfish.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_LazyCatfish.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 700,
      Weight: 2,
      MaxStackCount: 9999,
      Code: "BakedMeat_LazyCatfish",
      Nutrition: 70,
      SAN: 1,
      Corruption: "600 Seconds",
      IconName: "BakedMeat_LazyCatfish",
      TypeA: "Food",
      TypeB: "FoodDishFish",
      SortID: 4040,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 70,
    SAN: 1,
  },
  {
    id: 43,
    name: "Roast Eikthyrdeer",
    rarity: "Common",
    description:
      "Carefully roasted venison with delicate flavor notes,\r\naccented by the aromas of the deep forest.\r\nElegant taste for an elegant lifestyle.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_Deer.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_Deer.webp",
    recipe: [
      {
        name: "Eikthyrdeer Venison",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Deer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Deer.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 700,
      Weight: 2,
      MaxStackCount: 9999,
      Code: "BakedMeat_Deer",
      Nutrition: 70,
      SAN: 1,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_Deer",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4041,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 70,
    SAN: 1,
  },
  {
    id: 44,
    name: "Roast Reindrix",
    rarity: "Common",
    description:
      "When taken from a flame, Reindrix meat rapidly drops in temperature.\r\nThis allows it to retain freshness for long periods of time,\r\nmaking it a perfect emergency ration.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_IceDeer.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_IceDeer.webp",
    recipe: [
      {
        name: "Reindrix Venison",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_IceDeer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_IceDeer.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 2520,
      Weight: 2,
      MaxStackCount: 9999,
      Code: "BakedMeat_IceDeer",
      Nutrition: 252,
      SAN: 1,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_IceDeer",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4007,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 252,
    SAN: 1,
  },
  {
    id: 45,
    name: "Herb Roasted Caprity",
    rarity: "Common",
    description:
      "Mild roast filled with the natural aromas of\r\nherbs and berries embedded in the meat.\r\nGives a pleasant sense of warmth when eaten outdoors.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_BerryGoat.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_BerryGoat.webp",
    recipe: [
      {
        name: "Caprity Meat",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_BerryGoat.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_BerryGoat.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 800,
      Weight: "2.5",
      MaxStackCount: 9999,
      Code: "BakedMeat_BerryGoat",
      Nutrition: 80,
      SAN: 1,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_BerryGoat",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4038,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 80,
    SAN: 1,
  },
  {
    id: 46,
    name: "Mozzarina Steak",
    rarity: "Common",
    description:
      "Thick, well-done steak.\r\nStrong flavors give those who eat it an energy boost.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_CowPal.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_CowPal.webp",
    recipe: [
      {
        name: "Mozzarina Meat",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_CowPal.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_CowPal.webp",
      },
    ],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 800,
      Weight: "2.5",
      MaxStackCount: 9999,
      Code: "BakedMeat_CowPal",
      Nutrition: 80,
      SAN: 1,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_CowPal",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4039,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 80,
    SAN: 1,
  },
  {
    id: 47,
    name: "Broncherry Rib Roast",
    rarity: "Uncommon",
    description:
      "Grilled meat brimming with the flavor of the king of the wilds.\r\nJuices from the compressed meat flow from the bone,\r\nmaking it surprisingly tender despite the initial toughness.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_SakuraSaurus.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_SakuraSaurus.webp",
    recipe: [
      {
        name: "Broncherry Meat",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_SakuraSaurus.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_SakuraSaurus.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 2520,
      Weight: 5,
      MaxStackCount: 9999,
      Code: "BakedMeat_SakuraSaurus",
      Nutrition: 252,
      SAN: 3,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_SakuraSaurus",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4008,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 252,
    SAN: 3,
  },
  {
    id: 48,
    name: "Mammorest Steak",
    rarity: "Uncommon",
    description:
      "Boasts a rich and dignified flavor.\r\nMemories of glaciers and deep forests come rushing back with every bite.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BakedMeat_GrassMammoth.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BakedMeat_GrassMammoth.webp",
    recipe: [
      {
        name: "Mammorest Meat",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_GrassMammoth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_GrassMammoth.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 2520,
      Weight: 5,
      MaxStackCount: 9999,
      Code: "BakedMeat_GrassMammoth",
      Nutrition: 252,
      SAN: 3,
      Corruption: "1200 Seconds",
      IconName: "BakedMeat_GrassMammoth",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4009,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 252,
    SAN: 3,
  },
  {
    id: 49,
    name: "Chikipi Saut\u00e9",
    rarity: "Uncommon",
    description:
      "Plump poultry saut\u00e9ed in butter.\r\nAccented with fresh lemons.\r\nEating it will slightly increase work speed for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_ChickenSaute.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_ChickenSaute.webp",
    recipe: [
      {
        name: "Chikipi Poultry",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_ChickenPal.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_ChickenPal.webp",
      },
      {
        name: "Red Berries",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 920,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "ChickenSaute",
      Nutrition: 92,
      SAN: 12,
      Corruption: "1200 Seconds",
      IconName: "ChickenSaute",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4034,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 92,
    SAN: 12,
    "Work Speed": 30,
    "Recovery Time": 600,
  },
  {
    id: 50,
    name: "Herb Roasted Lamball",
    rarity: "Uncommon",
    description:
      "Indulging in an abundance of fresh berries\r\ncreates a tantalizing aroma that accentuates the unique flavor of mutton.\r\nEating it will increase Defense by +10% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_GrilledSheepHerbs.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_GrilledSheepHerbs.webp",
    recipe: [
      {
        name: "Lamball Mutton",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_SheepBall.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_SheepBall.webp",
      },
      {
        name: "Red Berries",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 940,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "GrilledSheepHerbs",
      Nutrition: 94,
      SAN: 12,
      Corruption: "1200 Seconds",
      IconName: "GrilledSheepHerbs",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4033,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 94,
    SAN: 12,
    "Recovery Time": 600,
    Defense: 10,
  },
  {
    id: 51,
    name: "Grilled Lamball",
    rarity: "Uncommon",
    description:
      "Marinated mutton slow-cooked over a grill.\r\nEating it will slightly increase work speed\r\nand make SAN decrease slightly slower for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_GenghisKhan.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_GenghisKhan.webp",
    recipe: [
      {
        name: "Lamball Mutton",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_SheepBall.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_SheepBall.webp",
      },
      {
        name: "Lettuce",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lettuce.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Lettuce.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 1470,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "GenghisKhan",
      Nutrition: 147,
      SAN: 18,
      Corruption: "1200 Seconds",
      IconName: "GenghisKhan",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4022,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 147,
    SAN: 18,
    "Work Speed": 30,
    "Recovery Time": 600,
    SANResist: 20,
  },
  {
    id: 52,
    name: "Stewed Galeclaw",
    rarity: "Uncommon",
    description:
      "Slow-cooked dish that exudes a burst of rich, wild flavors.\r\nEating it will make SAN decrease slightly slower for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Eaglestew.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Eaglestew.webp",
    recipe: [
      {
        name: "Galeclaw Poultry",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Eagle.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Eagle.webp",
      },
      {
        name: "Red Berries",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 920,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Eaglestew",
      Nutrition: 92,
      SAN: 12,
      Corruption: "1200 Seconds",
      IconName: "Eaglestew",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4035,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 92,
    SAN: 12,
    "Recovery Time": 600,
    SANResist: 20,
  },
  {
    id: 53,
    name: "Rushoar Bacon 'n' Eggs",
    rarity: "Uncommon",
    description:
      "The smoky essence of bacon intertwines flawlessly\r\nwith the gentle texture of eggs, creating a sublime harmony of flavors.\r\nEating it will increase Attack by +10% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_BaconEggs.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_BaconEggs.webp",
    recipe: [
      {
        name: "Rushoar Pork",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Boar.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Boar.webp",
      },
      {
        name: "Egg",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 1670,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "BaconEggs",
      Nutrition: 167,
      SAN: 21,
      Corruption: "1200 Seconds",
      IconName: "BaconEggs",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4019,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 167,
    SAN: 21,
    "Recovery Time": 600,
    Attack: 10,
  },
  {
    id: 54,
    name: "Reindrix Stew",
    rarity: "Uncommon",
    description:
      "Stewed vegetables and venison that was reared in a frigid environment.\r\nThe meat's soft texture melts away to reveal a delicate sweetness.\r\nEating it will stay full slightly longer for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_StewedIceDeer.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_StewedIceDeer.webp",
    recipe: [
      {
        name: "Reindrix Venison",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_IceDeer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_IceDeer.webp",
      },
      {
        name: "Tomato",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Tomato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Tomato.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 1320,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "StewedIceDeer",
      Nutrition: 132,
      SAN: 17,
      Corruption: "1200 Seconds",
      IconName: "StewedIceDeer",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4025,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 132,
    SAN: 17,
    "Recovery Time": 600,
    HungerResist: 25,
  },
  {
    id: 55,
    name: "Fried Chikipi",
    rarity: "Rare",
    description:
      "Magnificently juicy poultry.\r\nEating it will slightly increase work speed\r\nand make SAN decrease slower for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_FriedChicken.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_FriedChicken.webp",
    recipe: [
      {
        name: "Chikipi Poultry",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_ChickenPal.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_ChickenPal.webp",
      },
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Egg",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
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
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1080,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "FriedChicken",
      Nutrition: 108,
      SAN: 14,
      Corruption: "1200 Seconds",
      IconName: "FriedChicken",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4030,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 108,
    SAN: 14,
    "Work Speed": 30,
    "Recovery Time": 600,
    SANResist: 25,
  },
  {
    id: 56,
    name: "Rushoar Hot Dog",
    rarity: "Rare",
    description:
      "Thick sausage wedged between warm buns.\r\nThe crisply seared meat and spicy flavors are to die for.\r\nEating it will increase Defense by +20% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_HotDog_2.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_HotDog_2.webp",
    recipe: [
      {
        name: "Rushoar Pork",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Boar.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Boar.webp",
      },
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Lettuce",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lettuce.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Lettuce.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1400,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "HotDog_2",
      Nutrition: 140,
      SAN: 18,
      Corruption: "1200 Seconds",
      IconName: "HotDog_2",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4024,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 140,
    SAN: 18,
    "Recovery Time": 600,
    Defense: 20,
  },
  {
    id: 57,
    name: "Eikthyrdeer Loco Moco",
    rarity: "Rare",
    description:
      "Thick hamburger steak accented with a creamy fried egg.\r\nThis sublime combination brings pure joy to the mouths of those who eat it.\r\nEating it will increase Attack by +20% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_DeerLocoMoco.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_DeerLocoMoco.webp",
    recipe: [
      {
        name: "Eikthyrdeer Venison",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Deer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Deer.webp",
      },
      {
        name: "Red Berries",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
      {
        name: "Egg",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1740,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "DeerLocoMoco",
      Nutrition: 174,
      SAN: 22,
      Corruption: "1200 Seconds",
      IconName: "DeerLocoMoco",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4017,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 174,
    SAN: 22,
    "Recovery Time": 600,
    Attack: 20,
  },
  {
    id: 58,
    name: "Eikthyrdeer Stew",
    rarity: "Rare",
    description:
      "A tender, melt-in-your-mouth venison stew crafted with love.\r\nThe intertwining flavors of vegetables and meat create a harmonious blend that brings out a comforting richness.\r\nEating it will increase Defense by +20% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_DeerStew.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_DeerStew.webp",
    recipe: [
      {
        name: "Eikthyrdeer Venison",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Deer.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Deer.webp",
      },
      {
        name: "Mushroom",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Mushroom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Mushroom.webp",
      },
      {
        name: "Milk",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 2120,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "DeerStew",
      Nutrition: 212,
      SAN: 27,
      Corruption: "1200 Seconds",
      IconName: "DeerStew",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4010,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 212,
    SAN: 27,
    "Recovery Time": 600,
    Defense: 20,
  },
  {
    id: 59,
    name: "Mozzarina Hamburger",
    rarity: "Rare",
    description:
      "The rich flavor of beef melds with the sweetness of the buns in perfect harmony in this masterpiece.\r\nEating it will increase work speed\r\nand make SAN decrease slightly slower for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Hamburger_2.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Hamburger_2.webp",
    recipe: [
      {
        name: "Mozzarina Meat",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_CowPal.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_CowPal.webp",
      },
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Lettuce",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lettuce.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Lettuce.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1620,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Hamburger_2",
      Nutrition: 162,
      SAN: 20,
      Corruption: "1200 Seconds",
      IconName: "Hamburger_2",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4020,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 162,
    SAN: 20,
    "Work Speed": 50,
    "Recovery Time": 600,
    SANResist: 25,
  },
  {
    id: 60,
    name: "Mozzarina Cheeseburger",
    rarity: "Rare",
    description:
      "Now with cheese, this dish has reached the highest level of fine cuisine.\r\nEating it will increase Attack by +20%\r\nand stay full longer for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_CheeseBurger_2.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_CheeseBurger_2.webp",
    recipe: [
      {
        name: "Mozzarina Meat",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_CowPal.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_CowPal.webp",
      },
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Tomato",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Tomato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Tomato.webp",
      },
      {
        name: "Milk",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 2880,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Cheeseburger_2",
      Nutrition: 288,
      SAN: 36,
      Corruption: "1200 Seconds",
      IconName: "Cheeseburger_2",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4006,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 288,
    SAN: 36,
    "Recovery Time": 600,
    Attack: 20,
    HungerResist: 50,
  },
  {
    id: 61,
    name: "Fried Kelpsea",
    rarity: "Rare",
    description:
      "Crunchy fried batter perfectly accentuates the Kelpsea's plumpness.\r\nEating it will increase Defense by +10%\r\nand make SAN decrease slower for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_FriedKelpie.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_FriedKelpie.webp",
    recipe: [
      {
        name: "Raw Kelpsea",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Kelpie.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Kelpie.webp",
      },
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Egg",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
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
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1080,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "FriedKelpie",
      Nutrition: 108,
      SAN: 14,
      Corruption: "600 Seconds",
      IconName: "FriedKelpie",
      TypeA: "Food",
      TypeB: "FoodDishFish",
      SortID: 4031,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 108,
    SAN: 14,
    "Recovery Time": 600,
    Defense: 10,
    SANResist: 50,
  },
  {
    id: 62,
    name: "Dumud Chowder",
    rarity: "Rare",
    description:
      "Dumud lavishly covered in a thick, creamy soup.\r\nEating it will increase work speed\r\nand stay full slightly longer for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Chowder.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Chowder.webp",
    recipe: [
      {
        name: "Raw Dumud",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_LazyCatfish.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_LazyCatfish.webp",
      },
      {
        name: "Lettuce",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Lettuce.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Lettuce.webp",
      },
      {
        name: "Tomato",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Tomato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Tomato.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1700,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Chowder",
      Nutrition: 170,
      SAN: 21,
      Corruption: "600 Seconds",
      IconName: "Chowder",
      TypeA: "Food",
      TypeB: "FoodDishFish",
      SortID: 4018,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 170,
    SAN: 21,
    "Work Speed": 50,
    "Recovery Time": 600,
    HungerResist: 25,
  },
  {
    id: 63,
    name: "Cavern Mushroom",
    rarity: "Common",
    description:
      "Mushroom that grows prolifically in caves.\r\nCan be made into healing medicine.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_HealingMushroom.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_HealingMushroom.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 50,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "CaveMushroom",
      Nutrition: 15,
      SAN: 0,
      Corruption: "3600 Seconds",
      IconName: "HealingMushroom",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4071,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 15,
  },
  {
    id: 64,
    name: "Mysterious Mushroom",
    rarity: "Common",
    description:
      "Mushrooms that are not suitable for eating raw.\r\nEating makes one more prone to feeling hungry.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_PoisonMushroom.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_PoisonMushroom.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 50,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "PoisonMushroom",
      Nutrition: 1,
      SAN: 3,
      Corruption: "901 Seconds",
      IconName: "PoisonMushroom",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4002,
      ItemStaticClass: "CommonConsume",
      VisualBlueprintClassName: "BP_Item_PoisonMushroom",
      SneakAttackRate: 1,
    },
    Nutrition: 1,
    SAN: 3,
    "Recovery Time": 60,
    HungerResist: -25,
  },
  {
    id: 65,
    name: "Potato",
    rarity: "Common",
    description:
      "A hardy and filling crop that grows in any terrain. \r\nNot suitable for raw consumption.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potato.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Potato.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "",
      Rank: 1,
      "Gold Coin": 50,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Potato",
      Nutrition: 11,
      SAN: 0,
      Corruption: "2701 Seconds",
      IconName: "Potato",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4076,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
      Defense: 3,
      Hp: -1,
    },
    Nutrition: 11,
  },
  {
    id: 66,
    name: "Carrot",
    rarity: "Common",
    description:
      "A vibrant, nutrient-rich root vegetable. \r\nNot suitable for raw consumption.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Carrot.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Carrot.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 50,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Carrot",
      Nutrition: 10,
      SAN: 0,
      Corruption: "2701 Seconds",
      IconName: "Carrot",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4078,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 10,
  },
  {
    id: 67,
    name: "Onion",
    rarity: "Common",
    description:
      "A cherished and easy-to-grow vegetable with a rich history. \r\nNot suitable for eating raw.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Onion.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Onion.webp",
    recipe: [],
    stats: {
      Rarity: "Common",
      Type: "Ingredient",
      Rank: 1,
      "Gold Coin": 50,
      Weight: 1,
      MaxStackCount: 9999,
      Code: "Onion",
      Nutrition: 9,
      SAN: 0,
      Corruption: "2701 Seconds",
      IconName: "Onion",
      TypeA: "Food",
      TypeB: "FoodVegetable",
      SortID: 4079,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 9,
  },
  {
    id: 68,
    name: "Rushoar Gyoza",
    rarity: "Uncommon",
    description:
      "A dish made by wrapping a filling of mushrooms and meat in wheat flour and boiling it. The chewy texture is irresistible. \r\nEating it improves your Attack by 10% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Gyoza.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Gyoza.webp",
    recipe: [
      {
        name: "Rushoar Pork",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Boar.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Boar.webp",
      },
      {
        name: "Mushroom",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Mushroom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Mushroom.webp",
      },
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 1150,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Gyoza",
      Nutrition: 115,
      SAN: 20,
      Corruption: "600 Seconds",
      IconName: "Gyoza",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4027,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 115,
    SAN: 20,
    "Recovery Time": 600,
    Attack: 10,
    HungerResist: 25,
  },
  {
    id: 69,
    name: "Stir-Fried Vegetables",
    rarity: "Uncommon",
    description:
      "A dish made by stir-frying Carrot and Onion. \r\nA simple and delicious way to enjoy vegetables. Eating it will slightly increase your work speed and improve your Defense by 10% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_FriedVegetables.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_FriedVegetables.webp",
    recipe: [
      {
        name: "Onion",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Onion.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Onion.webp",
      },
      {
        name: "Carrot",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Carrot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Carrot.webp",
      },
    ],
    stats: {
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 540,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "StirFriedVegetables",
      Nutrition: 54,
      SAN: 7,
      Corruption: "600 Seconds",
      IconName: "StirFriedVegetables",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4048,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 54,
    SAN: 7,
    "Work Speed": 10,
    "Recovery Time": 600,
    Defense: 10,
  },
  {
    id: 70,
    name: "French Fries",
    rarity: "Uncommon",
    description:
      "A dish made by deep-frying Potato. \r\nOnce you start eating, you can't stop. Eating it will make it harder for your SAN value to decrease for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_PotatoChips.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_PotatoChips.webp",
    recipe: [
      {
        name: "Potato",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Potato.webp",
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
      Rarity: "Uncommon",
      Type: "Ingredient",
      Rank: 2,
      "Gold Coin": 350,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "PotatoChips",
      Nutrition: 35,
      SAN: 10,
      Corruption: "600 Seconds",
      IconName: "PotatoChips",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4063,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 35,
    SAN: 10,
    "Recovery Time": 600,
    SANResist: 25,
  },
  {
    id: 71,
    name: "Broncherry Fried Noodles",
    rarity: "Rare",
    description:
      "A dish made by stir-frying noodles with vegetables and meat. \r\nThe rich seasoning pairs perfectly with the thick cuts of meat. Eating it will increase your Attack by 20% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Yakisoba.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Yakisoba.webp",
    recipe: [
      {
        name: "Broncherry Meat",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_SakuraSaurus.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_SakuraSaurus.webp",
      },
      {
        name: "Onion",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Onion.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Onion.webp",
      },
      {
        name: "Carrot",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Carrot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Carrot.webp",
      },
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 3210,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Yakisoba",
      Nutrition: 321,
      SAN: 40,
      Corruption: "600 Seconds",
      IconName: "Yakisoba",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4003,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 321,
    SAN: 40,
    "Recovery Time": 600,
    Attack: 20,
  },
  {
    id: 72,
    name: "Spring Rolls",
    rarity: "Rare",
    description:
      "A dish made by wrapping vegetables and mushrooms in a thin skin and deep-frying them. \r\nThe crispy texture is delightful. Eating it will make it harder for your SAN value to decrease and increase your Attack by 10% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_SpringRolls.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_SpringRolls.webp",
    recipe: [
      {
        name: "Onion",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Onion.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Onion.webp",
      },
      {
        name: "Mushroom",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Mushroom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Mushroom.webp",
      },
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1150,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "SpringRolls",
      Nutrition: 115,
      SAN: 14,
      Corruption: "600 Seconds",
      IconName: "SpringRolls",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4028,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 115,
    SAN: 14,
    "Recovery Time": 600,
    SANResist: 50,
    Attack: 10,
  },
  {
    id: 73,
    name: "Gratin",
    rarity: "Rare",
    description:
      "A dish made by coating potatoes with sauce and baking them to perfection. \r\nBest enjoyed hot and fresh. Eating it will provide lasting fullness and increase your Defense by 10% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Gratin.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Gratin.webp",
    recipe: [
      {
        name: "Milk",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
      {
        name: "Potato",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Potato.webp",
      },
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1130,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Gratin",
      Nutrition: 113,
      SAN: 14,
      Corruption: "600 Seconds",
      IconName: "Gratin",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4029,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 113,
    SAN: 14,
    "Recovery Time": 600,
    Defense: 10,
    HungerResist: 50,
  },
  {
    id: 74,
    name: "Minestrone",
    rarity: "Rare",
    description:
      "A soup simmered with a variety of vegetables. \r\nDrinking it warms you to the core. Eating it will increase your work speed for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Minestrone.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Minestrone.webp",
    recipe: [
      {
        name: "Tomato",
        quantity: 3,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Tomato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Tomato.webp",
      },
      {
        name: "Carrot",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Carrot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Carrot.webp",
      },
      {
        name: "Onion",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Onion.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Onion.webp",
      },
      {
        name: "Potato",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Potato.webp",
      },
    ],
    stats: {
      Rarity: "Rare",
      Type: "Ingredient",
      Rank: 3,
      "Gold Coin": 1460,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Minestrone",
      Nutrition: 146,
      SAN: 18,
      Corruption: "600 Seconds",
      IconName: "Minestrone",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4023,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 146,
    SAN: 18,
    "Work Speed": 40,
    "Recovery Time": 600,
  },
  {
    id: 75,
    name: "Mammorest Curry",
    rarity: "Epic",
    description:
      "A dish made by simmering vegetables and meat with spices. \r\nThe rich flavor is highlighted by large chunks of tender meat. Eating it will increase your Attack by 25% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Curry.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Curry.webp",
    recipe: [
      {
        name: "Mammorest Meat",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_GrassMammoth.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_GrassMammoth.webp",
      },
      {
        name: "Onion",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Onion.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Onion.webp",
      },
      {
        name: "Carrot",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Carrot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Carrot.webp",
      },
      {
        name: "Potato",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Potato.webp",
      },
      {
        name: "Red Berries",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Berries.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Berries.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Ingredient",
      Rank: 4,
      "Gold Coin": 4180,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Curry",
      Nutrition: 418,
      SAN: 52,
      Corruption: "600 Seconds",
      IconName: "Curry",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4001,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 418,
    SAN: 52,
    "Recovery Time": 600,
    Attack: 25,
  },
  {
    id: 76,
    name: "Galeclaw Nikujaga",
    rarity: "Epic",
    description:
      "A dish made by simmering meat and potatoes in a sweet and savory sauce. \r\nIt has a mysteriously nostalgic taste. Eating it will increase your Defense  by 25% for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_MeatAndPotatoes.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_MeatAndPotatoes.webp",
    recipe: [
      {
        name: "Galeclaw Poultry",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Meat_Eagle.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Meat_Eagle.webp",
      },
      {
        name: "Onion",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Onion.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Onion.webp",
      },
      {
        name: "Carrot",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Carrot.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Carrot.webp",
      },
      {
        name: "Potato",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Potato.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Potato.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Ingredient",
      Rank: 4,
      "Gold Coin": 1500,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "MeatAndPotatoes",
      Nutrition: 150,
      SAN: 19,
      Corruption: "600 Seconds",
      IconName: "MeatAndPotatoes",
      TypeA: "Food",
      TypeB: "FoodDishMeat",
      SortID: 4021,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 150,
    SAN: 19,
    "Recovery Time": 600,
    Defense: 25,
  },
  {
    id: 77,
    name: "Mushroom Quiche",
    rarity: "Epic",
    description:
      "A dish made by baking a pastry crust filled with eggs, vegetables, mushrooms, and cream. \r\nIt\u2019s delicious even when cooled. Eating it will help you stay fuller for a while and make it harder for your SAN value to decrease for a period of time.",
    image_url:
      "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Quiche.webp",
    image_github_url:
      "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Quiche.webp",
    recipe: [
      {
        name: "Flour",
        quantity: 1,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_Flour.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Material_Flour.webp",
      },
      {
        name: "Mushroom",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Mushroom.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Mushroom.webp",
      },
      {
        name: "Onion",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Onion.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/materials/T_itemicon_Food_Onion.webp",
      },
      {
        name: "Egg",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Egg.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Egg.webp",
      },
      {
        name: "Milk",
        quantity: 2,
        image_url:
          "https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Food_Milk.webp",
        image_github_url:
          "https://raw.githubusercontent.com/pratyanj/palworld-scraper/main/images/ingredients/T_itemicon_Food_Milk.webp",
      },
    ],
    stats: {
      Rarity: "Epic",
      Type: "Ingredient",
      Rank: 4,
      "Gold Coin": 1840,
      Weight: "0.5",
      MaxStackCount: 9999,
      Code: "Quiche",
      Nutrition: 184,
      SAN: 23,
      Corruption: "600 Seconds",
      IconName: "Quiche",
      TypeA: "Food",
      TypeB: "FoodDishVegetable",
      SortID: 4014,
      ItemStaticClass: "CommonConsume",
      SneakAttackRate: 1,
    },
    Nutrition: 184,
    SAN: 23,
    "Recovery Time": 600,
    SANResist: 50,
    HungerResist: 50,
  },
];
