import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { popularItems } from "../../Data/items";
import MyText from "../MyText";
import PopularChoiceCard from "./PopularChoiceCard";

const PopularChoices = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MyText style={styles.heading}>Popular Choices</MyText>
        <TouchableOpacity>
          <MyText>show all</MyText>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {popularItems.map((item) => {
          return <PopularChoiceCard item={item} key={item._id.$oid} />;
        })}
      </ScrollView>
    </View>
  );
};

export default PopularChoices;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
