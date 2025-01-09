import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Colors } from "../constants/Colors";
import { ThemeContext } from "../constants/ThemeContext";
type Props = {
  name: string;
  image: string;
  number: string;
  element1 : string;
  element2? : string;
};
export default function Card11({ name, image, number,element1,element2 }: Props) {
  const { theme } = React.useContext(ThemeContext);
  const actColor = Colors[theme.mode];

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      
    },
    imageContainer: {
      width: 165,
      height: 165,
      borderRadius: 8,
      backgroundColor: actColor.outlineVariant,
    },
    infoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 10,
      alignItems: "center",
      position: 'absolute', 
      bottom: 0, 
      left: 0,
      right: 0,
      width:'100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 8,
      padding: 3,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    name: {
      fontSize: 14,
      color:"white",
      fontWeight: "bold",
    },
    number: {
      fontSize: 12,
    },
    iconimg:{
      position: 'absolute',
      left: 3,
      bottom: 138,
      width: 24,
      height: 24,
      borderTopLeftRadius: 8,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={[styles.infoContainer, {  }]}>
          <Text style={[styles.name, { color: 'white' }]}>{name}</Text>
          <Text style={[styles.number, { color: 'white' }]}>#{number}</Text>
        </View>
        <View>
        <Image source = {element1} style={styles.iconimg} />
        { element2 && <Image source = {element2} style={[styles.iconimg, { left: 28 }]} />}
        </View>
      </View>
    </View>
  );
}


