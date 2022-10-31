import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import intro from "../Data/intro";
import Dots from "../components/Intro/Dots";
import Button from "../components/Intro/Button";
import MyText from "../components/MyText";

const FeatureScreen = ({ navigation }) => {
  const [page, setPage] = useState(0);
  return (
    <SafeArea style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={{ flex: 1, height: "80%" }}
        source={{ uri: intro && intro[page].img }}
      >
        <View style={{ height: "60%" }}></View>
        <View style={styles.wrapper}>
          <LinearGradient
            colors={["#bf040406", "#bf0404"]}
            style={styles.linearGradient}
            start={{ x: 0, y: 0.1 }}
            end={{ x: 0, y: 0.2 }}
          >
            <MyText fontWeight="Bold" style={styles.title}>
              {intro[page].title}
            </MyText>
            <MyText
              style={{
                color: "white",
                marginTop: 10,
                height: "40%",
                fontSize: 12,
              }}
            >
              {intro[page].description}
            </MyText>
            <View style={{ height: "20%" }}>
              <View style={styles.buttons}>
                <TouchableOpacity
                  onPress={() => setPage((page) => page - 1)}
                  disabled={page === 0}
                >
                  <Button page={page} type={"left"} />
                </TouchableOpacity>
                <Dots page={page} />
                <TouchableOpacity
                  onPress={() => {
                    page === 2
                      ? navigation.navigate("LoginScreen")
                      : setPage((page) => page + 1);
                  }}
                >
                  <Button page={page} type={"right"} />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </SafeArea>
  );
};

export default FeatureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    flex: 1,
  },
  wrapper: {
    height: "40%",
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
    marginTop: 80,
  },
  buttons: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    right: 15,
    left: 15,
  },
});
