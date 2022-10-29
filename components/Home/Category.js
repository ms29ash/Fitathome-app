import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import MyText from "../MyText";
const category = [
  {
    name: "Veg",
    image:
      "https://img.icons8.com/external-wanicon-flat-wanicon/344/external-vegetables-healthy-wanicon-flat-wanicon.png",
  },
  {
    name: "Non-Veg",
    image:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-chicken-foodies-flaticons-lineal-color-flat-icons.png",
  },
  {
    name: "Vegan",
    image: "https://img.icons8.com/emoji/344/green-salad-emoji.png",
  },
  {
    name: "Drinks",
    image: "https://img.icons8.com/color-glass/344/coconut-milk.png",
  },
];

const Category = () => {
  return (
    <View>
      <MyText style={{ fontSize: 20 }} fontWeight="Bold">
        Category
      </MyText>

      <View style={styles.container}>
        {category.map((item, index) => (
          <TouchableOpacity style={styles.wrapper} key={index}>
            <Image
              style={{ width: 55, height: 55 }}
              source={{
                uri: item.image,
              }}
            />
            <MyText fontWeight="SemiBold" style={styles.text}>
              {item.name}
            </MyText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },
  wrapper: {
    margin: 5,
    width: "47%",
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
  text: {
    marginLeft: 10,
  },
});
