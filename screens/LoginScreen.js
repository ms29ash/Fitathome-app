import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LoginForm from "../components/Login/LoginForm";
import MyText from "../components/MyText";
import SafeArea from "../components/SafeArea";

const LoginScreen = () => {
  return (
    <SafeArea style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo192.png")} />

      <LoginForm />

      <View style={styles.wrapper}>
        <MyText style={{ textAlign: "center" }}>Sign in with</MyText>
        <TouchableOpacity style={[styles.signInOpt, { borderColor: "f2f2f2" }]}>
          <Image
            style={styles.optImg}
            source={{ uri: "https://img.icons8.com/color/344/google-logo.png" }}
          />
          <MyText fontWeight="Medium" style={styles.optText}>
            Google
          </MyText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signInOpt, { borderColor: "#4267B2" }]}
        >
          <Image
            style={styles.optImg}
            source={{
              uri: "https://img.icons8.com/fluency/344/facebook-new.png",
            }}
          />
          <MyText fontWeight="Medium" style={styles.optText}>
            Facebook
          </MyText>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  logo: {
    width: 120,
    height: 80,
    marginBottom: 25,
  },

  wrapper: { width: "85%", marginTop: 40 },
  signInOpt: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
  },
  optText: {
    textAlign: "center",
    width: "100%",
  },
  optImg: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 10,
    color: "white",
  },
});
