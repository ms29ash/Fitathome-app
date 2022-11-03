import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import MyText from "../MyText";
import RText from "../RText";
import NumberScroller from "./NumberScroller";
import { Entypo } from "@expo/vector-icons";
const Cards = (item) => {
  const { name, image, price } = item.item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.wrapper}>
        <MyText
          style={{ fontSize: 13, width: "70%" }}
          numberOfLines={1}
          fontWeight="Bold"
        >
          {name}
        </MyText>
        <RText style={{ marginTop: 10 }}>₹{price}</RText>
        <NumberScroller style={styles.scroller} />
      </View>
      <RText style={styles.total} fontWeight="Bold">
        ₹{4 * price}
      </RText>
      <TouchableOpacity style={styles.cross}>
        <Entypo name="cross" size={20} color="#5d5d5d" />
      </TouchableOpacity>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#5d5d5d",
    borderBottomWidth: 0.25,
  },
  image: {
    width: "30%",
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
  wrapper: {
    height: "90%",
    width: "70%",
  },
  scroller: {
    marginTop: 10,
  },
  total: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  cross: {
    position: "absolute",
    top: 10,
    right: 10,
    borderColor: "#5d5d5d",
    borderWidth: 1,
    borderRadius: 50,
  },
});
