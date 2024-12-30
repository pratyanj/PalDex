import React, { useState, useCallback, useMemo, useRef } from "react";
import { View,Text,StyleSheet, Modal,} from "react-native";
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
  const [parentCode, setParentCode] = useState(pla_key || "001");
  const [totalOffspring, setTotalOffspring] = useState(0);
  const [totalBreeding, setTotalBreeding] = useState(0);
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
    setTotalBreeding(data.length);
    return data;
  }, [pal_id]);
  const findOffspring = useMemo(() => {
    const offspringList = [];
    for (const key in breeding) {
      breeding[key].forEach((pair) => {
        if (pair.includes(parentCode)) {
          const otherPal = pair.find((p) => p !== parentCode);
          if (otherPal) {
            offspringList.push([otherPal, key]);
            
          }
        }
      });
    }
    setTotalOffspring(offspringList.length);
    return offspringList;
  }, [parentCode]);
    // Create separate refs for each bottom sheet
    const breedingBottomSheetRef = useRef<BottomSheet>(null);
    const offspringBottomSheetRef = useRef<BottomSheet>(null);

    // breedingBottomSheetRef.current?.close();
    // breedingBottomSheetRef.current?.expand();

    // Bottom sheet snap points (sheet heights)
    const snapPoints = useMemo(() => ["50%", "80%"], []);
  
    const handleSheetChanges = useCallback((index: number) => {
      if (index === -1) {
        // setModalVisible(false); // Close the breeding modal
        // setOffspringModalVisible(false); // Close the offspring modal
        breedingBottomSheetRef.current?.close();
        offspringBottomSheetRef.current?.close();
      }
    }, []);
  const handlePress = (action: string) => {
    if (action === "breeding") {
      breedingBottomSheetRef.current?.expand();
      // setModalVisible(true); // Open the modal
    } 
    else if (action === "offspring") {
      offspringBottomSheetRef.current?.expand();
      
    }
    else {
      console.log(`Pressed: ${action}`); 
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
            handlePress("offspring");
            

          }}
        />
        <MenuItem
          icon="star"
          title={`Obtain ${pals[Number(pal_id) - 1].name} from breeding method`}
          onPress={() => handlePress("breeding")}
        />
      </View>
      {/* Breeding Modal */}
     
          <BottomSheet
            ref={breedingBottomSheetRef }
            index={-1}
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
        
      {/* Offspring Modal */}
      
        
          <BottomSheet
            ref={offspringBottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={(index) => handleSheetChanges(index)}
            enablePanDownToClose={true}
            backgroundStyle={{ backgroundColor: actColor.surfaceVariant }}
            handleIndicatorStyle={{ backgroundColor: actColor.outline }}
          >
            <BottomSheetScrollView contentContainerStyle={styles.sheetContentContainer}>
              <Text style={styles.modalTitle}>Possible total Offsprings {totalOffspring}</Text>
              {findOffspring.map((item, index) => (
                <View key={index} style={[styles.breedingItem,{padding:10}]}>
                  <View style={{ flex: 1, alignItems: "center",flexDirection: "row", }}>
                    <Text style={{fontSize:20,color:actColor.onBackground}}>+</Text>
                    <Image
                      source={pals.find((pal) => pal.key === item[0])?.image}
                      style={styles.palImage}
                    />
                    <Text style={[styles.palName, { flexWrap: "wrap", flex: 1 ,}]}>
                      {pals.find((pal) => pal.key === item[0])?.name}
                    </Text>
                    
                  </View>
                  <Text
                    style={[styles.plus, { alignSelf: "center", marginHorizontal: 10 }]}
                  >
                    {" "}
                    ={" "}
                  </Text>
                  <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={pals.find((pal) => pal.key === item[1])?.image}
                      style={styles.palImage}
                    />
                    <Text style={[styles.palName, { flexWrap: "wrap", flex: 1 }]}>
                      {pals.find((pal) => pal.key === item[1])?.name}
                    </Text>
                  </View>
                </View>
              ))}
            </BottomSheetScrollView>
          </BottomSheet>

        
      

    </GestureHandlerRootView>
  );
}

