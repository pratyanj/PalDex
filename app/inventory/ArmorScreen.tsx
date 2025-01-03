import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
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

export default function armorScreen() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: actColor.background }]}
        >
            {ListHeader("Armors", actColor)}

            <ScrollView contentContainerStyle={styles.content}>
                {
                    Armors.length == 0 ? <Text style={styles.placeholderText}>No Armors Found</Text> :
                    Armors.map((item, index) => {
                        return (
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
                                    type='Armor'
                                    rarity={item.rarity}
                                    actColor={actColor}
                                />
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
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