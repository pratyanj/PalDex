import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { Image } from "expo-image";
import { Productions } from "../../constants/Productions";
import { router, useLocalSearchParams } from "expo-router";
import { CreateStatRow } from "../../components/inv/CreateStatRow";
import InvHeader from "../../components/inv/Header";
import { CraftingRecipe } from "../../components/inv/CraftingRecipe";
import { GetRarityColor } from "../../components/inv/GetRarityColor";

export default function ProductionDetail() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];

    const { id } = useLocalSearchParams();
    const [productionID, setProductionID] = useState(id || 0);

    const [efficiency, setEfficiency] = useState(false);
    const [capacity, setCapacity] = useState(false);
    const [technology, setTechnology] = useState(false);
    const [productionEffect, setProductionEffect] = useState(false);

    const dataCheck = () => {
        if (Productions[Number(productionID)].SAN) {
            setEfficiency(true);
        }
    };
    useEffect(() => {
        dataCheck();
    }, []);

    type ItemViewProps = {
        name: string;
        img: any;
        type: string;
        raritytpye: string;
        actColor: any;
    };
    const ItemView = ({
        name,
        img,
        type,
        raritytpye,
        actColor,
    }: ItemViewProps) => (
        <View style={[styles.card, { backgroundColor: actColor.surfaceVariant }]}>
            <Image source={img} style={styles.productionImage} />
            <Text style={[styles.title, { color: actColor.primary }]}>{name}</Text>
            <View style={styles.typeContainer}>
                <Text style={[styles.type, { color: actColor.onBackground }]}>
                    {type}
                </Text>
                <Text
                    style={[
                        styles.rarity,
                        {
                            color: actColor.shadow,
                            backgroundColor: GetRarityColor(actColor, raritytpye),
                            borderRadius: 10,
                            paddingHorizontal: 8,
                        },
                    ]}
                >
                    {raritytpye}
                </Text>
            </View>
            <View
                style={{
                    flexWrap: "wrap",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    gap: 20,
                }}
            >
                {/* {efficiency && CreateStatRow("Efficiency", Productions[Number(productionID)].efficiency, actColor)}
                {capacity && CreateStatRow("Capacity", Productions[Number(productionID)].capacity, actColor)}
                {technology && CreateStatRow("Technology", Productions[Number(productionID)].technology, actColor)} */}
            </View>
        </View>
    );

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: actColor.background }]}
        >
            <InvHeader
                name="Production details"
                actColor={actColor}
                path="/Construction/ProductionScreen"
            />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <ItemView
                    name={Productions[Number(productionID)].name}
                    img={Productions[Number(productionID)].image_github_url}
                    type="Production"
                    raritytpye={Productions[Number(productionID)].rarity}
                    actColor={actColor}
                />
                <View
                    style={[
                        styles.statsContainer,
                        { backgroundColor: actColor.surfaceDisabled },
                    ]}
                >
                    <Text style={{ fontSize: 16, color: actColor.onBackground }}>
                        {Productions[Number(productionID)].description}
                    </Text>
                </View>
                {/* {productionEffect &&
                    <View
                        style={[
                            styles.statsContainer,
                            { backgroundColor: actColor.surfaceDisabled, marginTop: 10 },
                        ]}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: actColor.onBackground, marginBottom: 8 }}>
                            Effects:
                        </Text>
                        {Productions[Number(productionID)].effects?.map((effect, index) => (
                            <Text
                                key={index}
                                style={{
                                    fontSize: 14,
                                    color: actColor.onBackground,
                                    marginLeft: 16,
                                    marginBottom: 4,
                                    backgroundColor: actColor.background,
                                    width: 'auto',
                                    padding: 3,
                                    borderRadius: 50,
                                }}
                            >
                                💠{effect}
                            </Text>
                        ))}
                    </View>
                } */}

                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        backgroundColor: actColor.outlineVariant,
                        gap: 10,
                        padding: 10,
                        borderRadius: 10,
                        marginVertical: 10,
                        marginHorizontal: 2,
                    }}
                >
                    {/* {[
                        { label: "Health", value: Productions[Number(productionID)].stats.Health ? Productions[Number(productionID)].stats.Health : 0 },
                        { label: "Efficiency", value: Productions[Number(productionID)].stats.Efficiency ? Productions[Number(productionID)].stats.Efficiency : 0 },
                        {
                            label: "Gold Coin",
                            value: Productions[Number(productionID)].stats["Gold Coin"],
                        },
                        { label: "Weight", value: Productions[Number(productionID)].stats.Weight },
                        {
                            label: "Max Stack Count",
                            value: Productions[Number(productionID)].stats.MaxStackCount,
                        },
                        {
                            label: "Capacity",
                            value: Productions[Number(productionID)].stats.Capacity,
                        },
                    ].map((stat, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                backgroundColor: actColor.surface,
                                borderRadius: 8,
                                paddingVertical: 10,
                                paddingHorizontal: 12,
                                width: "48%",
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                elevation: 2,
                            }}
                        >
                            <Text
                                style={{
                                    color: actColor.onBackground,
                                    fontSize: 16,
                                    fontWeight: "500",
                                }}
                            >
                                {stat.label}:
                            </Text>
                            <Text
                                style={{
                                    color: actColor.primary,
                                    fontSize: 16,
                                    fontWeight: "bold",
                                }}
                            >
                                {stat.value}
                            </Text>
                        </View>
                    ))} */}
                </View>

                <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
                    Crafting
                </Text>
                <CraftingRecipe
                    recipe={Productions[Number(productionID)].recipe}
                    actColor={actColor}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        borderRadius: 16,
        padding: 16,
        alignItems: "center",
        marginBottom: 16,
    },
    productionImage: {
        width: 150,
        height: 150,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    typeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
    type: {
        fontSize: 14,
        marginRight: 8,
    },
    rarity: {
        fontSize: 14,
        fontWeight: "600",
    },
    statsContainer: {
        borderRadius: 12,
        padding: 16,
    },
    scrollView: {
        paddingBottom: 20,
    },
})