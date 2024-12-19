import React, { useState, useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MenuItem } from "./menu-item";
import { pals } from "../constants/pals";
import { breeding } from "./micro/breeding";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

type Props = {
  pal_id: string;
};

export function MiscScreen({ pal_id }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const pla_key = pals[Number(pal_id) - 1].key;
  // Prepare breeding data
  const breedingData = useMemo(() => {
    const data = [];
    for (let i = 0; i < breeding[pal_id]?.length; i++) {
      const first = String(breeding[pal_id][i][0]);
      const second = String(breeding[pal_id][i][1]);
      const firstPal = pals.find((pal) => pal.key === first);
      const secondPal = pals.find((pal) => pal.key === second);
      if (firstPal && secondPal) {
        data.push([firstPal.id, secondPal.id]);
      }
    }
    return data;
  }, [pal_id]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  // Bottom sheet snap points (sheet heights)
  const snapPoints = useMemo(() => ["50%", "80%"], []);

  // Close bottom sheet on change
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setModalVisible(false); // Close the modal when sheet is dismissed
    }
  }, []);

  const handlePress = (action: string) => {
    if (action === "breeding") {
      setModalVisible(true); // Open the modal
    } else {
      console.log(`Pressed: ${action}`);
    }
  };
  const [parentCode, setParentCode] = useState(pla_key || "001");
  // const [results, setResults] = useState([]);
  const [offspringModalVisible, setOffspringModalVisible] = useState(false); // New state for offspring modal
  const [results, setResults] = useState<string[][]>([]); // Store offspring data

  const findOffspring = () => {
    const offspringList = [];
    for (const key in breeding) {
      breeding[key].forEach((pair) => {
        if (pair.includes(parentCode)) {
          // console.log(pair);
          const otherPal =
            pair[0] === pair[1]
              ? key
              : pair.find((p: string) => p !== parentCode);
          // console.log([key,otherPal]);
          // console.log("-------*+*---------")
          if (otherPal) {
            offspringList.push([otherPal,key]);
          }
        }
      });
    }
    setResults(offspringList);
    setOffspringModalVisible(true);
    // console.log(offspringList.length);
  };
  // findOffspring();
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Other</Text>
      </View>
      <View style={styles.menuContainer}>
        <MenuItem
          icon="map-pin"
          title="Locations"
          onPress={() => handlePress("locations")}
        />
        <MenuItem
          icon="star"
          title={`See possible offsprings of ${pals[Number(pal_id) - 1].name}`}
          onPress={() => {
            setParentCode(pal_id); // Set parent code dynamically
            findOffspring(); // Find offspring for the selected pal_id
          }}
        />
        <MenuItem
          icon="star"
          title={`Obtain ${pals[Number(pal_id) - 1].name} from breeding method`}
          onPress={() => handlePress("breeding")}
        />
      </View>
      {/* Breeding Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true} // Enable slide down to close
            backgroundStyle={{ backgroundColor: "#353535" }}
            handleIndicatorStyle={{ backgroundColor: "#fff" }}
          >
            <BottomSheetScrollView
              contentContainerStyle={styles.sheetContentContainer}
            >
              <Text style={styles.modalTitle}>Pals That Can Breed</Text>
              {breedingData.map((item, index) => (
                <View key={index} style={styles.breedingItem}>
                  <Image
                    source={pals.find((pal) => pal.id === item[0])?.image}
                    style={styles.palImage}
                  />
                  <Text style={styles.palName}>
                    {pals.find((pal) => pal.id === item[0])?.name}
                  </Text>
                  <Text style={styles.plus}> + </Text>
                  <Text style={styles.palName}>
                    {pals.find((pal) => pal.id === item[1])?.name}
                  </Text>
                  <Image
                    source={pals.find((pal) => pal.id === item[1])?.image}
                    style={styles.palImage}
                  />
                </View>
              ))}
            </BottomSheetScrollView>
          </BottomSheet>
        </GestureHandlerRootView>
      </Modal>
      {/* Offspring Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={offspringModalVisible}
        onRequestClose={() => setOffspringModalVisible(false)}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true} // Enable slide down to close
            backgroundStyle={{ backgroundColor: "#353535" }}
            handleIndicatorStyle={{ backgroundColor: "#fff" }}
          >
            <BottomSheetScrollView
              contentContainerStyle={styles.sheetContentContainer}
            >
              <Text style={styles.modalTitle}>Possible Offsprings</Text>
              {results.map((item, index) => (
                <View key={index} style={styles.breedingItem}>
                  <Image
                    source={pals.find((pal) => pal.key === item[0])?.image}
                    style={styles.palImage}
                  />
                  <Text style={styles.palName}>
                    {pals.find((pal) => pal.key === item[0])?.name}
                  </Text>
                  <Text style={styles.plus}> = </Text>
                  <Image
                    source={pals.find((pal) => pal.key === item[1])?.image}
                    style={styles.palImage}
                  />
                  <Text style={styles.palName}>
                    {pals.find((pal) => pal.key === item[1])?.name}
                  </Text>
                </View>
              ))}
            </BottomSheetScrollView>
          </BottomSheet>
        </GestureHandlerRootView>
      </Modal>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  menuContainer: {
    marginTop: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  sheetContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 36,
    alignItems: "center",
  },
  breedingItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2b2b2b",
    borderRadius: 16,
    marginBottom: 16,
    width: "100%",
    justifyContent: "space-between",
    padding: 12,
  },
  palImage: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginHorizontal: 8,
  },
  palName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  plus: {
    color: "white",
    fontSize: 18,
  },
});
