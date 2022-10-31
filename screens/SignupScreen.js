import {
  Image,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MyText from "../components/MyText";
import SafeArea from "../components/SafeArea";

const SignupScreen = ({ navigation }) => {
  return (
    <SafeArea style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo192.png")} />
      <View style={{ width: "85%" }}>
        <MyText fontWeight="Bold" style={styles.heading}>
          Create your{"\n"}account
        </MyText>

        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          textContentType="emailAddress"
          autoFocus={true}
          keyBoardType="email-address"
          style={styles.textInput}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="newPassword"
          placeholder="Password"
          style={styles.textInput}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="phone"
          placeholder="Phone"
          keyBoardType="phone-pad"
          style={styles.textInput}
        />
        <TouchableOpacity>
          <MyText fontWeight="Bold" style={styles.button}>
            Sign up
          </MyText>
        </TouchableOpacity>
        <MyText
          style={{
            textAlign: "center",
            color: "#7f7f7f",
            fontSize: 12,
            marginTop: 10,
            marginBottom: 25,
          }}
        >
          By clicking sign up you agree to the our Terms and Conditions.
        </MyText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <MyText style={{ fontSize: 12 }}>Already have an account? </MyText>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <MyText fontWeight="SemiBold" style={{ color: "#bf0404" }}>
              Sign in
            </MyText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
};

export default SignupScreen;

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
  heading: {
    color: "#bf0404",
    fontSize: 20,
    width: "100%",
    textAlign: "left",
    marginBottom: 30,
  },
  textInput: {
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    borderColor: "#ebebeb",
    borderRadius: 50,
    fontSize: 15,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  forgotPassword: {
    color: "#bf0404",
    textAlign: "right",
  },
  button: {
    backgroundColor: "#bf0404",
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 50,
  },
});
