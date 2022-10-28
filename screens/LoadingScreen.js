import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo192.png")} />
      <Image
        style={{ width: 100, height: 40 }}
        source={require("../assets/spinner.gif")}
      />
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
