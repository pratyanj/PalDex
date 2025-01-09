import React, { useContext, useState, useRef, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../../constants/ThemeContext";
import { Colors } from "../../constants/Colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { pals } from "../../constants/pals";
import { Image } from "expo-image";
import InvHeader from "../../components/inv/Header";
import { breeding } from "../../components/micro/breeding";
import { router } from "expo-router";

export default function KnowOffspring() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const [selectedPal1, setSelectedPal1] = useState(null);
  const [selectedPal2, setSelectedPal2] = useState(null);
  const [offspring, setOffspring] = useState(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "80%"], []);
  const [activeCard, setActiveCard] = useState(null);

  const findOffspring = (pal1, pal2) => {
    if (pal1 && pal2) {
      const pal1Key = pal1.key;
      const pal2Key = pal2.key;

      for (const key in breeding) {
        breeding[key].forEach((pair) => {
          if (
            (pair[0] === pal1Key && pair[1] === pal2Key) ||
            (pair[0] === pal2Key && pair[1] === pal1Key)
          ) {
            setOffspring(pals.find((pal) => pal.key === key));
          }
        });
      }
    }
  };

  const Card = ({ onPress, selectedPal }) => (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.card,
          {
            backgroundColor: actColor.surface,
            shadowColor: actColor.shadow,
          },
        ]}
      >
        {selectedPal ? (
          <Image source={selectedPal.image} style={styles.selectedPalImage} />
        ) : (
          <AntDesign name="plus" size={30} color={actColor.onSurfaceDisabled} />
        )}
      </TouchableOpacity>
      {selectedPal && (
        <Text style={{ color: actColor.onSurfaceVariant }}>
          {selectedPal.name}
        </Text>
      )}
    </View>
  );

  const PalList = ({ onSelect }) => (
    <BottomSheetFlatList
      data={pals}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.palItem,
            {
              backgroundColor: actColor.surface,
            },
          ]}
          onPress={() => {
            onSelect(item);
            bottomSheetRef.current?.close();
          }}
        >
          <Image source={item.image} style={styles.palImage} />
          <Text style={[styles.palName, { color: actColor.onSurfaceVariant }]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.bottomSheetContent}
    />
  );

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView
          style={[styles.container, { backgroundColor: actColor.background }]}
        >
          <StatusBar
            barStyle="light-content"
            backgroundColor={actColor.background}
          />
          <InvHeader name={" "} path={"/Breeding"} actColor={actColor} />
          <Text style={[styles.header, { color: actColor.onSurfaceVariant }]}>
            Know Offspring
          </Text>
          <View style={styles.cardsContainer}>
            <Card
              selectedPal={selectedPal1}
              onPress={() => {
                setActiveCard("card1");
                bottomSheetRef.current?.expand();
              }}
            />
            <Text
              style={[
                styles.operatorText,
                { color: actColor.onSurfaceVariant },
              ]}
            >
              +
            </Text>
            <Card
              selectedPal={selectedPal2}
              onPress={() => {
                setActiveCard("card2");
                bottomSheetRef.current?.expand();
              }}
            />
          </View>
          <View style={[styles.resultContainer, { flexDirection: "column" }]}>
            <View
              style={[styles.resultCard, { backgroundColor: actColor.surface }]}
            >
              {offspring ? (
                <Image
                  source={offspring.image}
                  style={styles.selectedPalImage}
                />
              ) : (
                <AntDesign
                  name="questioncircleo"
                  size={30}
                  color={actColor.onSurfaceVariant}
                />
              )}
            </View>
            {offspring && (
              <>
                <Text style={{ color: actColor.onSurfaceVariant }}>
                  {offspring.name}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/paldetail",
                      params: { id: offspring.id - 1 },
                    })
                  }
                  style={{
                    backgroundColor: actColor.onBackground,
                    padding: 5,
                    borderRadius: 15,
                    marginVertical: 10,
                  }}
                >
                  <Text style={{ color: actColor.shadow, fontSize: 18 }}>
                    See Details
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>

          <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backgroundStyle={{
              backgroundColor: actColor.surfaceVariant,
              borderRadius: 20,
            }}
            handleIndicatorStyle={{
              backgroundColor: actColor.outline,
              height: 5,
            }}
          >
            <PalList
              onSelect={(pal) => {
                if (activeCard === "card1") {
                  setSelectedPal1(pal);
                  findOffspring(pal, selectedPal2);
                } else {
                  setSelectedPal2(pal);
                  findOffspring(selectedPal1, pal);
                }
              }}
            />
          </BottomSheet>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
  },
  resultContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  operatorText: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  selectedPalImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  resultCard: {
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  palItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
  },
  palImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  palName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  bottomSheetContent: {
    padding: 16,
  },
});
