import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const BackButton = ({ style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {},
});
