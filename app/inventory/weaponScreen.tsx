import { StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { router } from "expo-router";
import { weaponDataSet } from "../../constants/weapon";
import { ItemCard } from "../../components/inv/ItemCard";
import { ListHeader } from "../../components/inv/ListHeader";

export default function WeaponScreen() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  const [visibleItems, setVisibleItems] = useState(20);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 20);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      onPress={() =>
        router.push({
          pathname: "/inventory/WeaponDetail",
          params: { id: item.ID - 1 },
        })
      }
    >
      <ItemCard
        name={item.name}
        img={item.image}
        type={item.stats ? item.stats.GoldCoin : 888}
        rarity={item.rarity}
        actColor={actColor}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: actColor.background }]}>
      {ListHeader("Weapons", actColor)}

      <FlatList
        contentContainerStyle={styles.content}
        data={weaponDataSet.slice(0, visibleItems)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.placeholderText}>No Weapons Found</Text>}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 15,
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 18,
    fontFamily: "Inter-Regular",
    textAlign: "center",
    marginTop: 20,
  },
});
