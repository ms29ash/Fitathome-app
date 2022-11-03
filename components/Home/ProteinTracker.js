import { StyleSheet, View, Image } from "react-native";
import React from "react";
import MyText from "../MyText";
import RText from "../RText";

const ProteinTracker = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "45%", height: 120, resizeMode: "contain" }}
        source={require("../../assets/food.png")}
      />
      <View>
        <RText style={{ fontSize: 12 }}>Your Daily Protein Target</RText>
        <RText style={{ fontSize: 20 }} fontWeight="Bold">
          25g/50g
        </RText>
        <View style={styles.ProgressBarWrapper}>
          <View style={styles.progressBar(50)}></View>
        </View>
      </View>
    </View>
  );
};

export default ProteinTracker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#bf040414",
    height: 160,
    alignItems: "center",
    borderRadius: 10,
  },
  ProgressBarWrapper: {
    height: 8,
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 10,
  },
  progressBar: (percentage) => ({
    backgroundColor: "#bf0404",
    width: `${percentage}%`,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 10,
  }),
});
