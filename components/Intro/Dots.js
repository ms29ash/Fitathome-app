import { StyleSheet, Text, View } from "react-native";
import React from "react";
import EIcon from "react-native-vector-icons/Entypo";

const Dots = ({ page }) => {
  return (
    <View style={styles.container}>
      <EIcon
        name="dot-single"
        style={styles.icon}
        size={page === 0 ? 50 : 30}
        color="#fff"
      />
      <EIcon
        name="dot-single"
        style={styles.icon}
        size={page === 1 ? 50 : 30}
        color="#fff"
      />
      <EIcon
        name="dot-single"
        style={styles.icon}
        size={page === 2 ? 50 : 30}
        color="#fff"
      />
    </View>
  );
};
export default Dots;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
});
