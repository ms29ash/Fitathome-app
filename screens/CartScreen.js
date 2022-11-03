import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import items from "../Data/items";
import Cards from "../components/Cart/Cards";
import MyText from "../components/MyText";
import Order from "../components/Cart/Order";

const CartScreen = () => {
  return (
    <View>
      <ScrollView>
        {items.map((item, index) => (
          <Cards item={item} key={index} />
        ))}
      </ScrollView>
      <Order />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
