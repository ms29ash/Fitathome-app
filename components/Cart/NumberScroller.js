import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import RText from "../RText";

const NumberScroller = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={[styles.left, styles.mid]}>
        <Entypo name="plus" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.mid}>
        <RText fontWeight="Bold">4</RText>
      </View>
      <TouchableOpacity style={[styles.right, styles.mid]}>
        <Entypo name="minus" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NumberScroller;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },
  mid: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: "#f8f8f8",
  },
  left: {},
  right: {},
});
