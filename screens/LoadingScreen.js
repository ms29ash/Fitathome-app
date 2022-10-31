import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const LoadingScreen = ({ navigation, setAuth }) => {
  const [loaded] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
  if (!loaded) {
    return null;
  } else {
    setTimeout(() => {
      // navigation.navigate("IntroScreen");
      setAuth(true);
    }, 3000);
  }

  return (
    <SafeArea style={styles.container}>
      <Image
        style={{ width: 220, height: 120, resizeMode: "contain" }}
        source={require("../assets/logo192.png")}
      />
      <Image
        style={{ width: 80, height: 30 }}
        source={require("../assets/spinner.gif")}
      />
    </SafeArea>
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
