import React, { useContext, useMemo, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Animated
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Card11 from "../../components/palcrad";
import { pals } from "../../constants/pals";
import { router } from "expo-router";
import { Colors } from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "../../constants/ThemeContext";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";
import { SearchInput } from "../../components/micro/filter/search_input";
import { FilterButton } from "../../components/micro/filter/button";
import { Dropdown } from "react-native-element-dropdown";
export default function PalList() {
  const { theme } = useContext(ThemeContext);
  const actColor = Colors[theme.mode];
  
  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredPals, setFilteredPals] = useState(palsMemoized);
  const palsMemoized = useMemo(() => pals, []);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const [ filterVisible, setFilterVisible ] = useState(false);
  // Sorting and Filtering States
  // const [selectedRarity, setSelectedRarity] = useState("All");
  // const [sortOrder, setSortOrder] = useState("Name");
  // const [orderDirection, setOrderDirection] = useState("Descending");
  
  const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [selectedWorks, setSelectedWorks] = useState<string[]>([]);

  const filteredPals = useMemo(() => {
    // Apply filters based on selected elements and works
    return pals.filter((pal) => {
      const matchesElements =
        selectedElements.length === 0 ||
        pal.types.some((element) => selectedElements.includes(element.name));
      const matchesWorks =
        selectedWorks.length === 0 ||
        pal.suitability.some((work) => selectedWorks.includes(work.type));
      const matchesSearch =
        searchQuery.trim() === "" ||
        pal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pal.key.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesElements && matchesWorks && matchesSearch;
    });
  }, [searchQuery, selectedElements, selectedWorks]);

  const handle_filter_visible = () => {
    if (filterVisible) {
      setFilterVisible(false);
    } else {
      setFilterVisible(true);
    }
  };
  const rarity = [
    { label: "all", value: "all" },
    { label: "Common (1 → 4)", value: "common" },
    { label: "Rare (5 → 8)", value: "rare" },
    { label: "Epic (8 → 10)", value: "epic" },
    { label: "Legendary (10+) ", value: "Legendary (10+)" },
  ];
  const elements = useMemo(() =>[
    { img: require("../../assets/images/elements/dark.png"), value: "dark" },
    { img: require("../../assets/images/elements/dragon.png"), value: "dragon"},
    { img: require("../../assets/images/elements/electric.png"),value: "electric"},
    { img: require("../../assets/images/elements/fire.png"), value: "fire" },
    { img: require("../../assets/images/elements/grass.png"), value: "grass" },
    { img: require("../../assets/images/elements/ground.png"),value: "ground"},
    { img: require("../../assets/images/elements/ice.png"), value: "ice" },
    { img: require("../../assets/images/elements/neutral.png"),value: "neutral"},
    { img: require("../../assets/images/elements/water.png"), value: "water" },
  ], [])

  const handle_element = ( value: string) => {
    setSelectedElements((prevElements) => {
      const updatedElements = prevElements.includes(value)
        ? prevElements.filter((item) => item !== value) // Remove if already selected
        : [...prevElements, value]; // Add if not selected
  
      const filtered = palsMemoized.filter(
        (pal) =>
          (updatedElements.length === 0 || pal.types.some(element => updatedElements.includes(element.name)))
      );

      console.log(`Selected Element: ${value}`);
      console.log(`Updated List of Selected Elements: ${updatedElements}`);
      console.log(`Filtered Pals: ${filtered}`);

      return updatedElements;
    });
  };  
  const handle_work = ( value: string) => {
    setSelectedWorks((prevWorks) => {
      const updatedWorks = prevWorks.includes(value)
        ? prevWorks.filter((item) => item !== value) // Remove if already selected
        : [...prevWorks, value]; // Add if not selected
        const filtered = palsMemoized.filter(
          (pal) =>
            (updatedWorks.length === 0 || pal.suitability.some(work => updatedWorks.includes(work.type)))
        );

      console.log(`Selected Work: ${value}`);
      console.log(`Updated List of Selected Works: ${updatedWorks}`);
     
      return updatedWorks;
    });
  };
  

  const works = useMemo(() =>[
    { img: require("../../assets/images/works/handiwork.png"), value: "handiwork" },
    { img: require("../../assets/images/works/cooling.png"), value: "cooling" },
    { img: require("../../assets/images/works/farming.png"), value: "farming" },
    { img: require("../../assets/images/works/gathering.png"), value: "gathering" },
    { img: require("../../assets/images/works/generating_electricity.png"), value: "generating_electricity" },
    { img: require("../../assets/images/works/kindling.png"), value: "kindling" },
    { img: require("../../assets/images/works/lumbering.png"), value: "lumbering" },
    { img: require("../../assets/images/works/medicine_production.png"), value: "medicine_production" },
    { img: require("../../assets/images/works/mining.png"), value: "mining" },
    { img: require("../../assets/images/works/planting.png"), value: "planting" },
    { img: require("../../assets/images/works/transporting.png"), value: "transporting" },
    { img: require("../../assets/images/works/watering.png"), value: "watering" },
  ], [])
  


  // Handle search
  
  const handleShowsearchbar = () => {
    if (showSearchBar) {
      setShowSearchBar(false);
    } else {
      setShowSearchBar(true);
    }
  };
  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };
  
    
  // Apply Filters and Sorting


  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: actColor.background }}>
        {/* Header with Paldex and Search */}
        <View style={[styles.header, { backgroundColor: actColor.background }]}>
          {/* Paldex Title */}

          {/* Search Icon / Bar */}
          <View style={styles.searchContainer}>
            {showSearchBar ? (
              <TextInput
                style={[
                  styles.searchInput,
                  {
                    backgroundColor: actColor.surface,
                    color: actColor.onSurface,
                  },
                ]}
                placeholder="Search Pal..."
                placeholderTextColor={actColor.onSurfaceVariant}
                value={searchQuery}
                onChangeText={handleSearch}
                autoFocus={true}
              />
            ) : (
              <Text style={{ fontSize:30,color:actColor.primary,textAlign:"center" ,fontFamily:"Inter-Black"}}>
                Paldex
              </Text>
            )}
            <View style={{ flexDirection: "row", gap: 10 }}>
              <AntDesign
                name="search1"
                size={22}
                color={actColor.primary}
                onPress={() => handleShowsearchbar()}
                style={{
                  padding: 6,
                  borderRadius: 5,
                  backgroundColor: actColor.surfaceVariant,
                }}
              />
              <AntDesign
                name="filter"
                size={22}
                color={actColor.primary}
                onPress={() => handle_filter_visible()}
                style={{
                  padding: 6,
                  borderRadius: 5,
                  backgroundColor: actColor.surfaceVariant,
                }}
              />
            </View>
          </View>
        </View>

        {/* Scrollable List */}
        <ScrollView style={{ backgroundColor: actColor.background }}>
          {/* ----------------------------------------------------------------- */}
          
          
          
          {filterVisible && (
            <Animated.View style={{ flex: 1 , backgroundColor: actColor.surfaceVariant,marginHorizontal: 10,padding:5,borderRadius: 10}}>
              {/* add animetion later */}
              
              <Text style={styles.sectionTitle}>Filter by element</Text>
              <View style={[styles.filterGrid,{backgroundColor: actColor.onSurfaceDisabled,borderRadius: 10}]}>
              
                {elements.map((element, index) => (
                  <FilterButton
                    key={index}
                    img={element.img}
                    isSelected={selectedElements.includes(String(element.value))}
                    onPress={() => handle_element(element.value)}
                  />
                ))}
              </View>

              <Text style={styles.sectionTitle}>Filter by work</Text>
              <View style={[styles.filterGrid,{backgroundColor: actColor.onSurfaceDisabled,borderRadius: 10}]}>
                {works.map((work, index) => (
                  <FilterButton
                    key={index}
                    img={work.img}
                    isSelected={selectedWorks.includes(String(work.value))}
                    onPress={() => handle_work(work.value)}
                  />
                ))}
              </View>

              {/* Sorting and Filtering */}
            </Animated.View>
          )}
          
          <View style={styles.main}>
            {filteredPals.map((pal) => (
              <React.Fragment key={pal.id}>
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/paldetail",
                      params: { id: pal.id - 1 },
                    })
                  }
                >
                  <Card11
                    name={pal.name}
                    image={pal.image}
                    number={pal.key}
                    element={pal.types[0].image}
                  />
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>
          <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  main: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    maxWidth: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: "#0f1721",
    padding: 16,
  },
  title1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  dropdowns: {
    flexDirection: "row",
    marginHorizontal: -4,
    backgroundColor:"red",
    justifyContent:"space-around"
  },
  sectionTitle: {
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  filterGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 3,
    marginBottom: 11,
  },
  dropdown: {
    
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
