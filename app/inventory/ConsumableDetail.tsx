import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { Image } from "expo-image";
import { Consumables } from "../../constants/Consumables";
import { router, useLocalSearchParams } from "expo-router";
import { CreateStatRow } from "../../components/inv/CreateStatRow";
import InvHeader from "../../components/inv/Header";
import { CraftingRecipe } from "../../components/inv/CraftingRecipe";
import { GetRarityColor } from "../../components/inv/GetRarityColor";

export default function ConsumableDetail() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];

    const { id } = useLocalSearchParams();
    const [consumableID, setConsumableID] = useState(id || 0);

    // ststus value
    const [Nutrition, setNutrition] = useState(false);
    const [SAN , setSAN] = useState(false);
    const [workSpeed,setWorkSpeed] = useState(false);
    const [RecoveryTime,setRecoveryTime] = useState(false);
    const [TechnologyPoints,setTechnologyPoints] = useState(false);
    const [Technology,setTechnology] = useState(false);
    const [MaxHP,setMaxHP] = useState(false);
    const [MaxSP,setMaxSP] = useState(false);
    const [Power,setPower] = useState(false);
    const [MaxInventoryWeight,setMaxInventoryWeight] = useState(false);
    const [Exp,setExp] = useState(false);
    const [recipe, setRecipe] = useState(false)


    const dataCheck = () => {
        if (Consumables[Number(consumableID)].Nutrition) {
            setNutrition(true);
        }
        if (Consumables[Number(consumableID)].san) {
            setSAN(true);
        }
        if (Consumables[Number(consumableID)].stamina_work) {
            setWorkSpeed(true);
        }
        if (Consumables[Number(consumableID).recovery_time]) {
            setRecoveryTime(true);
        }
        if (Consumables[Number(consumableID)].technology_points) {
            setTechnologyPoints(true);
        }
        if (Consumables[Number(consumableID)].technology) {
            setTechnology(true);
        }
        if (Consumables[Number(consumableID)].max_hp) {
            setMaxHP(true);
        }
        if (Consumables[Number(consumableID)].max_sp) {
            setMaxSP(true);
        }
        if (Consumables[Number(consumableID)].power) {
            setPower(true);
        }
        if (Consumables[Number(consumableID)].max_inventory_weight) {
            setMaxInventoryWeight(true);
        }
        if (Consumables[Number(consumableID)].exp) {
            setExp(true);
        }
        if (Consumables[Number(consumableID)].recipe.length > 0) {
            setRecipe(true);
    };
}
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
            <Image source={img} style={styles.consumableImage} />
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
                {Nutrition && CreateStatRow("Nutrition", Consumables[Number(consumableID)].Nutrition, actColor)}
                {SAN && CreateStatRow("SAN", Consumables[Number(consumableID)].san, actColor)}
                {Exp && CreateStatRow("Exp", Consumables[Number(consumableID)].exp, actColor)}
                {workSpeed && CreateStatRow("Work Speed", Consumables[Number(consumableID)].stamina_work, actColor)}
                {RecoveryTime && CreateStatRow("Recovery Time", Consumables[Number(consumableID)].recovery_time, actColor)}
                {TechnologyPoints && CreateStatRow("Technology Points", Consumables[Number(consumableID)].technology_points, actColor)}
                {Technology && CreateStatRow("Technology", Consumables[Number(consumableID)].technology, actColor)}
                {MaxHP && CreateStatRow("MaxHP", Consumables[Number(consumableID)].max_hp, actColor)}
                {MaxSP && CreateStatRow("MaxSP", Consumables[Number(consumableID)].max_sp, actColor)}
                {Power && CreateStatRow("Power", Consumables[Number(consumableID)].power, actColor)}
                {MaxInventoryWeight && CreateStatRow("Max InventoryWeight", Consumables[Number(consumableID)].max_inventory_weight, actColor)}
            </View>
        </View>
    );

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: actColor.background }]}
        >
            <InvHeader
                name="Consumable details"
                actColor={actColor}
                path="/inventory/ConsumableScreen"
            />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <ItemView
                    name={Consumables[Number(consumableID)].name}
                    img={Consumables[Number(consumableID)].image_github_url}
                    type="Consumable"
                    raritytpye={Consumables[Number(consumableID)].rarity}
                    actColor={actColor}
                />
                <View
                    style={[
                        styles.statsContainer,
                        { backgroundColor: actColor.surfaceDisabled },
                    ]}
                >
                    <Text style={{ fontSize: 16, color: actColor.onBackground }}>
                        {Consumables[Number(consumableID)].description}
                    </Text>
                </View>

               

                {recipe && 
                <>
                <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
                    Crafting
                </Text>
                <CraftingRecipe
                    recipe={Consumables[Number(consumableID)].recipe}
                    actColor={actColor}
                />
                </>
                }
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
    consumableImage: {
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