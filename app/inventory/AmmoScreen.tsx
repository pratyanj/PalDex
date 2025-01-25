import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { Image } from "expo-image";
import { ListHeader } from "../../components/inv/ListHeader";
import { ItemsData } from "../../constants/allItems";
import { Ammo } from "../../constants/Ammo";
import { ItemCard } from "../../components/inv/ItemCard";

export default function AmmoScreen() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
    const [visibleItems, setVisibleItems] = useState(15);

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (text: string) => {
        setSearchQuery(text);
    };

    const filteredItems = Ammo.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + 15);
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            onPress={() =>
                router.push({
                    pathname: "/inventory/AmmoDetail",
                    params: { id: item.id - 1 },
                })
            }
        >
            <ItemCard
                name={item.name}
                img={item.image_github_url}
                type={item.stats ? item.stats["Gold Coin"] : 0}
                rarity={item.rarity}
                actColor={actColor}
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: actColor.background }]}
        >
            {ListHeader("Ammo", actColor,"/Inventory")}
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
                ListEmptyComponent={<Text style={styles.placeholderText}>No Ammo Found</Text>}
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