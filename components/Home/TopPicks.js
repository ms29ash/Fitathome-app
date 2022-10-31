import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import items from "../../Data/items";
import TopPicksCard from "./TopPicksCard";
import Heading from "./Heading";

const TopPicks = () => {
  return (
    <View style={styles.container}>
      <Heading>Top Picks For You</Heading>
      <Divider
        color="#f2f2f2"
        style={{ marginBottom: 10 }}
        orientation="horizontal"
        width={1}
      />
      {items.map((item) => (
        <TouchableOpacity key={item._id.$oid}>
          <TopPicksCard item={item} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TopPicks;

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
  },
});
