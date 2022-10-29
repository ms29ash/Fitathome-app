import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import items from "../../Data/items";
import MyText from "../MyText";
import { Divider } from "@rneui/themed";
import Icon from "react-native-vector-icons/AntDesign";
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

const RecommendationCard = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.wrapper}>
          <MyText fontWeight="Medium" style={styles.name} numberOfLines={2}>
            {item.name}
          </MyText>

          <View style={styles.type}>
            <Image
              style={{ width: 20, height: 20 }}
              source={{
                uri:
                  item.type === "Veg"
                    ? icon[0].image
                    : item.type === "Non-Veg"
                    ? icon[1].image
                    : icon[2].image,
              }}
            />
            <Text
              fontWeight="Regular"
              style={{ color: "#393939", fontRight: 10, fontSize: 12 }}
            >
              {item.type}
            </Text>
          </View>

          <View style={styles.details}>
            <MyText style={styles.price}>&#8377;{item.price}</MyText>
            <View style={styles.star}>
              <Icon
                style={{ marginRight: 5 }}
                name="star"
                size={15}
                color="#bf0404"
              />
              <MyText style={{ fontSize: 12 }}>{item.ratings}</MyText>
            </View>
          </View>
        </View>
      </View>
      <Divider
        color="#f2f2f2"
        style={{ marginBottom: 5 }}
        orientation="horizontal"
        width={1}
      />
    </>
  );
};

export default RecommendationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 5,
  },
  image: {
    width: "40%",
    height: 110,
    marginRight: 10,
    resizeMode: "cover",
    borderRadius: 10,
  },
  wrapper: {
    width: "55%",
  },
  name: {
    width: "100%",
    flexShrink: 1,
    flexWrap: "wrap",
    fontSize: 14,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 12,
  },
  star: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  type: {
    fontSize: 12,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
