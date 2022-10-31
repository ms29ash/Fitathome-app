import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MyText from "../MyText";
import { Entypo } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";

const Option = ({ children, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <MyText fontWeight="Medium">{children}</MyText>
        <Entypo name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
      <Divider style={{ marginHorizontal: 20 }} />
    </>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
});
