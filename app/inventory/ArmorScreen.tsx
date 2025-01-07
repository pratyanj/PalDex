import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
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
import { Armors } from "../../constants/Armors";
import { ItemCard } from "../../components/inv/ItemCard";
export default function ArmorScreen() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];
    const [visibleItems, setVisibleItems] = useState(15);

    const loadMoreItems = () => {
        setVisibleItems((prev) => prev + 15);
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            onPress={() =>
                router.push({
                    pathname: "/inventory/ArmorDetails",
                    params: { id: item.ID - 1 },
                })
            }
        >
            <ItemCard
                name={item.name}
                img={item.image}
                type={item.stats ? item.stats["Gold Coin"] : 123456789}
                rarity={item.rarity}
                actColor={actColor}
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: actColor.background }]}
        >
            {ListHeader("Armors", actColor)}

            <FlatList
                contentContainerStyle={styles.content}
                data={Armors.slice(0, visibleItems)}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={<Text style={styles.placeholderText}>No Armors Found</Text>}
                onEndReached={loadMoreItems}
                onEndReachedThreshold={0.5}
                ListFooterComponent={<Text style={styles.placeholderText}>Loading data...</Text>}
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