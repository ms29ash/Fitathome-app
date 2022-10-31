import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MyText from "../MyText";
import Icon from "react-native-vector-icons/AntDesign";

const Button = ({ style, txtStyle, color, children }) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      {!children ? (
        <>
          <Icon name="plus" color={color ? color : "#fff"} size={20} />
          <MyText fontWeight="SemiBold" style={[{ color: "white" }, txtStyle]}>
            Add
          </MyText>
        </>
      ) : (
        <MyText fontWeight="SemiBold" style={[{ color: "white" }, txtStyle]}>
          {children}
        </MyText>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bf0404",
    flexDirection: "row",
    width: 90,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
