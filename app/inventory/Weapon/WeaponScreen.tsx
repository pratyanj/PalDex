import { StyleSheet, FlatList, TouchableOpacity, Text, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../constants/Colors";
import { ThemeContext } from "../../../constants/ThemeContext";
import { router } from "expo-router";
import { weaponDataSet } from "../../../constants/inv/weapon";
import { ItemCard } from "../../../components/inv/ItemCard";
import { ListHeader } from "../../../components/inv/ListHeader";

export default function WeaponScreen() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  const [visibleItems, setVisibleItems] = useState(20);

  const [searchQuery, setSearchQuery] = useState("");
          const handleSearch = (text: string) => {
              setSearchQuery(text);
            };
      
          const filteredItems = weaponDataSet.filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 20);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      onPress={() =>
        router.push({
          pathname: "/inventory/Weapon/WeaponDetail",
          params: { id: item.id - 1 },
        })
      }
    >
      <ItemCard
        name={item.name}
        img={item.image_github_url}
        type={item.stats ? item.stats.GoldCoin : 888}
        rarity={item.rarity}
        actColor={actColor}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: actColor.background }]}>
      {ListHeader("Weapons", actColor,"/Inventory")}
      
      <TextInput
          style={[
              styles.searchInput,
              {
              backgroundColor: actColor.backdrop,
              color: actColor.onSurface,
              },
          ]}
          placeholder="Search Pal..."
          placeholderTextColor={actColor.onSurfaceVariant}
          value={searchQuery}
          onChangeText={handleSearch}
          
      />
      <FlatList
        contentContainerStyle={styles.content}
        data={filteredItems.slice(0, visibleItems)}
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
  searchInput: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginHorizontal: 16,
    marginVertical: 10,
  },
});
