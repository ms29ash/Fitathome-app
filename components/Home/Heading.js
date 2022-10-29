import React from "react";
import { StyleSheet } from "react-native";
import MyText from "../MyText";

const Heading = (props) => {
  return (
    <MyText
      fontWeight="SemiBold"
      {...props}
      style={[styles.heading, props.style]}
    >
      {props.children}
    </MyText>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 15,
  },
});
