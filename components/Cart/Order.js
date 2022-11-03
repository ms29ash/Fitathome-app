import { StyleSheet, View } from "react-native";
import React from "react";
import MyText from "../MyText";
import RText from "../RText";
import { Divider } from "@rneui/themed";
import Button from "../Home/Button";

const Order = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <MyText>Items price</MyText>
        <RText>₹2000</RText>
      </View>
      <View style={styles.wrapper}>
        <MyText>Delivery charges</MyText>
        <RText>₹100</RText>
      </View>
      <Divider
        style={{ marginHorizontal: 18, marginVertical: 8 }}
        width={0.5}
        orientation="horizontal"
        color="#5d5d5d"
      />
      <View style={styles.wrapper}>
        <MyText fontWeight="Bold">Total Price</MyText>
        <RText fontWeight="Bold">₹2000</RText>
      </View>
      <Button style={styles.button}>Place Order</Button>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    height: "55%",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderColor: "#5d5d5d",
    borderWidth: 0.5,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 8,
  },
  button: {
    width: "85%",
    marginHorizontal: "10%",
    marginTop: 10,
    borderRadius: 30,
  },
});
