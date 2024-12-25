import React, { useState, useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert
} from "react-native";
import { MenuItem } from "./menu-item";
import { pals } from "../constants/pals";
import { breeding } from "./micro/breeding";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView ,BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Colors } from "../constants/Colors";
import { useContext } from "react";
import { ThemeContext } from "../constants/ThemeContext";
type Props = {
  pal_id: string;
};

export function MiscScreen({ pal_id }: Props) {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: actColor.background,
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
      color: actColor.onBackground,
    },

    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: actColor.onBackground,
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
      backgroundColor: actColor.inverseOnSurface,
      borderRadius: 16,
      marginBottom: 16,
      width: "100%",
      justifyContent: "space-between",
      padding: 12,
      shadowColor: actColor.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      elevation: 3, // For Android shadow
    },
    palImage: {
      width: 40,
      height: 40,
      borderRadius: 12,
      marginHorizontal: 8,
    },
    palName: {
      color: actColor.onBackground,
      fontSize: 16,
      fontWeight: "bold",
    },
    plus: {
      color: actColor.onBackground,
      fontSize: 18,
    },
    loadingText: {
      color: "white",
      fontSize: 14,
      textAlign: "center",
      marginVertical: 12,
    },
    flatListContainer: {
      // paddingHorizontal: 3,
      paddingBottom: 36,
    },
  });
  const [modalVisible, setModalVisible] = useState(false);
  const pla_key = pals[Number(pal_id) - 1].key|| '001';
  // Prepare breeding data
  const breedingData = useMemo(() => {
    const formattedPalId = pal_id.padStart(3, '0'); // Ensure correct formatting
    const breedingList = breeding[formattedPalId] || [];
  
    const data = [];
    for (let i = 0; i < breedingList.length; i++) {
      const first = String(breedingList[i][0]);
      const second = String(breedingList[i][1]);
  
      const firstPal = pals.find((pal) => pal.key === first);
      const secondPal = pals.find((pal) => pal.key === second);
      if (firstPal && secondPal) {
        data.push([firstPal.id, secondPal.id]);
      }
    }
    return data;
  }, [pal_id]);
    // Create separate refs for each bottom sheet
    const breedingBottomSheetRef = useRef<BottomSheet>(null);
    const offspringBottomSheetRef = useRef<BottomSheet>(null);

    // Bottom sheet snap points (sheet heights)
    const snapPoints = useMemo(() => ["50%", "80%"], []);
  
    // Update the handleSheetChanges callback
    const handleSheetChanges = useCallback((index: number) => {
      if (index === -1) {
        setModalVisible(false); // Close the breeding modal
        setOffspringModalVisible(false); // Close the offspring modal
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
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page for pagination

  const [results, setResults] = useState<string[][]>([]); // Store offspring data
  const [chunkedResults, setChunkedResults] = useState<string[][]>([]); // Data to display
  const [currentChunk, setCurrentChunk] = useState(0); // Current chunk index
  const CHUNK_SIZE = 15; // Number of items per chunk

  const findOffspring = () => {
    const offspringList = [];
    for (const key in breeding) {
      breeding[key].forEach((pair) => {
        if (pair.includes(parentCode)) {
          const otherPal =
            pair[0] === pair[1]
              ? key
              : pair.find((p: string) => p !== parentCode);
          if (otherPal) {
            offspringList.push([otherPal, key]);
          }
        }
      });
    }
    setResults(offspringList);
    setChunkedResults(offspringList.slice(0, CHUNK_SIZE)); // Load the first chunk
    setOffspringModalVisible(true);
  };

  // Function to load the next chunk
  const loadMoreData = () => {
    const nextChunk = currentChunk + 1;
    const start = nextChunk * CHUNK_SIZE;
    const end = start + CHUNK_SIZE;
    const nextData = results.slice(start, end);
    if (nextData.length > 0) {
      setChunkedResults((prev) => [...prev, ...nextData]);
      setCurrentChunk(nextChunk);
    }
  };
  // Create a memoized offspring item component
const OffspringListItem = React.memo(({ item }: { item: [string, string] }) => (
  <View style={styles.breedingItem}>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={pals.find((pal) => pal.key === item[0])?.image}
        style={styles.palImage}
      />
      <Text style={[styles.palName, { flexWrap: 'wrap', flex: 1 }]}>
        {pals.find((pal) => pal.key === item[0])?.name}
      </Text>
    </View>
    <Text style={[styles.plus, { alignSelf: 'center', marginHorizontal: 10 }]}> = </Text>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={pals.find((pal) => pal.key === item[1])?.image}
        style={styles.palImage}
      />
      <Text style={[styles.palName, { flexWrap: 'wrap', flex: 1 }]}>
        {pals.find((pal) => pal.key === item[1])?.name}
      </Text>
    </View>
  </View>));
  

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Other</Text>
      </View>
      <View>
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
            ref={breedingBottomSheetRef }
            index={0}
            snapPoints={snapPoints}
            onChange={(index) => handleSheetChanges(index)}
            enablePanDownToClose={true} // Enable slide down to close
            backgroundStyle={{ backgroundColor: actColor.surfaceVariant }}
            handleIndicatorStyle={{ backgroundColor: actColor.outline }}
          >
            <BottomSheetScrollView
              contentContainerStyle={styles.sheetContentContainer}
            >
              <Text style={styles.modalTitle}>Pals That Can Breed</Text>
              {breedingData.map((item, index) => (
                <View key={index} style={styles.breedingItem}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={pals.find((pal) => pal.id === item[0])?.image}
                      style={styles.palImage}
                    />
                    <Text style={[styles.palName, { flexWrap: 'wrap', flex: 1 }]}>
                      {pals.find((pal) => pal.id === item[0])?.name}
                    </Text>
                  </View>
                  <Text style={[styles.plus, { alignSelf: 'center', marginHorizontal: 10 }]}> + </Text>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={pals.find((pal) => pal.id === item[1])?.image}
                      style={styles.palImage}
                    />
                    <Text style={[styles.palName, { flexWrap: 'wrap', flex: 1 }]}>
                      {pals.find((pal) => pal.id === item[1])?.name}
                    </Text>
                  </View>
                </View>              ))}
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
            ref={offspringBottomSheetRef }
            index={0}
            snapPoints={snapPoints}
            onChange={(index) => handleSheetChanges(index)}
            enablePanDownToClose={true} 
            backgroundStyle={{ backgroundColor: actColor.surfaceVariant }}
            handleIndicatorStyle={{ backgroundColor: actColor.outline }}
          >
            <View style={styles.sheetContentContainer}>
              <Text style={styles.modalTitle}>Possible Offsprings</Text>
              <BottomSheetFlatList
              data={results.slice(0, currentPage * 15)} // Load items for the current page
              keyExtractor={(item, index) => `${item[0]}-${item[1]}-${index}`}
              renderItem={({ item }) => <OffspringListItem item={[item[0], item[1]]} />}
              contentContainerStyle={styles.flatListContainer} // New wrapper style
              onEndReached={() => {
                // Load next chunk when the end is reached
                if (currentPage * 15 < results.length) {
                  setCurrentPage((prev) => prev + 1);
                }
              }}
              onEndReachedThreshold={0.5} // Trigger when the user scrolls near the end
              ListFooterComponent={
                currentPage * 15 < results.length ? (
                  <Text style={styles.loadingText}>Loading more...</Text>
                ) : null
              }
            />

            </View>
          </BottomSheet>
        </GestureHandlerRootView>
      </Modal>

    </GestureHandlerRootView>
  );
}

