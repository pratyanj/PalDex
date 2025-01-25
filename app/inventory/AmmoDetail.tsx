import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { Image } from "expo-image";
import { Ammo } from "../../constants/Ammo";
import { router, useLocalSearchParams } from "expo-router";
import { CreateStatRow } from "../../components/inv/CreateStatRow";
import InvHeader from "../../components/inv/Header";
import { CraftingRecipe } from "../../components/inv/CraftingRecipe";
import { GetRarityColor } from "../../components/inv/GetRarityColor";

export default function AmmoDetail() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];

    const { id } = useLocalSearchParams();
    const [ammoID, setAmmoID] = useState(id || 0);

    // status value
    const [technology, setTechnology] = useState(false);
    const [recipe, setRecipe] = useState(false);

    const dataCheck = () => {
        if (Ammo[Number(ammoID)].technology) {
            setTechnology(true);
        } 
        if (Ammo[Number(ammoID)].recipe.length > 0) {
            setRecipe(true);
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
            <Image source={img} style={styles.ammoImage} />
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
                {technology && CreateStatRow("Damage", Ammo[Number(ammoID)].technology, actColor)}
                
            </View>
        </View>
    );

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: actColor.background }]}
        >
            <InvHeader
                name="Ammo details"
                actColor={actColor}
                path="/inventory/AmmoScreen"
            />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <ItemView
                    name={Ammo[Number(ammoID)].name}
                    img={Ammo[Number(ammoID)].image_github_url}
                    type="Ammo"
                    raritytpye={Ammo[Number(ammoID)].rarity}
                    actColor={actColor}
                />
                <View
                    style={[
                        styles.statsContainer,
                        { backgroundColor: actColor.surfaceDisabled },
                    ]}
                >
                    <Text style={{ fontSize: 16, color: actColor.onBackground }}>
                        {Ammo[Number(ammoID)].description}
                    </Text>
                </View>
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
                          {[
                           {
                              label: "Gold Coin",
                              value: Ammo[Number(ammoID)].stats["Gold Coin"],
                            },
                            { label: "Weight", value: Ammo[Number(ammoID)].stats.Weight },
                            {
                              label: "Max Stack Count",
                              value: Ammo[Number(ammoID)].stats.MaxStackCount,
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
                                              flexWrap: "wrap",
                                              flex: 1,
                                            }}
                                            numberOfLines={3}
                                            
                                          >
                                            {stat.label}:
                                          </Text>
                                          <Text
                                            style={{
                                              color: actColor.primary,
                                              fontSize: 16,
                                              fontWeight: "bold",
                                              flexWrap: "wrap",
                                              flex: 1,
                                              textAlign: "right",
                                            }}
                                            numberOfLines={2}
                                          >
                                            {stat.value?stat.value:0}
                                          </Text>
                                        </View>
                          ))}
                        </View>
                
               {recipe && <>
                <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
                    Crafting
                </Text>
                <CraftingRecipe
                    recipe={Ammo[Number(ammoID)].recipe}
                    actColor={actColor}
                />
                </>}
                
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
    ammoImage: {
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
});