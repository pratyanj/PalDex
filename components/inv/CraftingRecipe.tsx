import { Image } from "expo-image";
import { View, Text } from "react-native";

export const CraftingRecipe = ({ recipe, actColor }) => (
    <View style={{ marginTop: 5, marginBottom: 100 }}>
      <View
        style={{
          backgroundColor: actColor.inverseOnSurface,
          padding: 8,
          borderRadius: 8,
        }}
      >
        {recipe.map((i) => (
          <View
            key={i.name}
            style={{
              backgroundColor: actColor.surface,
              padding: 8,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 3,
              gap: 5,
            }}
          >
            <Image
              source={i.image_github_url}
              style={{
                width: 50,
                height: 50,
                backgroundColor: actColor.inverseOnSurface,
                borderRadius: 8,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ fontSize: 16, color: actColor.onSurface }}>
                {i.name.charAt(0).toUpperCase() +
                  i.name.slice(1).toLowerCase().replace(/_/g, " ")}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: actColor.onSurface,
                  fontWeight: "bold",
                }}
              >
                {i.quantity}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );