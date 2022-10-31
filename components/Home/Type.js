import { StyleSheet, Image, View } from "react-native";
import React from "react";
import MyText from "../MyText";

const icon = [
  {
    name: "Veg",
    image: "https://img.icons8.com/color/344/vegetarian-food-symbol.png",
  },
  {
    name: "Non-Veg",
    image: "https://img.icons8.com/color/344/non-vegetarian-food-symbol.png",
  },
  {
    name: "Vegan",
    image: "https://img.icons8.com/color/344/vegetarian-mark.png",
  },
];

const Type = ({ type, style }) => {
  return (
    <View style={[styles.type, style]}>
      <Image
        style={{ width: 20, height: 20 }}
        source={{
          uri:
            type === "Veg"
              ? icon[0].image
              : type === "Non-Veg"
              ? icon[1].image
              : icon[2].image,
        }}
      />
      <MyText
        fontWeight="Regular"
        style={{ color: "#393939", fontRight: 10, fontSize: 12 }}
      >
        {type}
      </MyText>
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  type: {
    fontSize: 12,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});
