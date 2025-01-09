import React, { useContext, useState, useRef, useMemo, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../../constants/ThemeContext";
import { Colors } from "../../constants/Colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { pals } from "../../constants/pals";
import { Image } from "expo-image";
import { breeding } from "../../components/micro/breeding";
import InvHeader from "../../components/inv/Header";

export default function FindParent() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const [selectedPal, setSelectedPal] = useState(null);
  const [parents, setParents] = useState([]);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["50%", "80%"], []);

  // Add these state variables at the top of your component
  const [displayedPals, setDisplayedPals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const CHUNK_SIZE = 20;

  const findParents = (pal) => {
    const selectedKey = pal.key;
    const foundParents = [];
    for (const key in breeding) {
      breeding[key].forEach((pair) => {
        if (key === selectedKey) {
          foundParents.push(pair);
        }
      });
    }
    setParents(foundParents);
  };

  const PalCard = ({ pal }) => (
    <View style={{  flexDirection: "row", alignItems: "center", marginBottom: 5 , justifyContent: "space-between" }}>
      <Image source={pal.image} style={{ width: 60, height: 60, borderRadius: 10 }} />
      <Text style={[styles.palName, { color: actColor.onSurfaceVariant,marginLeft: 10 }]}>
        {pal.name}
      </Text>
    </View>
  );

  const ParentPair = ({ pair }) => (
    <View style={[styles.breedingItem, { backgroundColor: actColor.surfaceDisabled, borderRadius: 10, marginVertical: 10, padding: 10 }]}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={pals.find((pal) => pal.key === pair[0])?.image}
          style={styles.palImage}
        />
        <Text style={[styles.palName, { flexWrap: 'wrap', flex: 1, color: actColor.onSurfaceVariant }]}>
          {pals.find((pal) => pal.key === pair[0])?.name}
        </Text>
      </View>
      <Text style={[styles.plus, { alignSelf: 'center', marginHorizontal: 10, color: actColor.onSurface }]}> + </Text>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={pals.find((pal) => pal.key === pair[1])?.image}
          style={styles.palImage}
        />
        <Text style={[styles.palName, { flexWrap: 'wrap', flex: 1, color: actColor.onSurfaceVariant }]}>
          {pals.find((pal) => pal.key === pair[1])?.name}
        </Text>
      </View>
    </View>
  );
  
  useEffect(() => {
    if (selectedPal) {
      const selectedKey = selectedPal.key;
      const foundParents = [];
      for (const key in breeding) {
        breeding[key].forEach((pair) => {
          if (key === selectedKey) {
            foundParents.push(pair);
          }
        });
      }
      setParents(foundParents);
    }
  }, [selectedPal]);

  // Add this function to load more pals
  const loadMorePals = () => {
    const nextIndex = currentIndex + CHUNK_SIZE;
    const newPals = pals.slice(currentIndex, nextIndex);
    setDisplayedPals([...displayedPals, ...newPals]);
    setCurrentIndex(nextIndex);
  };

  // Initialize first chunk when component mounts
  useEffect(() => {
    loadMorePals();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView
          style={[styles.container, { backgroundColor: actColor.background }]}
        >
            <InvHeader name={' '} actColor={actColor} path={'/Breeding'} />
          <Text style={[styles.header, { color: actColor.onSurfaceVariant }]}>
            Find Parents
          </Text>
          <TouchableOpacity
            style={[
              styles.selectButton,
              { backgroundColor: actColor.surface },
            ]}
            onPress={() => bottomSheetRef.current?.expand()}
          >
            <Text style={[styles.selectText, { color: actColor.onSurface }]}>
              {selectedPal ? `Selected: ${selectedPal.name}` : "Select a Pal"}
            </Text>
          </TouchableOpacity>
          {selectedPal && (
            <ScrollView style={styles.parentsContainer}>
              {parents.length > 0 ? (
                parents.map((pair, index) => (
                  <ParentPair key={index} pair={pair} />
                ))
              ) : (
                <Text
                  style={[styles.noParentsText, { color: actColor.onSurface }]}
                >
                  No parents found for this pal.
                </Text>
              )}
            </ScrollView>
          )}
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
            <BottomSheetFlatList

              data={displayedPals}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TouchableOpacity




                  style={[styles.palItem, { backgroundColor: actColor.surface }]}
                  onPress={() => {
                    setSelectedPal(item);
                    bottomSheetRef.current?.close();

                    findParents(item);
                  }}
                >
                  <Image source={item.image} style={styles.palImage} />



                  <Text style={[styles.palName, { color: actColor.onSurfaceVariant }]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              onEndReached={loadMorePals}
              onEndReachedThreshold={0.5}
              contentContainerStyle={styles.bottomSheetContent}
            />
          </BottomSheet>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:20
  },
  selectButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  selectText: {
    fontSize: 18,
    fontWeight: "600",
  },
  parentsContainer: {
    marginTop: 20,
  },
  parentPair: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  palCard: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  palImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  palName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  noParentsText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  palItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    borderRadius: 10,
    marginVertical: 5,
  },
  bottomSheetContent: {
    padding: 16,
  },
  breedingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  plus: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
