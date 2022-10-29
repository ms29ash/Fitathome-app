import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import items from "../../Data/items";
import RecommendationCard from "./RecommendationCard";
import Heading from "./Heading";

const Recommendations = () => {
  return (
    <View>
      <Heading>Top Picks For You</Heading>
      <Divider
        color="#f2f2f2"
        style={{ marginBottom: 10 }}
        orientation="horizontal"
        width={1}
      />
      {items.map((item) => (
        <TouchableOpacity key={item._id.$oid}>
          <RecommendationCard item={item} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Recommendations;
