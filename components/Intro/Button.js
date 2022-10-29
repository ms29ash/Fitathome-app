import { StyleSheet, View } from "react-native";
import React from "react";
import AIcon from "react-native-vector-icons/AntDesign";
import MyText from "../MyText";

const Button = ({ type, page }) => {
  return (
    <View style={styles.button(type)}>
      <MyText
        fontWeight="Bold"
        style={{
          color: "white",
          opacity: type === "left" ? (page === 0 ? 0.5 : 1) : 1,
        }}
      >
        {type === "right" ? "Next" : "Prev"}
      </MyText>
      <AIcon name={type} size={30} color="#fff" />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (type) => ({
    flexDirection: type == "right" ? "row" : "row-reverse",
    alignItems: "center",
  }),
});
