import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AIcon from "react-native-vector-icons/AntDesign";
import EIcon from "react-native-vector-icons/Entypo";
import React, { useState } from "react";
import intro from "../Data/intro";

const FeatureScreen = () => {
  const [page, setPage] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.title}>{intro[page].title}</Text>
            <Text
              style={{
                color: "white",
                marginTop: 10,
                fontFamily: "Montserrat",
                height: "40%",
              }}
            >
              {intro[page].description}
            </Text>
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
                  onPress={() => setPage((page) => page + 1)}
                  disabled={page === 2}
                >
                  <Button page={page} type={"right"} />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const Button = ({ type, page }) => {
  return (
    <View style={styles.button(type)}>
      <Text
        style={{
          color: "white",
          fontWeight: "800",
          opacity:
            type === "left"
              ? page === 0
                ? 0.5
                : 1
              : type === "right"
              ? page === 2
                ? 0.5
                : 1
              : 1,
        }}
      >
        {type === "right" ? "Next" : "Prev"}
      </Text>
      <AIcon name={type} size={30} color="#fff" />
    </View>
  );
};

const Dots = ({ page }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EIcon
        name="dot-single"
        style={{ marginRight: 5 }}
        size={page === 0 ? 50 : 30}
        color="#fff"
      />
      <EIcon
        name="dot-single"
        style={{ marginRight: 5 }}
        size={page === 1 ? 50 : 30}
        color="#fff"
      />
      <EIcon
        name="dot-single"
        style={{ marginRight: 5 }}
        size={page === 2 ? 50 : 30}
        color="#fff"
      />
    </View>
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
    fontFamily: "Montserrat",
    color: "white",
    fontWeight: "800",
    fontSize: 25,
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
  button: (type) => ({
    flexDirection: type == "right" ? "row" : "row-reverse",
    alignItems: "center",
  }),
});
