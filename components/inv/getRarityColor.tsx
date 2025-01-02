export const getRarityColor = (actColor,rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "common":
        return actColor.onSurface;
      case "rare":
        return actColor.primary;
      case "epic":
        return actColor.parpleContainer;
      case "legendary":
        return actColor.yellow;
      default:
        return actColor.onSurface;
    }
  };