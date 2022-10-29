import {
  StyleSheet,
  TouchableHighlight,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MyText from "../MyText";
import { Divider } from "@rneui/themed";
import items from "../../Data/items";
import RecommendationCard from "./RecommendationCard";

const Recommendations = () => {
  return (
    <View>
      <MyText fontWeight="Bold" style={styles.title}>
        Recommendations
      </MyText>
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

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});
