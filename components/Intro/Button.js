import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AIcon from "react-native-vector-icons/AntDesign";

const Button = ({ type, page }) => {
  return (
    <View style={styles.button(type)}>
      <Text
        style={{
          color: "white",
          fontWeight: "800",
          opacity:
            type === "left"
              ? page === 0
                ? 0.5
                : 1
              : type === "right"
              ? page === 2
                ? 0.5
                : 1
              : 1,
        }}
      >
        {type === "right" ? "Next" : "Prev"}
      </Text>
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
