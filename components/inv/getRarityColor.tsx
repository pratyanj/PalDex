export const GetRarityColor = (actColor,rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "common":
        return '#999999';
      case "uncommon":
        return actColor.succes;
      case "rare":
        return actColor.primary;
      case "epic":
        return actColor.parpleContainer;
      case "legendary":
        return actColor.yellow;
      default:
        return '#999999';
    }
  };