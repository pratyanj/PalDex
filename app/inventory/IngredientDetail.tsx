import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { ThemeContext } from "../../constants/ThemeContext";
import { Image } from "expo-image";
import { Ingredients } from "../../constants/Ingredients";
import { router, useLocalSearchParams } from "expo-router";
import { CreateStatRow } from "../../components/inv/CreateStatRow";
import InvHeader from "../../components/inv/Header";
import { CraftingRecipe } from "../../components/inv/CraftingRecipe";
import { GetRarityColor } from "../../components/inv/GetRarityColor";

export default function IngredientDetail() {
    const { theme } = useContext(ThemeContext);
    const actColor = Colors[theme.mode];

    const { id } = useLocalSearchParams();
    const [ingredientID, setIngredientID] = useState(id || 0);

    // status value
    const [Nutrition, setNutrition] = useState(false);
    const [SAN , setSAN] = useState(false);
    const [workSpeed,setWorkSpeed] = useState(false);
    const [RecoveryTime,setRecoveryTime] = useState(false);
    const [recipe, setRecipe] = useState(false)

    const dataCheck = () => {
        if (Ingredients[Number(ingredientID)].Nutrition) {
            setNutrition(true);
        }
        if (Ingredients[Number(ingredientID)].SAN) {
            setSAN(true);
        }
        if (Ingredients[Number(ingredientID)]["Work Speed"]) {
            setWorkSpeed(true);
        }
        if (Ingredients[Number(ingredientID)['Recovery Time']]) {
            setRecoveryTime(true);
        }
        if (Ingredients[Number(ingredientID)].recipe.length > 0) {
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
            <Image source={img} style={styles.ingredientImage} />
            <Text style={[styles.title, { color: actColor.primary }]}>{name}</Text>
            <View style={styles.typeContainer}>
                <Text style={[styles.type, { color: actColor.onBackground }]}>
                    {type}
                </Text>
                <Text
                    style={[styles.rarity, {
                        color: actColor.shadow,
                        backgroundColor: GetRarityColor(actColor, raritytpye),
                        borderRadius: 10,
                        paddingHorizontal: 8,
                    }]}
                >
                    {raritytpye}
                </Text>
            </View>
            <View style={{
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-around",
                gap: 20,
            }}>
                {Nutrition && CreateStatRow("Nutrition", Ingredients[Number(ingredientID)].Nutrition, actColor)}
                {SAN && CreateStatRow("SAN", Ingredients[Number(ingredientID)].SAN, actColor)}
                {workSpeed && CreateStatRow("Work Speed", Ingredients[Number(ingredientID)]["Work Speed"], actColor)}
                {RecoveryTime && CreateStatRow("Recovery Time", Ingredients[Number(ingredientID)]["Recovery Time"], actColor)}
                
            </View>
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: actColor.background }]}>
            <InvHeader
                name="Ingredient details"
                actColor={actColor}
                path="/inventory/IngredientScreen"
            />

            <ScrollView contentContainerStyle={styles.scrollView}>
                <ItemView
                    name={Ingredients[Number(ingredientID)].name}
                    img={Ingredients[Number(ingredientID)].image}
                    type="Ingredient"
                    raritytpye={Ingredients[Number(ingredientID)].rarity}
                    actColor={actColor}
                />
                <View style={[styles.statsContainer, { backgroundColor: actColor.surfaceDisabled }]}>
                    <Text style={{ fontSize: 16, color: actColor.onBackground }}>
                        {Ingredients[Number(ingredientID)].description}
                    </Text>
                </View>

                {recipe && 
                <>
                <Text style={{ color: actColor.outline, fontSize: 30, marginTop: 10 }}>
                    Crafting
                </Text>
                <CraftingRecipe
                    recipe={Ingredients[Number(ingredientID)].recipe}
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
    ingredientImage: {
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