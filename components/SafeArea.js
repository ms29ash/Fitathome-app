import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import React from "react";

const SafeArea = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <>{children}</>
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
